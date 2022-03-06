import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import CakeIcon from "@mui/icons-material/Cake";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import CreateIcon from "@mui/icons-material/Create";
import Footer from "../components/containers/Footer";

const Img = styled("img")({
  margin: 0,
  padding: 0,
  height: 200,
  width: 200,
  borderRadius: 100,
});
const ProfilePage = () => {
  return (
    <div>
      <Typography marginLeft="220px" marginTop="50px">
        <b>Profile</b>
      </Typography>
      <Paper
        variant="outlined"
        sx={{
          p: 2,
          margin: "auto",
          maxWidth: 1000,
          flexGrow: 1,
          borderColor: "black",
          marginTop: 5,
        }}
        p={2}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item>
              <Grid item sx={{ width: 400, height: 200 }}>
                <Img alt="complex" src="working.jpeg" />
              </Grid>
            </Grid>
            <Grid item xs container direction="column" spacing={1}>
              <Grid item xs>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  paddingTop="20px"
                >
                  <Grid item marginLeft="10px">
                    <b>Jayavarman VII</b>
                  </Grid>
                  <Grid item paddingLeft="350px">
                    <CreateIcon></CreateIcon>
                  </Grid>
                </Grid>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  paddingTop="20px"
                >
                  <Grid item>
                    <CakeIcon></CakeIcon>
                  </Grid>
                  <Grid item marginLeft="10px">
                    07-01-2004
                  </Grid>
                </Grid>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  paddingTop="20px"
                >
                  <Grid item>
                    <EmailIcon></EmailIcon>
                  </Grid>
                  <Grid item marginLeft="10px">
                    aaa123@gmail.com
                  </Grid>
                </Grid>
                <Grid
                  container
                  direction="row"
                  alignItems="center"
                  paddingTop="20px"
                >
                  <Grid item>
                    <CallIcon></CallIcon>
                  </Grid>
                  <Grid item marginLeft="10px">
                    016-807-208
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      <Typography marginLeft="220px" marginTop="50px">
        <b>Favorite</b>
      </Typography>
      {/* <HorizontalCards></HorizontalCards>*/}
      <Footer></Footer>
    </div>
  );
};

export default ProfilePage;
