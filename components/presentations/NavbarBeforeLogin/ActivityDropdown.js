import React, { useState } from "react";
import { serviceDropdown } from "./DropdownItem"; 
import Link from "next/link";
import { makeStyles } from "@mui/styles";

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

export default function ActivityDropdown() {
  const classes = useStyle();
  const [dropdown, setDropdown] = useState(false);
 
  return (
    <>
      <ul
        className={
          dropdown ? classes.servicesSubmenuClicked : classes.servicesSubmenu
        }
        onClick={() => setDropdown(!dropdown)}
      >
        {serviceDropdown.map((item) => {
          return (
            <li className={classes.li} key={item.id}>
              <Link
                href={item.path}
                // className={item.cName}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
