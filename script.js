const form = document.querySelector("#login-form");
const submitButton = document.querySelector("#submit-button");
const statusMessage = document.querySelector("#login-status");

if (
  !(form instanceof HTMLFormElement) ||
  !(submitButton instanceof HTMLButtonElement) ||
  !(statusMessage instanceof HTMLElement)
) {
  throw new Error("The login form could not be initialized.");
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  statusMessage.hidden = false;
});

submitButton.disabled = false;
