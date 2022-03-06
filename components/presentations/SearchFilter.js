import React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import { Paper } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';

import { fireStore } from "../../services/firebase";

import IconButton from "@mui/material/IconButton";
import { useRecoilValue } from "recoil";

import {
  kindofplaces,
  places,
  activities,
  prices,
  typeofplaces,
} from "../../web-admin/_mock_/category";
import {
  Button,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { onlineFiles } from "../../states/imageFilesState";
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

  // category
  const [kindofplace, setKindofplace] = React.useState("");
  const [typeofplace, setTypeofplace] = React.useState("");
  const [activity, setActivity] = React.useState("");
  const [region, setRegion] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [isFilter, setIsFilter] = React.useState(false);
  const [allProducts, setProducts] = React.useState([]);
  const [horizontalCards, setHorizontalCards] = React.useState([]);

  //files
  const onlinefiles = useRecoilValue(onlineFiles);
  const handleCreateForm = (e) => {
    e.preventDefault();
    let productFiters;
    const { title, phoneNumber, fb_page, address, desc } = e.target.elements;
    //console.log(title.value, phoneNumber.value, fb_page.value, address.value)
    //console.log(activity, region, price, typeofplace, kindofplace)
    fireStore
      .collection("places")
      .add({
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
      })
      .then((res) => {
        console.log("Success");
        e.target.reset();
      })
      .catch((err) => {
        console.error(err.message);
      });
    //filter condition
    if (Boolean(horizontalCards.region)) {
      productFiters = horizontalCards.filter((item) => {
        item.region.includes(horizontalCards.region);
      });
    }

    setIsFilter(true);
    setProducts(productFiters);
  };

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  //                                      Dialog Open and Dialog Close
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  //                                      Retrieve data
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  React.useEffect(() => {
    fireStore.collection("places").onSnapshot((snapshot) => {
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

  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
  //                                     Filter product
  // - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

  return (
    <Container component="main" maxWidth="lg">
      <div className={classes.paper}>
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
          <Grid container marginLeft={0} spacing={2} xs={12}>
            <Grid item xs={12}>
              <Autocomplete
                onChange={(event, value) => setRegion(value.region)}
                disablePortal
                id="combo-box-demo"
                options={places}
                //sx={{ width: 350 }}
                lg={{ width: 600 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Region"
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: "new-password", // disable autocomplete and autofill
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
            <Grid item xs={6}>
              <Autocomplete
                onChange={(event, value) => setKindofplace(value.kindofplace)}
                disablePortal
                id="combo-box-demo"
                options={kindofplaces}
                //sx={{ width: 350 }}
                lg={{ width: 600 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Kind of place"
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: "new-password", // disable autocomplete and autofill
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
            <Grid item xs={6}>
              <Autocomplete
                onChange={(event, value) => setActivity(value.activity)}
                disablePortal
                id="combo-box-demo"
                options={activities}
                //sx={{ width: 350 }}
                lg={{ width: 600 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Activity"
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: "new-password", // disable autocomplete and autofill
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
            <Grid item xs={6}>
              <Autocomplete
                onChange={(event, value) => setTypeofplace(value.typeofplace)}
                disablePortal
                id="combo-box-demo"
                options={typeofplaces}
                //sx={{ width: 350 }}
                lg={{ width: 600 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Type of place"
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: "new-password", // disable autocomplete and autofill
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
            <Grid item xs={6}>
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
                renderOption={(props, option) => (
                  <Box
                    component="li"
                    sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                    {...props}
                  >
                    <Button onClick={setPrice(price)}>{option.price}</Button>
                  </Box>
                )}
              />
            </Grid>
          </Grid>
          {allProducts.map((item, index) => {
            return (
              <>
                <Paper
                  paddingLeft={10}
                  variant="outlined"
                  sx={{
                    p: 2,
                    margin: "auto",
                    maxWidth: 1123,
                    flexGrow: 1,
                    borderColor: "black",
                    marginTop: 5,
                  }}
                  p={2}
                >
                  <Grid container>
                    <Grid item xs={12} sm container justifyContent="center">
                      <Grid item>
                        <img
                          sx={{ width: 350, height: 300, marginRight: 4 }}
                          alt="complex"
                          src={item.url[0]}
                        />
                      </Grid>

                      <Grid item md xs container direction="column" spacing={2}>
                        <Grid item>
                          <Typography
                            gutterBottom
                            variant="subtitle1"
                            component="div"
                          >
                            {item.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            gutterBottom
                            paddingTop="50px"
                          >
                            {item.desc}
                          </Typography>
                        </Grid>
                        <Grid item spacing={4}>
                          <Button
                            sx={{
                              cursor: "pointer",
                            }}
                            variant="contained"
                            color="primary"
                            onClick={() => viewMore(item)}
                          >
                            See More
                          </Button>
                          <IconButton>
                            {item.color == "primary" ? (
                              <FavoriteIcon
                                color={item.color}
                                onClick={() =>
                                  updateHeart(item.id, { color: "secondary" })
                                }
                              />
                            ) : (
                              <FavoriteIcon
                                color={item.color}
                                onClick={() =>
                                  updateHeart(item.id, { color: "primary" })
                                }
                              />
                            )}
                          </IconButton>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </Paper>
              </>
            );
          })}
        </form>
      </div>
    </Container>
  );
}
