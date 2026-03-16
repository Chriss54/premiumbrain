import { NextResponse } from 'next/server';

/**
 * GET /api/config
 * Returns the current site configuration.
 * On Vercel, reads from environment variables.
 * Locally, reads from config/site-config.json as fallback.
 */
export async function GET() {
  const config = {
    calendlyUrl:
      process.env.NEXT_PUBLIC_CALENDLY_URL ||
      'https://calendly.com/premiumbrain/demo',
    googleAdsConversionId:
      process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID || '',
    analyticsTrackingId: process.env.NEXT_PUBLIC_GA_TRACKING_ID || '',
    links: {
      community: process.env.NEXT_PUBLIC_COMMUNITY_URL || '',
      youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL || '',
      linkedin: process.env.NEXT_PUBLIC_LINKEDIN_URL || '',
    },
  };

  // Try to merge with local JSON config (works locally, not on Vercel)
  try {
    const fs = await import('fs');
    const path = await import('path');
    const configPath = path.join(process.cwd(), 'config', 'site-config.json');
    const fileConfig = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
    // File config fills in any gaps not set by env vars
    return NextResponse.json({
      calendlyUrl: config.calendlyUrl || fileConfig.calendlyUrl,
      googleAdsConversionId:
        config.googleAdsConversionId || fileConfig.googleAdsConversionId,
      analyticsTrackingId:
        config.analyticsTrackingId || fileConfig.analyticsTrackingId,
      links: {
        community:
          config.links.community || fileConfig.links?.community || '',
        youtube: config.links.youtube || fileConfig.links?.youtube || '',
        linkedin: config.links.linkedin || fileConfig.links?.linkedin || '',
      },
    });
  } catch {
    // File not available (e.g., Vercel) — use env vars only
    return NextResponse.json(config);
  }
}

/**
 * POST /api/config
 * Saves config locally (development only).
 * On Vercel, config should be set via environment variables in the dashboard.
 */
export async function POST(request) {
  // Verify admin password
  const authHeader = request.headers.get('x-admin-password');
  const adminPassword = process.env.ADMIN_PASSWORD;

  if (!adminPassword || authHeader !== adminPassword) {
    return NextResponse.json(
      { error: 'Unauthorized' },
      { status: 401 }
    );
  }

  try {
    const body = await request.json();
    const config = {
      calendlyUrl: body.calendlyUrl || '',
      googleAdsConversionId: body.googleAdsConversionId || '',
      analyticsTrackingId: body.analyticsTrackingId || '',
      links: body.links || {},
    };

    // Try to write to file (works locally, fails on Vercel — that's OK)
    try {
      const fs = await import('fs');
      const path = await import('path');
      const configPath = path.join(process.cwd(), 'config', 'site-config.json');
      fs.writeFileSync(configPath, JSON.stringify(config, null, 2), 'utf-8');
    } catch {
      // On Vercel: read-only filesystem — config must be set via env vars
    }

    return NextResponse.json({ success: true, config });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to save config' },
      { status: 500 }
    );
  }
}
