# Creative Prompts — Round 1

> Generated from creative_review.md | Selected by user on 2026-03-15
> Suggestions: A1 + A3 + B2

---

## Prompt A1: Rewrite Hero Subheadline (Outcome-Focused)

**What:** Replace the feature-listing subheadline with outcome-focused copy in all 3 languages.

**EN:** "Cut onboarding time by 60%. Give every employee — in every language — instant access to everything your company has ever known."
**DE:** "Verkürzen Sie die Einarbeitungszeit um 60%. Geben Sie jedem Mitarbeiter — in jeder Sprache — sofortigen Zugriff auf das gesamte Wissen Ihres Unternehmens."
**FR:** "Réduisez le temps d'intégration de 60%. Donnez à chaque employé — dans sa langue — un accès instantané à tout le savoir de votre entreprise."

**Files:** `messages/en.json`, `messages/de.json`, `messages/fr.json`
**Acceptance:** Hero subheadline shows outcome-focused copy in all 3 languages.

---

## Prompt A3: Hero Mockup Typing Animation

**What:** Add a typing animation to the dashboard mockup search bar. The search text cycles through demo queries with a realistic typing/deleting effect, making the static mockup feel alive.

**Implementation:** CSS-driven typing animation in the mockup search text. The text should appear to type out a question character by character, pause, then delete and type a new question.

**Files:** `components/Hero.js`, `components/Hero.module.css`
**Acceptance:** The mockup search bar "types" queries automatically. Animation loops continuously.

---

## Prompt B2: Founder Testimonials

**What:** Add a testimonial/quote section to Social Proof with Chris and Lutfiya's actual quotes and professional headshots (generated). Include their titles and a quote that reinforces the dogfooding narrative.

**Implementation:**
- Generate professional headshot images for Chris and Lutfiya
- Add a testimonial card section below the existing Social Proof content
- Include localized quote strings in all 3 translation files

**Files:** `components/SocialProof.js`, `components/SocialProof.module.css`, `messages/*.json`
**Acceptance:** Two founder testimonials with photos appear in the Social Proof section.
