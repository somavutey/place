import { Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { activities, region, kindofplace } from "../../web-admin/_mock_/footer";
import Link from "next/link";
import FooterListComponent from "../presentations/FooterComponent";
import React from "react";
const useStyles = makeStyles({
  footer: {
    background: "#15A2B8",
    marginTop: 50,
    width: "100%",
    textAlign: "center",
    color: "white",
    fontSize: 18,
  },
  footerTitle: {
    fontSize: 18,
    marginTop: "20px",
    fontWeight: "bold",
  },
  footerSub: {
    display: "block",
    fontSize: "15px",
    lineHeight: "2em",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  contact: {
    color: "#000",
    fontSize: 15,
  },
});

const Footer = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.footer}>
        <Grid container spacing={2}>
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                                                         List all Acitivities 
                                                      
              - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/}
          <Grid item sm={4} xs={12}>
            <Typography variant="h3" className={classes.footerTitle}>
              More activities
            </Typography>

            {activities.map((items, index) => {
              return (
                <FooterListComponent key={index}>
                  {items.item}
                </FooterListComponent>
              );
            })}
          </Grid>
          <Grid item sm={4} xs={12}>
            <Typography variant="h3" className={classes.footerTitle}>
              More activities
            </Typography>
            {kindofplace.map((items, index) => {
              return (
                <FooterListComponent key={index}>
                  {items.item}
                </FooterListComponent>
              );
            })}
          </Grid>
          <Grid item sm={4} xs={12}>
            <Typography variant="h3" className={classes.footerTitle}>
              More activities
            </Typography>
            {region.map((items, index) => {
              return (
                <FooterListComponent key={index}>
                  {items.item}
                </FooterListComponent>
              );
            })}
          </Grid>
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                                                         Draw Horizontal Line                    
              - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/}
          <Grid item lg={12} sm={12} xs={12}>
            <hr
              style={{ border: "none", height: 3, backgroundColor: "black" }}
            />
          </Grid>
          {/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                                                         Contact Us and About Us                    
              - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/}
          <Grid item textAlign="center" lg={6} sm={6} xs={6}>
            <Typography
              variant="h5"
              color="#000"
              style={{ fontWeight: "bold", fontSize: "clamp(1rem,1.5vw,2rem)" }}
            >
              CONTACT US!
            </Typography>
          </Grid>
          <Grid item textAlign="center" lg={6} sm={6} xs={6}>
            <Link href="#">
              <a
                style={{
                  display: "block",
                  color: "#000",
                  fontSize: "clamp(1rem,1.5vw,2rem)",
                  fontWeight: "bold",
                  textDecoration: "underline",
                  lineHeight: 1.235,
                }}
              >
                ABOUT US!
              </a>
            </Link>
          </Grid>

          <Grid container style={{ margin: "50px 100px" }}>
            <Grid item md={4} sm={4} xs={12}>
              <Typography className={classes.contact}>
                2007st Kakab, Khan Puthisen Chey, Phnom Penh
              </Typography>
            </Grid>
            <Grid item md={2} sm={4} xs={12}>
              <Typography className={classes.contact}>
                +855 10 46 61 47
              </Typography>
            </Grid>
            <Grid item md={2} sm={4} xs={12}>
              <Typography className={classes.contact}>@Place</Typography>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Footer;
