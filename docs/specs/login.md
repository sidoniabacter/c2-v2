# Login

Status: draft · Owner: project owner

## Goal

Users can enter an email address and password in a login form. The page is a
static interface and does not authenticate accounts.

## Out of scope

- Authenticating credentials or determining whether an account exists.
- Sending or storing credentials.
- Redirecting to a home page after login.
- Password recovery, including an “Forgot password” link or flow.

## Behavior

- [ ] When I open the login page, I see labeled fields for my email address and
      password and a way to submit them.
- [ ] Given I leave either field empty or enter an invalid email format, when I
      submit the form, then the browser asks me to correct the input.
- [ ] Given I enter a non-empty email address in a valid format and a password,
      when I submit the form, then I remain on the page and see that
      authentication is not connected and my credentials were not sent.
- [ ] I do not see an “Forgot password” link or password-recovery flow on the
      login page.

## Done when

- [ ] Every behavior above has been checked.
