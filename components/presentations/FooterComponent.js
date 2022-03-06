import React from "react";
import Link from "next/link";
import { makeStyles } from "@mui/styles";
import { Grid, Typography } from "@mui/material";
const useStyles = makeStyles({
  footerSub: {
    display: "block",
    fontSize: "15px",
    lineHeight: "2em",
    "&:hover": {
      textDecoration: "underline",
    },
  },
});
const FooterListComponent = ({ children }) => {
  const classes = useStyles();
  return (
    <Link href="#">
      <a className={classes.footerSub}>{children}</a>
    </Link>
  );
};

export default FooterListComponent;
