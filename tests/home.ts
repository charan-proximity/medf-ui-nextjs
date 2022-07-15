import { test, expect } from "@playwright/test";

test("home page snapshot test", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await expect(page).toHaveScreenshot();
});
