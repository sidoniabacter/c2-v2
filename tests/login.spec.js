const path = require("node:path");
const { pathToFileURL } = require("node:url");
const { expect, test } = require("@playwright/test");

const loginPage = pathToFileURL(path.join(__dirname, "..", "index.html")).href;

test.beforeEach(async ({ page }) => {
  await page.goto(loginPage);
});

test("shows labeled email and password fields and a submit button", async ({ page }) => {
  await expect(page.getByRole("textbox", { name: "E-mail" })).toBeVisible();
  await expect(page.getByLabel("Parolă")).toBeVisible();
  await expect(page.getByRole("button", { name: "Conectează-te" })).toBeVisible();
});

test("rejects empty required fields and invalid email addresses", async ({ page }) => {
  const form = page.locator("#login-form");
  const email = page.getByRole("textbox", { name: "E-mail" });
  const password = page.getByLabel("Parolă");
  const submitButton = page.getByRole("button", { name: "Conectează-te" });

  await submitButton.click();
  await expect.poll(() => email.evaluate((element) => element.validationMessage)).not.toBe("");

  await email.fill("not-an-email");
  await password.fill("example-password");
  await submitButton.click();
  await expect.poll(() => email.evaluate((element) => element.validationMessage)).not.toBe("");

  await email.fill("person@example.com");
  await password.fill("");
  await submitButton.click();
  await expect.poll(() => password.evaluate((element) => element.validationMessage)).not.toBe("");

  await email.fill("");
  await password.fill("example-password");
  await submitButton.click();
  await expect.poll(() => email.evaluate((element) => element.validationMessage)).not.toBe("");
  await expect(form).toBeVisible();
  await expect(page.locator("#login-status")).toBeHidden();
});

test("does not authenticate or send credentials on submission", async ({ page }) => {
  const requests = [];
  page.on("request", (request) => requests.push(request.url()));
  const pageUrl = page.url();

  await page.getByRole("textbox", { name: "E-mail" }).fill("person@example.com");
  await page.getByLabel("Parolă").fill("example-password");
  await page.getByRole("button", { name: "Conectează-te" }).click();

  await expect(page.getByRole("status")).toHaveText(
    "Autentificarea nu este conectată încă. Datele nu au fost trimise."
  );
  expect(page.url()).toBe(pageUrl);
  expect(requests).toEqual([]);
});

test("does not offer password recovery", async ({ page }) => {
  await expect(page.getByRole("link")).toHaveCount(0);
  await expect(page.getByText(/am uitat parola|recuperare parolă/i)).toHaveCount(0);
});
