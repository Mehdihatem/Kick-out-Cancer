import { render } from '@testing-library/react'
import { axe, toHaveNoViolations } from 'jest-axe'
import Home from '../pages/index'
import About from '../pages/qui-sommes-nous'
import Event from '../pages/event-2025'

expect.extend(toHaveNoViolations)

describe('Accessibility', () => {
  it('should not have any accessibility violations on home page', async () => {
    const { container } = render(<Home />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('should not have any accessibility violations on about page', async () => {
    const { container } = render(<About />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it('should not have any accessibility violations on event page', async () => {
    const { container } = render(<Event />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })
}) 