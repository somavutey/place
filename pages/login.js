import React from "react";

import {
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  ButtonBase,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { fireAuth } from "../services/firebase";
import { useRouter } from "next/router";
import { display } from "@mui/system";
import firebase from "firebase";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Team Jakrava
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles({
  paper: {
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
  },
  submit: {
    marginTop: 24,
  },
});

export default function LogIn() {
  const router = useRouter();
  const classes = useStyles();
  const [error, setError] = React.useState("");
  const [isForgotPassword, setIsForgotPassword] = React.useState(false);
  const handleUserLogin = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    fireAuth
      .signInWithEmailAndPassword(email.value, password.value)
      .then((res) => {
        console.log("Login Success");
        console.log(fireAuth.currentUser);
        router.push("/logedin_homepage");
        alert("SUCc");
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
  };
  const handleForgotPassword = (e) => {
    e.preventDefault();

    const { email } = e.target.elements;
    console.log(email.value);
    fireAuth
      .sendPasswordResetEmail(email.value)
      .then((res) => {
        console.log("Please check your email");
        setIsForgotPassword(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
  };
  //sign up with google
  const handleSignUpWithGoogle = () => {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(user);
        // ...
        router.push("/");
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
      });
  };

  const handleSignUpWithFacebook = () => {
    var provider = new firebase.auth.FacebookAuthProvider();

    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        /** @type {firebase.auth.OAuthCredential} */
        var credential = result.credential;

        // The signed-in user info.
        var user = result.user;

        // This gives you a Facebook Access Token. You can use it to access the Facebook API.
        var accessToken = credential.accessToken;

        // ...
        router.push("/");
      })
      .catch((error) => {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;

        // ...
      });
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <div style={{ textAlign: "center" }}>
          <img
            alt="LogoProject"
            src="/LogoProject.svg"
            width={170}
            height={170}
          />
        </div>

        <Typography
          component="h1"
          variant="h5"
          style={{ textAlign: "center", marginBottom: "24px" }}
        >
          Log In
        </Typography>
        {!isForgotPassword ? (
          <form onSubmit={handleUserLogin} className={classes.form} noValidate>
            <Grid container justifyContent="center" spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
              </Grid>
              <Grid item xs={12}>
                <ButtonBase>
                  <Link
                    onClick={() => {
                      setIsForgotPassword(true);
                      setError("");
                    }}
                  >
                    <a>Forgot Password?</a>
                  </Link>
                </ButtonBase>
              </Grid>
            </Grid>
            <Typography color="error" component="h6">
              {error}
            </Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Log in
            </Button>

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/signup" variant="body2">
                  Doesn&apos;t Have Account? Sign up
                </Link>
              </Grid>
            </Grid>
          </form>
        ) : (
          <form
            onSubmit={handleForgotPassword}
            className={classes.form}
            noValidate
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Send email to reset password"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
            </Grid>
            <Typography color="error" component="h6">
              {error}
            </Typography>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {/* <Link
              href="./../../homepageAfterLogin"
              color="inherit"
              underline="hover"
            > */}
              Send
              {/* </Link> */}
            </Button>
            <ButtonBase>
              <Link
                onClick={() => {
                  setIsForgotPassword(false);
                  setError("");
                }}
              >
                <a>Login</a>
              </Link>
            </ButtonBase>
          </form>
        )}
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
