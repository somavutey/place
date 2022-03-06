import React from "react";
import Link from "next/link";
import { makeStyles } from "@mui/styles";
const useStyle = makeStyles({
  btn: {
    border: "none",
    background: "transparent",
    padding: "4px 8px",
    fontSize: "100%",
    color: "white",
    background: "rgb(0, 212, 212)",
    borderRadius: "5px",
    transition: "0.3s all ease-out",
    cursor: "pointer",
    "&:hover": {
      color: "rgb(0, 212, 212)",
      background: "white",
      borderRadius: "5px",
    },
  },
});

export default function ButtonNavbar() {
  const classes = useStyle();
  return (
    <Link href="../../../login">
      <button className={classes.btn}>Log in</button>
    </Link>
  );
}
