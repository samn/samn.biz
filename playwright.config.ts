import { defineConfig, devices } from '@playwright/test'

export default defineConfig({
  testDir: './tests',
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        launchOptions: {
          args: ['--no-sandbox'],
        },
      },
    },
  ],
  use: {
    baseURL: 'http://localhost:3737',
  },
  webServer: {
    command:
      'npx @11ty/eleventy --config=eleventy.config.ts && npx serve _site -l 3737 --no-clipboard',
    port: 3737,
    reuseExistingServer: !process.env.CI,
  },
})
