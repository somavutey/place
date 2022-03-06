import React, { useState } from "react";
import Link from "next/link";
import ButtonNavbar from "../presentations/NavbarBeforeLogin/button";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  navbar: {
    height: "10vh",
    background: "whitesmoke",
    borderBottom: "1px solid rgb(235, 234, 233)",
    display: "flex",
    flexDirection: "row", //add
    justifyContent: "center",
    alignItems: "center",
  },

  navbarLogo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "10%",
    height: "10vh",
  },

  navItems: {
    display: "flex",
    listStyle: "none",
    flexDirection: "row",
    width: "70vw",
    justifyContent: "flex-end",
    padding: "5",
  },

  navButton: {
    display: "flex",
    width: "130px",
    height: "8vh",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    margin: "10%",
    "&:hover": {
      color: "rgb(0, 212, 212)",
      textDecoration: "underline",
      textDecorationThickness: "3px",
    },
  },
  a: {
    textDecoration: "underlined",
    textDecorationColor: "rgb(0, 212, 212)",
    textDecorationThickness: 4,
  },
});
export default function NavbarHome() {
  const [place, setPlace] = useState(false);
  const classes = useStyle();
  return (
    <>
      <nav className={classes.navbar}>
        <Link href="/" className={classes.navbarLogo}>
          <img src="/LogoProject.svg" alt="logo" width="110" height="110"></img>
        </Link>

        <ul className={classes.navItems}>
          <li className={classes.navButton}></li>
          return (
          <li
            className={classes.navButton}
            onMouseEnter={() => setPlace(true)}
            onMouseLeave={() => setPlace(false)}
          >
            <Link href="/ArticleContent">Explore Article and Videos</Link>
          </li>
          );
        </ul>
        <ButtonNavbar />
      </nav>
    </>
  );
}
