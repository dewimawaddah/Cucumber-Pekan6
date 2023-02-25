import { Given, When, Then } from "@wdio/cucumber-framework";

Given(/^I am on the login page$/, async () => {
  await browser.url("/");
  await browser.pause(10);
});

When("I am input email {string}", async (email) => {
  await $("#email").setValue(email);
});

When("I am input password {string}", async (password) => {
  await $("#password").setValue(password);
});

Then(/^I am click button login$/, async () => {
  await $(".chakra-button").click();
});
