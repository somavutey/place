import React, { useState } from "react";
import { placeDropdown } from "./DropdownItem"; //y
import Link from "next/link";
import { makeStyles } from "@mui/styles";
import { fireAuth } from '../../../services/firebase'

const useStyle = makeStyles({
  servicesSubmenu: {
    position: "absolute",
    top: "8vh",
    listStyle: "none",
    textAlign: "center",
    padding: 0,
    zIndex: '1',
  },

  li: {
    display: "block",
    width: "100px",
    height: "100%",
    textDecoration: "none",
    color: "white",
    background: "rgb(0, 212, 212)",
    cursor: "pointer",
    border: "1px solid",
    padding: "10px",
    "&:hover": {
      background: "rgb(0, 175, 175)",

    },
  },

  servicesSubmenuClicked: {
    display: "none",
  },
});
// use function in utils folder
export default function PlaceDropdown() {
  const classes = useStyle();
  const [place, setPlace] = useState(false);
  const handleLogout = (e) => {
    e.preventDefault();
    fireAuth.signOut()
      .then((res) => {
        alert("Signed Out")
      })
      .catch((err) => {
        alert(err.message)
      }
      )
  }
  return (
    <>
      <ul
        className={
          place ? classes.servicesSubmenuClicked : classes.servicesSubmenu
        }
        onClick={() => setPlace(!place)}
      >
        {placeDropdown.map((item) => {
          return (
            <li className={classes.li} key={item.id}>
              <Link
                href={item.path}
                className={classes.submenuItem}
                onClick={() => setPlace(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
        <li className={classes.li} key="oo1">
          <Link >Logout</Link>
        </li>
      </ul>
    </>
  );
}
