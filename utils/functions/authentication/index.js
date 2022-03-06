import Router from "next/router";
import { fireAuth } from "../../../services/firebase";
{
  /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                                         Create User
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
}
function CreateUserWithEmailAndPassword(
  email,
  password,
  lastName,
  firstName,
  pathName
) {
  fireAuth
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      const user = fireAuth.currentUser;
      user
        .updateProfile({
          displayName: firstName + " " + lastName,
        })
        .then(() => {
          console.log("Success");
          Router.push(pathName);
        })
        .catch((err) => {
          console.error(err.message);
        });
    })
    .catch((err) => {
      console.log(err);
    });
}

{
  /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                                         Signin with Email and Password
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
}

function SignInWithEmailPassword(email, password, filePath) {
  fireAuth
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      console.log("Login");
      console.log(fireAuth.currentUser);
      Router.push(filePath);
    })
    .catch((err) => {
      console.log(err);
    });
}
{
  /* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                                           Forgot Password
  - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/
}
function ForgotPassword(email) {
  fireAuth
    .sendPasswordResetEmail(email)
    .then((res) => {
      console.log("Please check your email");
    })
    .catch((err) => {
      console.error(err);
    });
}

export {
  CreateUserWithEmailAndPassword,
  SignInWithEmailPassword,
  ForgotPassword,
};
