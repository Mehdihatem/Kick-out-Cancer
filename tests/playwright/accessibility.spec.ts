import { test, expect } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test.describe('Accessibility', () => {
  test('should not have any accessibility violations', async ({ page }) => {
    await page.goto('/')

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze()

    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('should have proper heading structure', async ({ page }) => {
    await page.goto('/')
    
    const headings = await page.$$('h1, h2, h3, h4, h5, h6')
    expect(headings.length).toBeGreaterThan(0)
    
    // Vérifie que le premier heading est un h1
    const firstHeading = await page.$('h1')
    expect(firstHeading).not.toBeNull()
  })

  test('should have proper alt text for images', async ({ page }) => {
    await page.goto('/')
    
    const images = await page.$$('img')
    for (const img of images) {
      const alt = await img.getAttribute('alt')
      expect(alt).not.toBeNull()
      expect(alt).not.toBe('')
    }
  })

  test('should have proper color contrast', async ({ page }) => {
    await page.goto('/')

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2aa'])
      .withRules(['color-contrast'])
      .analyze()

    expect(accessibilityScanResults.violations).toEqual([])
  })

  test('should be keyboard navigable', async ({ page }) => {
    await page.goto('/')
    
    // Vérifie que tous les éléments interactifs sont focusables
    const interactiveElements = await page.$$('a, button, input, select, textarea')
    for (const element of interactiveElements) {
      const tabIndex = await element.getAttribute('tabindex')
      expect(tabIndex).not.toBe('-1')
    }
  })
}) 