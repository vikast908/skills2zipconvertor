const { test, expect } = require("@playwright/test");

test("sample skill converts to a downloadable zip", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { name: ".skill to .zip" })).toBeVisible();
  await expect(page.getByText("Files stay on your device. Nothing is uploaded.")).toBeVisible();

  await page.getByRole("button", { name: "Try sample .skill", exact: true }).click();

  await expect(page.getByText("Converted to ZIP").first()).toBeVisible();
  await expect(page.getByText("sample.skill")).toBeVisible();
  await expect(page.getByRole("button", { name: "Download ZIP" })).toBeVisible();
});
