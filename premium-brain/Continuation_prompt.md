Ich arbeite am Projekt PremiumBrain.ai (Next.js 16 + next-intl v4 + CSS Modules).

## Status
- Der Build (`npm run build`) schlägt fehl mit 8 Fehlern — alle im Edge Middleware Kontext:
  1. `@formatjs/intl-localematcher` kann interne Module nicht auflösen (`./abstract/CanonicalizeLocaleList.js`, `ResolveLocale.js`, `LookupSupportedLocales.js`)
  2. `negotiator` kann interne Module nicht auflösen (`./lib/charset`, `./lib/encoding`, `./lib/language`, `./lib/mediaType`)
- Ursache: Next.js 16 Turbopack hat Kompatibilitätsprobleme mit diesen Packages im Edge Middleware Runtime
- Next.js 16 zeigt außerdem: `⚠ The "middleware" file convention is deprecated. Please use "proxy" instead.`
- Die middleware.js ist simpel: nur next-intl createMiddleware mit Routing für en/de/fr
- `negotiator` ist explizit in package.json als Dependency — sollte evtl. raus (next-intl bringt es selbst mit)

## Was noch NICHT versucht wurde
- Clean reinstall hat gehangen (node_modules mit Leerzeichen im Pfad blockierten rm -rf)
- Noch nicht versucht: Next.js auf 15.x downgraden (sicherer Fix)
- Noch nicht versucht: next-intl auf neueste Version updaten
- Noch nicht versucht: Migration von middleware.js zur neuen "proxy" Convention von Next.js 16
- Lint wurde noch nicht ausgeführt
- Dev-Server wurde noch nicht getestet

## Aufgabe
1. Starte mit `npm install` (frischer Clone, also kein node_modules vorhanden)
2. Fix die Build-Fehler — bewerte diese Optionen:
   a) `negotiator` aus package.json entfernen + clean install
   b) Next.js von 16 auf 15.x downgraden (stabilste Option)
   c) next-intl updaten falls eine neuere Version Next.js 16 Turbopack Edge unterstützt
3. Stelle sicher dass `npm run build` durchläuft
4. Stelle sicher dass `npm run dev` funktioniert
5. Prüfe `npm run lint` und fixe Fehler
6. Teste dass alle 3 Locales erreichbar sind: /en/, /de/, /fr/
7. Prüfe den gesamten Code auf weitere Probleme (fehlende Imports, kaputte Referenzen, etc.)

Lies zuerst CLAUDE.md für die Projektkonventionen.