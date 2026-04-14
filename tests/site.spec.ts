import { test, expect } from '@playwright/test'

test.describe('Site layout and content', () => {
  test('homepage loads with correct title', async ({ page }) => {
    await page.goto('/')
    await expect(page).toHaveTitle(
      'Sam Neubardt: Professional Bad Boy \ud83d\ude0e'
    )
  })

  test('homepage lists all content sorted by date descending', async ({
    page,
  }) => {
    await page.goto('/')
    const items = page.locator('.post-list h3')
    await expect(items).toHaveCount(3)
    // Sorted by date descending: Pie Crust (Sep 2), Corn Biscotti (Aug 19), Pound Cake (Jul 31)
    await expect(items.nth(0)).toContainText('Pie Crust')
    await expect(items.nth(1)).toContainText('Corn Biscotti')
    await expect(items.nth(2)).toContainText('Lemon Poppy Seed Pound Cake')
  })

  test('homepage shows dates in correct format', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('.post-list')).toContainText('02 September, 2018')
    await expect(page.locator('.post-list')).toContainText('19 August, 2018')
    await expect(page.locator('.post-list')).toContainText('31 July, 2018')
  })

  test('homepage shows excerpts', async ({ page }) => {
    await page.goto('/')
    await expect(page.locator('.post-list')).toContainText(
      'delicious creatures'
    )
  })

  test('recipe page renders full content', async ({ page }) => {
    await page.goto('/recipes/corn-biscotti/')
    await expect(page.locator('h1')).toHaveText('Corn Biscotti')
    await expect(page.locator('main')).toContainText('Ingredients')
    await expect(page.locator('main')).toContainText('Instructions')
    await expect(page.locator('main')).toContainText('1 stick butter')
  })

  test('about page shows content', async ({ page }) => {
    await page.goto('/about/')
    await expect(page.locator('main')).toContainText(
      'serious business professional'
    )
    await expect(page.locator('main')).toContainText(
      'Look for him around the net!'
    )
  })

  test('404 page', async ({ page }) => {
    await page.goto('/404.html')
    await expect(page.locator('h1')).toHaveText('NOT FOUND')
    await expect(page.locator('main')).toContainText(
      "You just hit a route that doesn't exist"
    )
  })

  test('header has rebeccapurple background', async ({ page }) => {
    await page.goto('/')
    const header = page.locator('header')
    await expect(header).toHaveCSS(
      'background-color',
      'rgb(102, 51, 153)' // rebeccapurple
    )
  })

  test('header navigation links work', async ({ page }) => {
    await page.goto('/')

    await page.locator('nav a:has-text("About")').click()
    await expect(page).toHaveURL(/\/about\//)
    await expect(page.locator('main')).toContainText('serious business')

    await page.locator('nav a:has-text("Recipes")').click()
    await expect(page).toHaveURL(/\/recipes\//)
  })

  test('site title links to homepage', async ({ page }) => {
    await page.goto('/about/')
    await page.locator('.site-title').click()
    await expect(page).toHaveURL('/')
  })

  test('footer has copyright and Creative Commons license', async ({
    page,
  }) => {
    await page.goto('/')
    const footer = page.locator('footer')
    await expect(footer).toContainText('Sam Neubardt')
    await expect(
      footer.locator('img[alt="Creative Commons License"]')
    ).toBeVisible()
    await expect(footer.locator('a[href*="creativecommons.org"]')).toBeVisible()
  })

  test('recipes page lists only recipes', async ({ page }) => {
    await page.goto('/recipes/')
    const items = page.locator('.post-list h3')
    await expect(items).toHaveCount(3)
    await expect(page.locator('.post-list')).toContainText('Pie Crust')
    await expect(page.locator('.post-list')).toContainText('Corn Biscotti')
    await expect(page.locator('.post-list')).toContainText(
      'Lemon Poppy Seed Pound Cake'
    )
  })

  test('content area has correct max-width', async ({ page }) => {
    await page.goto('/')
    const content = page.locator('.content')
    await expect(content).toHaveCSS('max-width', '960px')
  })

  test('base font size is 18px', async ({ page }) => {
    await page.goto('/')
    const html = page.locator('html')
    await expect(html).toHaveCSS('font-size', '18px')
  })

  test('recipe links from listing go to correct pages', async ({ page }) => {
    await page.goto('/recipes/')
    await page.locator('a:has-text("Corn Biscotti")').click()
    await expect(page).toHaveURL(/\/recipes\/corn-biscotti\//)
    await expect(page.locator('h1')).toHaveText('Corn Biscotti')
  })
})
