# Project Brief — PremiumBrain.ai
> Generated on 2026-03-14 through the Antigravity Academy Onboarding

## 0. Project Configuration

### Project Type: Web-App
### Quality Preset: Enterprise
> Bulletproof quality. Accessibility, Performance (Lighthouse >90), Security-Basics. Every agent reviews at the highest standard. No shortcuts — the result must withstand Fortune-500 scrutiny.

### Expert Team (Kreis der Exzellenz)
- **Student (Builder):** Frontend Developer & Growth Engineer — Parsons School of Design + Stanford d.school, Spezialisierung in Conversion-optimiertem Design, Funnel-Architektur und Performance Marketing Assets
- **Examiner (Quality Gate):** Senior Performance Marketing Lead bei Google — 10 Jahre Erfahrung in Landing Page Audits, Ad Policy Compliance, Core Web Vitals und Conversion Rate Optimization
- **Creative Director (Visionary):** David Ogilvy — *"The consumer isn't a moron; she is your wife."* Research-basierte Kreativität, Headlines die verkaufen, jedes Wort muss arbeiten.
- **Revision Agent:** Inherits Student persona (Frontend Developer & Growth Engineer)

---

## 1. Vision

**PremiumBrain.ai** ist die Landing Page + Conversion Funnel für **Company Brain** — ein RAG-basiertes Firmengedächtnis, das sämtliche Unternehmensdaten (PDFs, Videos, Audio, Texte) aufnimmt und intelligent durchsuchbar macht.

**Kein Chatbot, kein ChatGPT-Wrapper** — ein vollständiges Wissenssystem mit:
- **Multimodaler Analyse:** Videos werden visuell analysiert, nicht nur transkribiert
- **Multilingual:** Mitarbeiter fragen in ihrer Sprache, System antwortet in ihrer Sprache
- **Voice-Interface:** Als App auf dem Handy — direkt mit dem System sprechen
- **Automatisierung:** Tasks erstellen, Ideen bewerten, Meetings zusammenfassen

**Ziel der Landing Page:** Jeder Entscheidungsträger versteht in 30 Sekunden, was Company Brain ist, und bucht einen Demo-Call.

**Zusätzlich:** YouTube Skippable In-Stream Ad Storyboards + Scripts für die Werbekampagne.

---

## 2. Target Audience

### Primär (Phase 1): Hotels (international)
- **Persona:** Hotel General Manager / Operations Director
- **Pain Point:** Multikulturelles Personal, extreme Fluktuation, Saisonkräfte, Sprachbarrieren bei Schulungen
- **Pitch:** *„Dein neuer Mitarbeiter spricht kein Deutsch? Egal. Unser System spricht seine Sprache."*
- **Budget:** €20.000–€50.000 für maßgeschneiderte Lösungen

### Sekundär (Phase 2): Handwerk & Haustechnik (DACH)
- **Persona:** Meister / Betriebsinhaber
- **Pain Point:** Maschinenanleitungen, Sicherheitsvorschriften, Lehrlingsausbildung
- **Budget:** Gut verdienend, echter Schulungsbedarf

### Tertiär (Phase 3): Expansion
- Autohäuser, Kanzleien, lokale Unternehmen — jede Branche mit hohem internem Wissen und teuren Einlernprozessen

---

## 3. Functional Requirements

### Must-Haves
- [ ] **Landing Page** mit Sektionen: Hero + CTA → Problem → Lösung → Features → Social Proof → Pricing → FAQ → Final CTA
- [ ] **Mehrsprachigkeit** (EN als Default, DE, FR) — von Anfang an eingebaut
- [ ] **Dark Mode + Light Mode** — Toggle mit Persistenz
- [ ] **Responsive Design** — Mobile, Tablet, Desktop
- [ ] **Calendly-Integration** — CTA führt zu Demo-Call-Buchung (Platzhalter, später konfigurierbar)
- [ ] **Admin-Panel** (`/admin`) — geschützte Route zum Einstecken von:
  - Calendly URL
  - Google Ads Conversion ID
  - Analytics Tracking ID
  - Weitere Links/Account-Daten
- [ ] **Config-Driven Content** — branchenspezifische Varianten über JSON-Dateien
- [ ] **URL-Parameter-basierte Personalisierung** — `?industry=hotel&lang=de` swappt Inhalte dynamisch
- [ ] **Google Ads Creatives:** 3× YouTube Skippable In-Stream Ad Storyboards mit:
  - Ausformulierte Storyboards mit Shot-Beschreibungen
  - Visuelle Mockups der Key-Frames
  - Fertige Scripts für Chris + Lutfiya
- [ ] **Lighthouse Score >90** in allen Kategorien
- [ ] **Core Web Vitals optimiert** — LCP, FID, CLS innerhalb Google-Empfehlungen

### Nice-to-Haves
- [ ] IP-basierte Auto-Spracherkennung
- [ ] A/B-Testing-fähige Struktur (Headline-Varianten)
- [ ] Animated scroll transitions / Micro-Interactions
- [ ] Cookie-Banner / DSGVO-konform
- [ ] Sitemap + robots.txt für SEO

---

## 4. User Flows

### Primärer Funnel
```
YouTube Skippable Ad (branchenspezifisch, lokalisiert)
  → Landing Page (Sprache = Ad-Sprache)
    → Hero: "30-Sekunden-Verständnis" + CTA
    → Scrollt durch Problem → Lösung → Features → Social Proof → Pricing → FAQ
    → CTA: "Demo buchen" → Calendly
      → Demo-Call: Prospect bringt eigene Daten mit
        → Live-Demo: RAG mit den Daten des Kunden
          → Custom-Lösung Angebot ($2.000–$50.000)
```

### Sekundärer Pfad
```
Landing Page → Community-Mitgliedschaft ($100/Monat)
```

### Admin-Flow
```
/admin (passwortgeschützt)
  → Calendly-Link eintragen/ändern
  → Tracking-IDs eintragen
  → Analytics verknüpfen
  → Keine Redeployment nötig
```

---

## 5. Design & UX

### Stil
**Premium/Corporate** — Prada-inspiriert. Luxus-B2B-Seriosität.

### Farbpalette
- **Primary:** Schwarz (#0A0A0A) — Hintergrund (Dark Mode)
- **Accent:** Rot (Brand-Rot aus bestehendem Logo, ~#DC2626) — CTAs, Highlights, Stripe-Element
- **Text:** Weiß (#FFFFFF) auf Dark, Schwarz (#0A0A0A) auf Light
- **Light Mode:** Weiß (#FFFFFF) Hintergrund, Rot-Akzente bleiben
- **Markantes Design-Element:** Langer roter Streifen (Prada-Referenz)

### Branding
- **Logo:** „science experts.ai" — bestehendes Logo mit rotem vertikalem Akzent
- **Marke auf Landing Page:** PremiumBrain.ai (Sub-Brand von science experts.ai)
- **Typografie:** Premium Sans-Serif (z.B. Inter, Outfit oder vergleichbar)

### Interaktivität
- Dark/Light Mode Toggle
- Smooth Scroll-Animationen
- Subtle Hover-Effekte auf CTAs und Feature-Cards
- Parallax oder Fade-In auf Scroll

### Produkt-Screenshots
- Google Meet Automation Dashboard als Referenz für „Company Brain in Aktion"
- Screenshots von Community-Plattform als Social Proof

---

## 6. Tech Stack

| Komponente | Technologie |
|---|---|
| **Frontend** | Next.js 14+ (App Router, SSG) |
| **Styling** | CSS Modules (kein Framework-Overhead) |
| **i18n** | next-intl oder custom i18n Lösung (DE/EN/FR) |
| **Content** | JSON Config-Dateien pro Branche + Sprache |
| **Admin** | Geschützte `/admin` Route mit Vercel KV oder API-Route |
| **Hosting** | Vercel |
| **Tracking** | gtag.js (konfigurierbar über Admin) |
| **Analytics** | Konfigurierbar über Admin |
| **Domain** | PremiumBrain.ai (vorläufig) |
| **Externe Integration** | Calendly (Embed/Link, konfigurierbar) |

---

## 7. Success Criteria

- [ ] Landing Page sieht aus „wie aus einem Guss" — Premium, konsistent, professionell
- [ ] Jeder Entscheidungsträger versteht in 30 Sekunden, was Company Brain ist
- [ ] Lighthouse Score >90 in ALLEN Kategorien (Performance, Accessibility, Best Practices, SEO)
- [ ] Core Web Vitals im grünen Bereich
- [ ] Vollständig responsive (Mobile, Tablet, Desktop)
- [ ] Dark Mode + Light Mode funktionieren einwandfrei
- [ ] Drei Sprachen (EN, DE, FR) funktional und konsistent
- [ ] Admin-Panel funktioniert: Calendly, Tracking, Analytics eintragbar
- [ ] Branchenspezifische URL-Personalisierung funktioniert
- [ ] 3 YouTube Skippable Ad Storyboards komplett (Storyboard + Key-Frames + Script)
- [ ] Vercel-Deployment läuft fehlerfrei
- [ ] Deadline: ~21. März 2026

---

## 8. Dealbreakers

- ❌ **Brand-Inkonsistenz** — Farben, Fonts, Tonalität müssen durchgehend einheitlich sein
- ❌ **Langsame Ladezeit** — Lighthouse Performance <90 ist inakzeptabel
- ❌ **Schlechte Mobile-Darstellung** — Jede Sektion muss auf Mobile perfekt funktionieren
- ❌ **Generisches Design** — Die Seite muss wie ein Premium-B2B-Produkt wirken, nicht wie ein Template

---

## 9. References

### Design-Referenzen
- **Prada** — Schwarz-Rot/Weiß-Rot Farbschema, langer Streifen als Design-Element
- **Bestehendes Branding:** science experts.ai Logo + Community-Plattform + Science Tube

### Produkt-Referenzen
- **Google Meet Automation Dashboard** (googlemeetautomation-web.vercel.app) — Company Brain Proof of Concept
- **Science Experts Community** — Skool-ähnliche Plattform als Social Proof

### Werbestrategie-Kontext
- **YouTube-Kanal:** Englisch, Produkt-Kanal. Jedes Video = organischer Content + potenzieller Ad-Creative
- **Paid Ads:** Lokalisiert, branchenspezifisch. Hotel-Video als Ad vor Hotel-Content in reichen ZIP-Codes
- **Targeting:** Top-500-ZIP-Codes USA (affluent) + Premium-PLZ DACH
- **Format:** Skippable In-Stream Ads
- **Testbudget:** $500 für 10 Tage, 5 Creatives, nur CTR messen. Über 2% = skalieren

### Team
- **Chris Müller** — Kreativkopf, Architekt, native DE + EN
- **Dr. Lutfiya Miller** — Ausführung, Demos, native EN + FR. Doktortitel = Glaubwürdigkeit
- **Video-Dynamik:** Chris pitcht Problem → Lutfiya zeigt Lösung → Chris fasst zusammen

### Monetarisierung
- Community-Mitgliedschaft: $100/Monat
- Custom-Lösungen: $2.000–$50.000 pro Auftrag
- Revenue aus Custom-Lösungen fließt in Ads

### Unfaire Vorteile
- Selbst programmiert und selbst genutzt (kein theoretisches Produkt)
- Multilingual mit Trust-System (kein Wettbewerber bietet das)
- Kein Konkurrent im französischsprachigen Markt
- Zahlungsflexibilität: Kreditkarte, Lastschrift, Rechnung für Firmen
