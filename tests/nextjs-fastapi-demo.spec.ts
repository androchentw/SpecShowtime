import { test, expect } from '@playwright/test';
test('nextjs-fastapi-demo', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  
  await expect(page.getByRole('img', { name: 'Next.js Logo' })).toBeVisible();
  await expect(page.getByRole('main')).toContainText('api/index.py');
  await expect(page.getByRole('main')).toContainText('app/api/helloNextJs');
  
  await page.getByRole('link', { name: 'api/index.py' }).click();
  await page.getByText('{"message":"Hello from').click();
  await expect(page.locator('pre')).toContainText('{"message":"Hello from FastAPI"}');
  
  await page.goto('http://localhost:3000/');
  
  await page.getByRole('link', { name: 'app/api/helloNextJs' }).click();
  await page.getByText('{"message":"Hello from Next.').click();
  await expect(page.locator('pre')).toContainText('{"message":"Hello from Next.js 14"}');
});
