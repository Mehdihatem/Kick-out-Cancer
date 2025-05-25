# Test info

- Name: Accessibility >> should not have any accessibility violations
- Location: C:\Users\mehdi\.cursor\Kick out cancer_2\tests\playwright\accessibility.spec.ts:5:7

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  -  1
+ Received  + 82

- Array []
+ Array [
+   Object {
+     "description": "Ensure each HTML document contains a non-empty <title> element",
+     "help": "Documents must have <title> element to aid in navigation",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/document-title?application=playwright",
+     "id": "document-title",
+     "impact": "serious",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": null,
+             "id": "doc-has-title",
+             "impact": "serious",
+             "message": "Document does not have a non-empty <title> element",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Document does not have a non-empty <title> element",
+         "html": "<html data-critters-container=\"\">",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "html",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.text-alternatives",
+       "wcag2a",
+       "wcag242",
+       "TTv5",
+       "TT12.a",
+       "EN-301-549",
+       "EN-9.2.4.2",
+       "ACT",
+     ],
+   },
+   Object {
+     "description": "Ensure every HTML document has a lang attribute",
+     "help": "<html> element must have a lang attribute",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.10/html-has-lang?application=playwright",
+     "id": "html-has-lang",
+     "impact": "serious",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "messageKey": "noLang",
+             },
+             "id": "has-lang",
+             "impact": "serious",
+             "message": "The <html> element does not have a lang attribute",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   The <html> element does not have a lang attribute",
+         "html": "<html data-critters-container=\"\">",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "html",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.language",
+       "wcag2a",
+       "wcag311",
+       "TTv5",
+       "TT11.a",
+       "EN-301-549",
+       "EN-9.3.1.1",
+       "ACT",
+     ],
+   },
+ ]
    at C:\Users\mehdi\.cursor\Kick out cancer_2\tests\playwright\accessibility.spec.ts:12:49
```

# Page snapshot

```yaml
- navigation:
  - list:
    - listitem:
      - link "Accueil":
        - /url: "#hero"
    - listitem:
      - link "Notre ambition":
        - /url: "#about"
    - listitem:
      - link "Prochain évènement":
        - /url: "#event"
    - listitem:
      - link "Partenaires":
        - /url: "#partners"
    - listitem:
      - link "Ils nous soutiennent":
        - /url: "#supporters"
    - listitem:
      - link "Je soutiens la recherche":
        - /url: "#don"
    - listitem:
      - link "Qui sommes-nous ?":
        - /url: "#team"
- main:
  - img "Hero background"
  - heading "Kick Out Cancer" [level=1]
  - paragraph: Ensemble, nous pouvons faire la différence
  - link "Inscrire mon équipe à l'événement":
    - /url: https://www.helloasso.com/associations/kickoutcancer/evenements/inscrire-ton-equipe-1
    - text: J'inscris mon équipe
  - heading "Notre ambition" [level=2]
  - paragraph: "Kick Out Cancer, c'est le premier tournoi de sports de combat mixant professionnels de la santé, sportifs et grand public autour d'une même ambition : mettre KO le cancer par le mouvement, l'innovation et la solidarité."
  - link "Rejoindre le mouvement Kick Out Cancer":
    - /url: "#don"
    - text: Rejoindre le mouvement
  - link "Découvrir l'équipe":
    - /url: "#team"
  - heading "Prochain évènement" [level=2]
  - img "Save the date - Prochain évènement Kick Out Cancer"
  - link "Inscrire mon équipe à l'événement":
    - /url: https://www.helloasso.com/associations/kickoutcancer/evenements/inscrire-ton-equipe-1
    - text: J'inscris mon équipe
  - heading "Nos partenaires" [level=2]
  - img "IHU PRISM"
  - heading "Partenaire scientifique officiel" [level=3]
  - paragraph: "IHU PRISM est un institut de recherche translationnelle et médicale dédié à la médecine de précision en oncologie. Sa mission : mieux comprendre la biologie de chaque cancer pour réduire la mortalité en identifiant les formes agressives dès le diagnostic et en proposant le traitement le plus adapté à chaque patient."
  - paragraph: "PRISM réunit l'excellence de Gustave Roussy, CentraleSupélec, Université Paris-Saclay, Unicancer et Inserm autour d'une approche intégrative et innovante : intelligence artificielle, analyse de l'ADN circulant, épigénétique, hétérogénéité clonale, biologie spatiale…"
  - paragraph: "Objectif : créer une cartographie digitale de chaque patient, identifier de nouveaux biomarqueurs et accélérer l'accès aux thérapies ciblées et aux essais précoces."
  - link "En savoir plus sur IHU PRISM":
    - /url: https://prism.center/about-prism/
    - text: En savoir plus
  - heading "Devenez partenaire" [level=3]
  - paragraph: "Associez votre marque à un événement sportif et solidaire à fort impact médiatique : visibilité réseaux sociaux, présence presse, storytelling d'engagement, activation terrain… Ensemble, faisons bouger les lignes contre le cancer !"
  - link "Contacter l'équipe pour un partenariat":
    - /url: mailto:contact@kickoutcancer.org?subject=Demande de partenariat pour la prochaine édition Kick Out Cancer
    - text: Écrire à l'équipe
  - link "Télécharger le dossier de partenariat":
    - /url: /documents/dossier-partenariat.pdf
    - text: Dossier partenariat
  - img "Illustration partenariat"
  - heading "Nos Partenaires" [level=2]
  - link "Digilityx":
    - /url: https://digilityx.com
    - img "Digilityx"
  - link "Elwood":
    - /url: https://elwood.fr
    - img "Elwood"
  - link "Stetoo":
    - /url: https://stetoo.com
    - img "Stetoo"
  - heading "Je soutiens la recherche" [level=2]
  - iframe
  - heading "Qui sommes-nous ?" [level=2]
  - paragraph: Kick Out Cancer est une association loi 1901 créée par des chercheurs, oncologues et pharmaciens — tous sportifs — pour transformer le mouvement en accélérateur de recherche et de prévention contre le cancer.
  - heading "Fondateurs" [level=3]
  - article:
    - img "Mehdi Hioul"
    - heading "Mehdi Hioul" [level=4]
    - paragraph: Pharmacien hospitalier – ASFA
  - article:
    - img "Ibrahim Bouakka"
    - heading "Ibrahim Bouakka" [level=4]
    - paragraph: Chercheur en oncologie – Gustave Roussy
  - article:
    - img "Loïc Poiraudeau"
    - heading "Loïc Poiraudeau" [level=4]
    - paragraph: Chercheur en oncologie – Gustave Roussy
  - article:
    - img "Benjamin Verret"
    - heading "Benjamin Verret" [level=4]
    - paragraph: Oncologue – Gustave Roussy
  - article:
    - img "Ronan Flippot"
    - heading "Ronan Flippot" [level=4]
    - paragraph: Oncologue – Gustave Roussy
  - article:
    - img "Marc-Antoine Benderra"
    - heading "Marc-Antoine Benderra" [level=4]
    - paragraph: Oncologue – AP-HP
  - article:
    - img "Matthieu Delaye"
    - heading "Matthieu Delaye" [level=4]
    - paragraph: Oncologue – Institut Curie
  - heading "Présidents d'honneur" [level=3]
  - article:
    - img "Dr Ines Vas Luiz"
    - paragraph: Dr Ines Vas Luiz
    - paragraph: Oncologue – Gustave Roussy
  - article:
    - img "Dr Suzette Delaloge"
    - paragraph: Dr Suzette Delaloge
    - paragraph: Oncologue – Gustave Roussy
  - article:
    - img "Pr Fabrice André"
    - paragraph: Pr Fabrice André
    - paragraph: Oncologue – Gustave Roussy
  - img "Kick Out Cancer"
  - paragraph: Sport • Science • Solidarité Association loi 1901 – Paris, France
  - navigation:
    - heading "Navigation" [level=4]
    - list:
      - listitem:
        - link "L'association":
          - /url: "#about"
      - listitem:
        - link "Qui sommes-nous":
          - /url: "#team"
      - listitem:
        - link "Prochain évènement":
          - /url: "#event"
      - listitem:
        - link "Partenaires":
          - /url: "#partners"
      - listitem:
        - link "Ils nous soutiennent":
          - /url: "#supporters"
      - listitem:
        - link "Je soutiens la recherche":
          - /url: "#don"
  - heading "Contact" [level=4]
  - paragraph: contact@kickoutcancer.org
  - paragraph: LinkedIn • Instagram • X
  - paragraph: © 2025 Kick Out Cancer — Tous droits réservés
- alert
```

# Test source

```ts
   1 | import { test, expect } from '@playwright/test'
   2 | import AxeBuilder from '@axe-core/playwright'
   3 |
   4 | test.describe('Accessibility', () => {
   5 |   test('should not have any accessibility violations', async ({ page }) => {
   6 |     await page.goto('/')
   7 |
   8 |     const accessibilityScanResults = await new AxeBuilder({ page })
   9 |       .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
  10 |       .analyze()
  11 |
> 12 |     expect(accessibilityScanResults.violations).toEqual([])
     |                                                 ^ Error: expect(received).toEqual(expected) // deep equality
  13 |   })
  14 |
  15 |   test('should have proper heading structure', async ({ page }) => {
  16 |     await page.goto('/')
  17 |     
  18 |     const headings = await page.$$('h1, h2, h3, h4, h5, h6')
  19 |     expect(headings.length).toBeGreaterThan(0)
  20 |     
  21 |     // Vérifie que le premier heading est un h1
  22 |     const firstHeading = await page.$('h1')
  23 |     expect(firstHeading).not.toBeNull()
  24 |   })
  25 |
  26 |   test('should have proper alt text for images', async ({ page }) => {
  27 |     await page.goto('/')
  28 |     
  29 |     const images = await page.$$('img')
  30 |     for (const img of images) {
  31 |       const alt = await img.getAttribute('alt')
  32 |       expect(alt).not.toBeNull()
  33 |       expect(alt).not.toBe('')
  34 |     }
  35 |   })
  36 |
  37 |   test('should have proper color contrast', async ({ page }) => {
  38 |     await page.goto('/')
  39 |
  40 |     const accessibilityScanResults = await new AxeBuilder({ page })
  41 |       .withTags(['wcag2aa'])
  42 |       .withRules(['color-contrast'])
  43 |       .analyze()
  44 |
  45 |     expect(accessibilityScanResults.violations).toEqual([])
  46 |   })
  47 |
  48 |   test('should be keyboard navigable', async ({ page }) => {
  49 |     await page.goto('/')
  50 |     
  51 |     // Vérifie que tous les éléments interactifs sont focusables
  52 |     const interactiveElements = await page.$$('a, button, input, select, textarea')
  53 |     for (const element of interactiveElements) {
  54 |       const tabIndex = await element.getAttribute('tabindex')
  55 |       expect(tabIndex).not.toBe('-1')
  56 |     }
  57 |   })
  58 | }) 
```