import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import BaseMap from "./BaseMap";
import TextFieldInPostPage from "../components/presentations/TextField/TextField";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import { fireStore } from "../services/firebase";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import UploadFilePage from "../components/photos";
import { TextFieldProps } from "../web-admin/_mock_/TextField";
import CloseIcon from "@mui/icons-material/Close";
import { useRecoilValue } from "recoil";

import {
  kindofplaces,
  places,
  activities,
  prices,
  typeofplaces,
} from "./../web-admin/_mock_/category";
import {
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { onlineFiles } from "../states/imageFilesState";
import { latState, lngState } from "../states/latlongState";
import { createDocument } from "../utils/functions/firebase/index";
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
});

export default function LogIn() {
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  //                                                Variables
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  const classes = useStyles();
  const [value, setValue] = React.useState(null);
  const [horizontalCards, setHorizontalCards] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  //latitute and longtitute
  const latitute = useRecoilValue(latState);
  const longtitute = useRecoilValue(lngState);
  // category
  const [kindofplace, setKindofplace] = React.useState(null);
  const [typeofplace, setTypeofplace] = React.useState(null);
  const [activity, setActivity] = React.useState(null);
  const [region, setRegion] = React.useState(null);
  const [price, setPrice] = React.useState(null);

  const onlinefiles = useRecoilValue(onlineFiles);
  const handleCreateForm = (e) => {
    e.preventDefault();
    const { title, phoneNumber, fb_page, address, desc } = e.target.elements;
    createDocument("contents", {
      activity: activity,
      region: region,
      price: price,
      typeofplace: typeofplace,
      kindofplace: kindofplace,
      title: title.value,
      desc: desc.value,
      phoneNumber: phoneNumber.value,
      fb_page: fb_page.value,
      address: address.value,
      latitute: latitute,
      longtitute: longtitute,
      url: onlinefiles,
      color: "primary",
    });
  };

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  //                                      Dialog Open and Dialog Close
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  //

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  //                                      Retrieve data
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  React.useEffect(() => {
    fireStore.collection("contents").onSnapshot((snapshot) => {
      const horizontalCard = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      console.log(horizontalCard);

      setHorizontalCards(horizontalCard);
    });
  }, []);
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  //
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  return (
    <Container component="main" maxWidth="xs">
      {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                                                          Header 
                - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
             */}
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
          style={{
            textAlign: "center",
            marginBottom: "24px",
            textShadow: "2px 2px 4px #000000",
          }}
        >
          Post Page
        </Typography>
        {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                                                         Search Bar
                    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                 */}
        <br></br>
        <Typography>
          {" "}
          <b> Select the categories of your place:</b>{" "}
        </Typography>
        <br></br>
        <form className={classes.form} onSubmit={handleCreateForm} noValidate>
          <Grid container spacing={2} xs={12}>
            <Grid item xs={12}>
              <Autocomplete
                onChange={(event, value) => setRegion(value.region)}
                disablePortal
                id="combo-box-demo"
                options={places}
                lg={{ width: 600 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Region"
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: "new-password",
                    }}
                  />
                )}
                getOptionLabel={(option) => option.region}
                renderOption={(props, option) => (
                  <Box
                    component="li"
                    sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                    {...props}
                  >
                    <Button>{option.region}</Button>
                  </Box>
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Autocomplete
                onChange={(event, value) => setKindofplace(value.kindofplace)}
                disablePortal
                id="combo-box-demo"
                options={kindofplaces}
                lg={{ width: 600 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Kind of place"
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: "new-password",
                    }}
                  />
                )}
                getOptionLabel={(option) => option.kindofplace}
                renderOption={(props, option) => (
                  <Box
                    component="li"
                    sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                    {...props}
                  >
                    <Button>{option.kindofplace}</Button>
                  </Box>
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Autocomplete
                onChange={(event, value) => setActivity(value.activity)}
                disablePortal
                id="combo-box-demo"
                options={activities}
                lg={{ width: 600 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Activity"
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: "new-password",
                    }}
                  />
                )}
                getOptionLabel={(option) => option.activity}
                renderOption={(props, option) => (
                  <Box
                    component="li"
                    sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                    {...props}
                  >
                    <Button>{option.activity}</Button>
                  </Box>
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Autocomplete
                onChange={(event, value) => setTypeofplace(value.typeofplace)}
                disablePortal
                id="combo-box-demo"
                options={typeofplaces}
                lg={{ width: 600 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Type of place"
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: "new-password",
                    }}
                  />
                )}
                getOptionLabel={(option) => option.typeofplace}
                renderOption={(props, option) => (
                  <Box
                    component="li"
                    sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                    {...props}
                  >
                    <Button>{option.typeofplace}</Button>
                  </Box>
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Autocomplete
                onChange={(event, value) => setPrice(value.price)}
                disablePortal
                id="combo-box-demo"
                options={prices}
                //sx={{ width: 350 }}
                lg={{ width: 600 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Price"
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: "new-password", // disable autocomplete and autofill
                    }}
                  />
                )}
                getOptionLabel={(option) => option.price}
              />
            </Grid>

            {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                                                         Write Content of the Place
                            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                         */}
            <Grid item xs={12}>
              <Typography textAlign={"center"}>
                {" "}
                <b> Write your content </b>{" "}
              </Typography>
            </Grid>
            {TextFieldProps.map((item, index) => {
              return (
                <TextFieldInPostPage
                  key={index}
                  id={item.id}
                  label={item.label}
                  name={item.name}
                  autoComplete={item.autoComplete}
                  required
                ></TextFieldInPostPage>
              );
            })}

            <Grid ml={16} item xs={12}>
              <Button onClick={handleClickOpen}>Map &amp; Images</Button>
            </Grid>
            {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                                                             Preview and Post 
                            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                         */}
            <Grid container spacing={5} columns={12} ml={3} mt={1}>
              <Grid item xs={6}>
                <Button variant="contained">Preview</Button>
              </Grid>
              <Grid item xs={6}>
                <Button type="submit" variant="contained">
                  Post
                </Button>
              </Grid>
            </Grid>
            {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                                                         Location and Images Dialog
                            - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                         */}
            <Dialog fullScreen open={open} onClose={handleClose}>
              <AppBar sx={{ position: "relative" }}>
                <Toolbar>
                  <IconButton
                    edge="start"
                    color="inherit"
                    onClick={handleClose}
                    aria-label="close"
                  >
                    <CloseIcon />
                  </IconButton>
                  <Typography
                    sx={{ ml: 2, flex: 1 }}
                    variant="h6"
                    component="div"
                  >
                    Location of your place
                  </Typography>
                  <Button autoFocus color="inherit" onClick={handleClose}>
                    Done
                  </Button>
                </Toolbar>
              </AppBar>

              <Grid item xs={12} marginBottom={5} marginTop={5}>
                <BaseMap
                  defaultCenter={[104.91666266871523, 11.541525694098969]}
                  zoom={12}
                  MapStyles={{ width: "100%", height: "80vh" }}
                ></BaseMap>
              </Grid>
              <AppBar color="primary" sx={{ position: "relative" }}>
                <Toolbar>
                  <Typography
                    marginLeft="20px"
                    sx={{ ml: 2, flex: 1 }}
                    variant="h6"
                    component="div"
                  >
                    Add your images
                  </Typography>
                </Toolbar>
              </AppBar>
              <Grid item xs={12}>
                <UploadFilePage></UploadFilePage>
              </Grid>
            </Dialog>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
