const contactUs = [
  {
    id: "email",
    label: "Email",
    name: "email",
    type: "email",
    autoComplete: "email",
  },
  {
    id: "phoneNumber",
    label: "Phone Number",
    name: "phoneNumber",
    type: "number",
    autoComplete: "number",
  },
  {
    id: "telegram",
    label: "Telegram",
    name: "telegram",
    type: "number",
    autoComplete: "number",
  },
];

const signupForm = [
  {
    id: "firstName",
    label: "First Name",
    name: "firstName",
    autoComplete: "fname",
  },
  {
    id: "lastName",
    label: "Last Name",
    name: "lastName",
    autoComplete: "lname",
  },
  {
    id: "email",
    label: "Email Address",
    name: "email",
    autoComplete: "email",
  },
  {
    id: "password",
    label: "Password",
    name: "password",
    autoComplete: "current-password ",
  },
];
const loginForm = [
  {
    id: "email",
    label: "Email Address",
    name: "email",
    autoComplete: "email",
    type: "email",
  },
  {
    id: "password",
    label: "Password",
    name: "password",
    autoComplete: "current-password",
    type: "password",
  },
  {
    id: "email",
    label: "Send email to reset password",
    name: "email",
    autoComplete: "email",
    type: "email",
  },
];
export { contactUs, signupForm, loginForm };
