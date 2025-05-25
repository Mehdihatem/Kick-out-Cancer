# Test info

- Name: Accessibility >> should have proper alt text for images
- Location: C:\Users\mehdi\.cursor\Kick out cancer_2\tests\playwright\accessibility.spec.ts:26:7

# Error details

```
Error: browserType.launch: Executable doesn't exist at C:\Users\mehdi\AppData\Local\ms-playwright\firefox-1482\firefox\firefox.exe
╔═════════════════════════════════════════════════════════════════════════╗
║ Looks like Playwright Test or Playwright was just installed or updated. ║
║ Please run the following command to download new browsers:              ║
║                                                                         ║
║     npx playwright install                                              ║
║                                                                         ║
║ <3 Playwright Team                                                      ║
╚═════════════════════════════════════════════════════════════════════════╝
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
  12 |     expect(accessibilityScanResults.violations).toEqual([])
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
> 26 |   test('should have proper alt text for images', async ({ page }) => {
     |       ^ Error: browserType.launch: Executable doesn't exist at C:\Users\mehdi\AppData\Local\ms-playwright\firefox-1482\firefox\firefox.exe
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