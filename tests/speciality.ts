import { test, expect } from "@playwright/test";
test("home page snapshot test", async ({ page }) => {
  await page.goto("http://localhost:3000/speciality/Dermatology");
  await page.waitForLoadState("networkidle");
  await expect(page).toHaveScreenshot();
});
