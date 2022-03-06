import * as React from "react";
import { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Divider, Drawer, List, ListItemButton } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { makeStyles } from "@mui/styles";
import PlaceDropdown from "../presentations/NavbarBeforeLogin/PlaceDropdown"; //y
import ActivityDropdown from "../presentations/NavbarBeforeLogin/ActivityDropdown"; //y
import { fireAuth } from "../../services/firebase";

const useStyle = makeStyles({
  Appbar: {
    backgroundColor: "white",
    padding: "0px",
    height: "55px",
  },
  navButton: {
    display: "flex",
    width: "100px",
    height: "8vh",
    padding: "35px",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
    "&:hover": {
      background: "rgb(0, 212, 212)",
    },
  },
  special: {
    display: "flex",
    width: "100px",
    height: "8vh",
    padding: "35px",
    alignItems: "center",
    justifyContent: "center",
    color: "black",
    "&:hover": {
      textDecoration: "underline ",
      textDecorationThickness: "3px",
    },
  },

  search: {
    color: "black",
    float: "right",
  },
  drawer: {
    width: "220px",
    "&:hover": {
      color: "rgb(0, 212, 212)",
      textDecoration: "underline",
      textDecorationThickness: "3px",
    },
  },
  drawerItems: {
    "& li": {
      padding: "15px",
      color: "red",
      "&:hover": {
        color: "green",
      },
    },
  },
});
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.1),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "50%",
  [theme.breakpoints.up("sm")]: {
    marginRight: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
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
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const PrimarySearchAppBar = () => {
  const [open, setOpen] = React.useState(false); //My code
  const classes = useStyle();
  const [dropdown, setDropdown] = useState(false);
  const [place, setPlace] = useState(false);
  const itemlist = [
    {
      text: "Favorite",
      path: "/",
    },
    {
      text: "Kind of Places",
      path: "/",
    },
    {
      text: "Activities",
      path: "/",
    },
    {
      text: "Region",
      path: "/",
    },
  ];

  const userlist = [
    {
      text: "Profile",
      path: "/",
    },
    {
      text: "Post Content",
      path: "/",
    },
    {
      text: "Help",
      path: "/",
    },
  ];
  // end of my code

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>
        <Link href="./../../profile_page">Profile</Link>
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleMenuClose}>
        <Link href="/">Post Content</Link>
      </MenuItem>
      <MenuItem onClick={handleMenuClose}>
        <Link href="/">Help</Link>
      </MenuItem>
      <MenuItem onClick={() => fireAuth.signOut()}>
        <Link href="/">Log Out</Link>
      </MenuItem>
      {/* <Button>Log Out</Button> */}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    ></Menu>
  );

  return (
    <div>
      <Drawer anchor="right" open={open} onClose={(open) => setOpen(false)}>
        <List>
          {itemlist.map((item, index) => {
            const { text, path } = item;
            return (
              <List key={index}>
                <ListItemButton className={classes.drawer} key={text}>
                  <Link href={path}>{text}</Link>
                </ListItemButton>
              </List>
            );
          })}
        </List>
        <Divider></Divider>
        <List>
          {userlist.map((item, index) => {
            const { text, path } = item;
            return (
              <List key={index}>
                <ListItemButton className={classes.drawer} key={text}>
                  <Link href={path}>{text}</Link>
                </ListItemButton>
              </List>
            );
          })}
          <ListItemButton
            className={classes.drawer}
            onClick={() => fireAuth.signOut()}
          >
            Log Out
          </ListItemButton>
        </List>
      </Drawer>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" className={classes.Appbar}>
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "block", sm: "block" } }}
            >
              <Link href="./../../homepageAfterLogin">
                <img
                  src="/LogoProject.svg"
                  alt="LOGO"
                  width="90%"
                  height="90%"
                ></img>
              </Link>
            </Typography>
            <Search className={classes.search}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
              />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <li
                className={classes.navButton}
                size="small"
                onMouseEnter={() => setPlace(true)}
                onMouseLeave={() => setPlace(false)}
              >
                <Link href="">
                  <span className={classes.item}>Places</span>
                </Link>
                {place && <PlaceDropdown />}
              </li>
              <li
                className={classes.navButton}
                size="small"
                color="inherit"
                onMouseEnter={() => setDropdown(true)}
                onMouseLeave={() => setDropdown(false)}
              >
                <Link href="">Activities</Link>
                {dropdown && <ActivityDropdown />}
              </li>

              <li className={classes.special} size="small" color="inherit">
                <Link href="">Favorite</Link>
              </li>
              <Box sx={{ display: { xs: "flex" } }}>
                <li className={classes.special} size="small" color="inherit">
                  <Link href="">Region</Link>
                </li>
              </Box>
              <IconButton
                sx={{ color: "black" }}
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                sx={{ color: "rgb(0, 212, 212)" }}
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                //   onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MenuIcon onClick={() => setOpen(true)} />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        {renderMobileMenu}
        {renderMenu}
      </Box>
    </div>
  );
};
export default PrimarySearchAppBar;
