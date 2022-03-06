import React from "react";
import {
  Button,
  CssBaseline,
  FormControlLabel,
  Checkbox,
  Grid,
  Link,
  Box,
  Typography,
  Container,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { CreateUserWithEmailAndPassword } from "../utils/functions/authentication/index";
import { signupForm } from "../web-admin/_mock_/form";
import TextFields from "../components/presentations/TextField/TextField";
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
    width: "100%",
  },
  submit: {
    marginTop: "24px",
  },
});

export default function SignUp() {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const handleSignUp = (e) => {
    e.preventDefault();

    const { email, password, firstName, lastName } = e.target.elements;
    CreateUserWithEmailAndPassword(
      email.value,
      password.value,
      firstName.value,
      lastName.value,
      "/homepage_after_login"
    );
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
            style={{ margin: "0 auto" }}
          />
        </div>
        <Typography
          component="h1"
          variant="h5"
          style={{ textAlign: "center", marginBottom: "24px" }}
        >
          Sign Up
        </Typography>
        <form onSubmit={handleSignUp} className={classes.form} noValidate>
          <Grid container justifyContent="center" spacing={2}>
            {signupForm.map((item, index) => {
              if (index == 0 || index == 1) {
                return (
                  <Grid item xs={12} sm={6} key={index}>
                    <TextFields
                      autoComplete={item.autoComplete}
                      name={item.name}
                      id={item.id}
                      label={item.label}
                    />
                  </Grid>
                );
              } else
                return (
                  <Grid item xs={12} key={index}>
                    <TextFields
                      autoComplete={item.autoComplete}
                      name={item.name}
                      id={item.id}
                      label={item.label}
                    />
                  </Grid>
                );
            })}
            <Grid item xs={12}>
              <Typography
                color="error"
                component="h6"
                style={{ textAlign: "center", marginTop: "-5px" }}
              >
                {error}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive special day and updates via email from Place."
              />
            </Grid>
          </Grid>
          <Button
            disabled={loading}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="/login" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
