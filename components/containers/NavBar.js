
import React, { useState } from "react";
import Link from "next/link";
import { navItems } from "../presentations/NavbarBeforeLogin/DropdownItem";
import ActivityDropdown from "../presentations/NavbarBeforeLogin/ActivityDropdown"; //y
import PlaceDropdown from "../presentations/NavbarBeforeLogin/PlaceDropdown"; //y
import ButtonNavbar from "../presentations/NavbarBeforeLogin/button";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  navbar: {
    height: "10vh",
    background: "whitesmoke",
    borderBottom: "1px solid rgb(235, 234, 233)",
    display: "flex",
    flexDirection: "row",
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
    width: "100px",
    height: "8vh",
    alignItems: "center",
    justifyContent: "center",
    margin: "10%",
    "&:hover": {
      background: "rgb(0, 212, 212)",
    },
  },
  a: {
    textDecoration: 'underlined',
    textDecorationColor: 'rgb(0, 212, 212)',
    textDecorationThickness: 4,
  },
  article: {
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
    }
  },
});
export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [place, setPlace] = useState(false);
  const classes = useStyle();
  return (
    <>
      <nav className={classes.navbar}>
        <Link href="/" className={classes.navbarLogo}>
          <img src="/LogoProject.svg" alt="LOGO" width="110" height="110"></img>
        </Link>

        <ul className={classes.navItems}>
          {navItems.map((item) => {
            if (item.title === "Activity") {
              return (
                <li
                  className={classes.navButton}
                  key={item.id}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link className={classes.a} href={item.path}>
                    {item.title}
                  </Link>
                  {dropdown && <ActivityDropdown />}
                </li>
              );
            }
            return (
              <li
                className={classes.navButton}
                key={item.id}
                onMouseEnter={() => setPlace(true)}
                onMouseLeave={() => setPlace(false)}
              >
                <Link className={classes.a} href={item.path}>
                  {item.title}
                </Link>
                {place && <PlaceDropdown />}
              </li>
            );
          })}
          <li
            className={classes.article}
          >
            <Link href="/ArticleContent">Explore Article and Videos</Link>
          </li>
        </ul>
        <ButtonNavbar />
      </nav>
    </>
  );
}
