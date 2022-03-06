

import React from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { makeStyles } from "@mui/styles";
import { Drawer } from "@mui/material";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Link from "next/link";

import {
  names,
  activity,
  place,
  type,
  price,
} from "../../web-admin/_mock_/searchBar";

function getActivity(activity, activityName) {
  return {
    fontWeight: activityName.indexOf(activity) === -1,
  };
}

function getStyles(name, personName) {
  return {
    fontWeight: personName.indexOf(name) === -1,
  };
}

function getPlace(place, placeName) {
  return {
    fontWeight: placeName.indexOf(place) === -1,
  };
}
function getTypeOfPlace(type, typeName) {
  return {
    fontWeight: typeName.indexOf(type) === -1,
  };
}
function getPriceRange(price, priceName) {
  return {
    fontWeight: priceName.indexOf(price) === -1,
  };
}

// -----------------Style--------------------------------
const useStyle = makeStyles((theme) => ({
  search: {
    color: "black",
    float: "right",
    boxShadow: "3px 3px  gray",
    borderRadius: "12px",
  },
  drawer: {
    // height:"400px",
    // backgroundColor: "black",
  },
  drawerPaper: {
    height: "60vh",
    backgroundColor: "rgba(120,120,120,0.8)",
  },
  searchDrawer: {
    width: "40%",
    margin: "auto",
    color: "black",
    marginTop: "10vh",
    boxShadow: "3px 3px  gray",
    borderRadius: "12px",
    padding: "3px",
  },
  formControl: {
    width: "40%",
    marginBottom: "30px",
  },
  two: {
    marginLeft: "30%",
    marginRight: "25%",
  },
  region: {
    margin: "auto",
    width: "40%",
  },
}));

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 1.1),
  marginRight: theme.spacing(2),
  // marginLeft: 60,
  width: "100%",
  [theme.breakpoints.up("xs")]: {
    marginRight: theme.spacing(1),
    width: "200px",
  },
  [theme.breakpoints.up("sm")]: {
    marginRight: theme.spacing(1),
    width: "300px",
  },
  [theme.breakpoints.up("md")]: {
    marginRight: theme.spacing(1),
    width: "500px",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    width: "50ch",
    [theme.breakpoints.up("md")]: {},
  },
}));
//  -------------------End of Style---------------------------

const SearchHompage = () => {
  const [open, setOpen] = React.useState(false);
  const classes = useStyle();
  const [personName, setPersonName] = React.useState([]);
  const [activityName, setActivityName] = React.useState([]);
  const [placeName, setPlaceName] = React.useState([]);
  const [priceName, setpriceName] = React.useState([]);
  const [typeName, settypeName] = React.useState([]);

  const handleChange = (event) => {
    setPersonName(event.target.value);
    // setActivityName(event.target.value);   //test
    // setPlaceName(event.target.value);      //test
  };
  const activityChange = (click) => {
    setActivityName(click.target.value);
  };
  const placeChange = (change) => {
    setPlaceName(change.target.value);
  };
  const typeChange = (change) => {
    settypeName(change.target.value);
  };
  const priceChange = (change) => {
    setpriceName(change.target.value);
  };

  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPersonName(value);
    // setAcitityName(value);
  };

  const activityChangeMultiple = (click) => {
    const { options } = click.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setAcitityName(value);
  };

  const placeChangeMultiple = (change) => {
    const { options } = change.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setPlaceName(value);
  };

  const typeChangeMultiple = (click) => {
    const { options } = click.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    settypeName(value);
  };
  return (
    <div>
      <Drawer
        anchor="top"
        open={open}
        onClose={(open) => setOpen(false)}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Search className={classes.searchDrawer}>
          <SearchIconWrapper>
            <Link href="/">
              <img
                style={{ width: "30px", height: "30px" }}
                src="https://firebasestorage.googleapis.com/v0/b/places-99af3.appspot.com/o/places%2Fsearch.png?alt=media&token=99e26cee-8b3a-4e69-843f-a21eb0383bfe"
              />
            </Link>
          </SearchIconWrapper>
          <StyledInputBase placeholder="Search " />
        </Search>

        <FormControl className={classes.region}>
          <InputLabel style={{ color: "white" }} id="demo-mutiple-name-label">
            Region
          </InputLabel>
          <Select
            labelId="demo-mutiple-name-label"
            id="demo-mutiple-name"
            value={personName}
            onChange={handleChange}
            size="small"
            input={<Input />}
            // MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem
                key={name}
                value={name}
                style={getStyles(name, personName)}
              >
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        {/* newwww */}
        <div className={classes.two}>
          <FormControl className={classes.formControl}>
            <InputLabel style={{ color: "white" }} id="demo-mutiple-name-label">
              Type of place
            </InputLabel>
            <Select
              size="small"
              labelId="demo-mutiple-name-label"
              id="demo-mutiple-name"
              multiple
              value={typeName}
              onChange={typeChange}
              input={<Input />}
              // MenuProps={MenuProps}
            >
              {type.map((type) => (
                <MenuItem
                  key={type}
                  value={type}
                  style={getTypeOfPlace(type, typeName)}
                >
                  {type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl
            className={classes.formControl}
            style={{ marginLeft: "10%" }}
          >
            <InputLabel style={{ color: "white" }} id="demo-mutiple-name-label">
              Kind of place
            </InputLabel>
            <Select
              size="small"
              labelId="demo-mutiple-name-label"
              id="demo-mutiple-name"
              multiple
              value={placeName}
              onChange={placeChange}
              input={<Input />}
              // MenuProps={MenuProps}
            >
              {place.map((place) => (
                <MenuItem
                  key={place}
                  value={place}
                  style={getPlace(place, placeName)}
                >
                  {place}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className={classes.two}>
          <FormControl className={classes.formControl}>
            <InputLabel style={{ color: "white" }} id="demo-mutiple-name-label">
              Activity
            </InputLabel>
            <Select
              size="small"
              labelId="demo-mutiple-name-label"
              id="demo-mutiple-name"
              multiple
              value={activityName}
              onChange={activityChange}
              input={<Input />}
              // MenuProps={MenuProps}
            >
              {activity.map((activity) => (
                <MenuItem
                  key={activity}
                  value={activity}
                  style={getActivity(activity, activityName)}
                >
                  {activity}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl
            className={classes.formControl}
            style={{ marginLeft: "10%" }}
          >
            <InputLabel style={{ color: "white" }} id="demo-mutiple-name-label">
              Price Range
            </InputLabel>
            <Select
              size="small"
              labelId="demo-mutiple-name-label"
              id="demo-mutiple-name"
              multiple
              value={priceName}
              onChange={priceChange}
              input={<Input />}
              // MenuProps={MenuProps}
            >
              {price.map((price) => (
                <MenuItem
                  key={price}
                  value={price}
                  style={getPriceRange(price, priceName)}
                >
                  {price}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      </Drawer>

      {/* search on homepage */}
      <Search className={classes.search} onClick={(open) => setOpen(true)}>
        <SearchIconWrapper>
          <img
            style={{ width: "30px", height: "30px" }}
            src="https://firebasestorage.googleapis.com/v0/b/places-99af3.appspot.com/o/places%2Fsearch.png?alt=media&token=99e26cee-8b3a-4e69-843f-a21eb0383bfe"
          />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search kind of place, place base on activity, place . . ."
          disabled
        />
      </Search>
    </div>
  );
};

export default SearchHompage;
