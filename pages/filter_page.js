import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Autocomplete from "@mui/material/Autocomplete";
import { Button } from "@mui/material";
import ContentList from "./Details/index";
import { fireStore } from "./../services/firebase";
import TextField from "@mui/material/TextField";
const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function FormRow() {
  const [horizontalCards, setHorizontalCards] = React.useState([]);
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
  function filters(title, phoneNumber, data) {
    let res;
    if (title) {
      res = horizontalCards.filter((item) => (item.horizontalCards = title));
      return console.log(res);
    }
  }
  return (
    <div>
      <Grid
        sx={{ flexGrow: 1 }}
        marginLeft="100px"
        marginTop="60px"
        container
        spacing={2}
      >
        <Grid item xs={12} lg={4} md={4} sm={6}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={horizontalCards}
            sx={{ width: 300 }}
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
            getOptionLabel={(option) => option.title}
            renderOption={(props, option) => (
              <Box
                component="li"
                sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                {...props}
              >
                <Button>{option.title}</Button>
              </Box>
            )}
          />
        </Grid>

        <Grid item xs={12} lg={4} md={4} sm={6}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={horizontalCards}
            //onChange={}
            sx={{ width: 300 }}
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
            getOptionLabel={(option) => option.title}
            renderOption={(props, option) => (
              <Box
                component="li"
                sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                {...props}
              >
                {option.title}
              </Box>
            )}
          />
        </Grid>
        <Grid item xs={12} lg={4} md={4} sm={6}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={horizontalCards}
            sx={{ width: 300 }}
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
            getOptionLabel={(option) => option.phoneNumbers}
            renderOption={(props, option) => (
              <Box
                component="li"
                sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                {...props}
              >
                {option.phoneNumber}
              </Box>
            )}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default function NestedGrid() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <Grid container item spacing={3}>
            <FormRow />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
