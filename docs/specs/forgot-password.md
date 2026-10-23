# Forgot password

Status: draft · Owner: project owner

## Goal

Users who cannot remember their password can open a recovery form from the
login page and see that password recovery is not connected.

## Out of scope

- Sending a password-reset email or making a request to a server.
- Checking whether an account exists.
- Resetting or changing a password.
- Storing the submitted email address.

## Behavior

- [ ] When I open the login page, I see an “Am uitat parola” link.
- [ ] When I activate the “Am uitat parola” link, I see a password-recovery
      form on the same page with a labeled “E-mail” field and a submit button.
- [ ] Given the email field is empty or contains an invalid email address,
      when I submit the recovery form, then the browser asks me to correct it.
- [ ] Given I enter a valid email address, when I submit the recovery form,
      then I remain on the page and see “Recuperarea parolei nu este conectată.
      Nu s-a trimis niciun e-mail.”

## Done when

- [ ] Every behavior above has been checked.
