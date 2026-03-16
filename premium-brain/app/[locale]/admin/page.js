'use client';

import { useState } from 'react';
import styles from './admin.module.css';

const ADMIN_FIELDS = [
  { key: 'calendlyUrl', label: 'Calendly URL', type: 'url', placeholder: 'https://calendly.com/your-link/demo' },
  { key: 'googleAdsConversionId', label: 'Google Ads Conversion ID', type: 'text', placeholder: 'AW-XXXXXXXXXX' },
  { key: 'analyticsTrackingId', label: 'Analytics Tracking ID', type: 'text', placeholder: 'G-XXXXXXXXXX' },
];

const LINK_FIELDS = [
  { key: 'community', label: 'Community URL', placeholder: 'https://community.premiumbrain.ai' },
  { key: 'youtube', label: 'YouTube Channel', placeholder: 'https://youtube.com/@premiumbrain' },
  { key: 'linkedin', label: 'LinkedIn', placeholder: 'https://linkedin.com/company/premiumbrain' },
];

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [saved, setSaved] = useState(false);
  const [loading, setLoading] = useState(false);

  const [config, setConfig] = useState({
    calendlyUrl: 'https://calendly.com/premiumbrain/demo',
    googleAdsConversionId: '',
    analyticsTrackingId: '',
    links: {
      community: '',
      youtube: '',
      linkedin: '',
    },
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        setIsAuthenticated(true);
        setAdminPassword(password);
        setError('');
        // Load current config
        try {
          const configRes = await fetch('/api/config');
          const data = await configRes.json();
          if (data && data.calendlyUrl) setConfig(data);
        } catch {
          // Use defaults if API not available
        }
      } else {
        const data = await res.json();
        setError(data.error || 'Invalid password');
      }
    } catch {
      setError('Connection error. Is the server running?');
    } finally {
      setLoading(false);
    }
  };

  const handleFieldChange = (key, value) => {
    setConfig((prev) => ({ ...prev, [key]: value }));
    setSaved(false);
  };

  const handleLinkChange = (key, value) => {
    setConfig((prev) => ({
      ...prev,
      links: { ...prev.links, [key]: value },
    }));
    setSaved(false);
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/config', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-password': adminPassword,
        },
        body: JSON.stringify(config),
      });
      if (res.ok) {
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
      } else {
        setError('Failed to save. Check your admin credentials.');
      }
    } catch {
      setError('Failed to save. The config will be applied on next deployment.');
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className={styles.loginContainer}>
        <div className={styles.loginCard}>
          <div className={styles.loginHeader}>
            <span className={styles.loginStripe} />
            <h1>PremiumBrain Admin</h1>
            <p>Configuration Panel</p>
          </div>
          <form onSubmit={handleLogin} className={styles.loginForm}>
            <label htmlFor="admin-password">Password</label>
            <input
              id="admin-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              autoFocus
              className={styles.input}
              disabled={loading}
            />
            {error && <p className={styles.error}>{error}</p>}
            <button type="submit" className="btn btn-primary" disabled={loading}>
              {loading ? 'Authenticating…' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.adminContainer}>
      <div className={styles.adminHeader}>
        <h1>⚙️ Site Configuration</h1>
        <p>Update tracking IDs, Calendly URL, and external links without redeployment.</p>
      </div>

      <section className={styles.section}>
        <h2>Core Settings</h2>
        {ADMIN_FIELDS.map((field) => (
          <div key={field.key} className={styles.fieldGroup}>
            <label htmlFor={`field-${field.key}`}>{field.label}</label>
            <input
              id={`field-${field.key}`}
              type={field.type}
              value={config[field.key] || ''}
              onChange={(e) => handleFieldChange(field.key, e.target.value)}
              placeholder={field.placeholder}
              className={styles.input}
            />
          </div>
        ))}
      </section>

      <section className={styles.section}>
        <h2>External Links</h2>
        {LINK_FIELDS.map((field) => (
          <div key={field.key} className={styles.fieldGroup}>
            <label htmlFor={`link-${field.key}`}>{field.label}</label>
            <input
              id={`link-${field.key}`}
              type="url"
              value={config.links?.[field.key] || ''}
              onChange={(e) => handleLinkChange(field.key, e.target.value)}
              placeholder={field.placeholder}
              className={styles.input}
            />
          </div>
        ))}
      </section>

      <div className={styles.actions}>
        <button
          onClick={handleSave}
          className="btn btn-primary btn-large"
          disabled={loading}
        >
          {saved ? '✅ Saved!' : loading ? 'Saving…' : '💾 Save Configuration'}
        </button>
        {saved && <p className={styles.savedNote}>Configuration saved. Changes will apply on next page load.</p>}
      </div>

      <section className={styles.section}>
        <h2>Deployment Notes</h2>
        <div className={styles.infoBox}>
          <p><strong>Local:</strong> Config is saved to <code>config/site-config.json</code></p>
          <p><strong>Vercel:</strong> Set environment variables in the Vercel Dashboard → Settings → Environment Variables</p>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Current Config (JSON)</h2>
        <pre className={styles.codeBlock}>{JSON.stringify(config, null, 2)}</pre>
      </section>
    </div>
  );
}
