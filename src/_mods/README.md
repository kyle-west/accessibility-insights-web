# Modifications to Accessibility Insights for Web

We've deliberately found places with AIfW that we feel are misleading, or otherwise ineffective. This has put us in a position to fork AIfW to provide needed support to adapt to the growing and messy world we live in.

In the end, real user experience is what matters, not tooling, so our modifications are focused on the user experience and not what the spec says.

---------------------------------------------------------------------

## `autocomplete="chrome-off"`

Obviously, `chrome-off` is not a valid, standard, value for the autocomplete attribute. However, Chrome is unreasonably aggressive at autocomplete on fields.

This is often unhelpful for users of our applications. So we have follow the community practice of using `chrome-off`, which being invalid, disables autocomplete functionality.

We have implemented an `axe-rules.ts` file, which allows us to ignore the axe error, which would actually make the experience worse for the user.
