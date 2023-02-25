import { Given, When, Then } from "@wdio/cucumber-framework";

Given(/^I am on the login page$/, async () => {
  await browser.url("/");
  await browser.pause(20);
});

When("I am input email: {string}", async (email) => {});

When("I am input password: {string}", async (password) => {});

Then(/^I click button login$/, async () => {
  await $(".css-1n8i4of").click();
});
