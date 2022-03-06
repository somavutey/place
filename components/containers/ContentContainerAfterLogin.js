import * as React from "react";

import { styled } from "@mui/material/styles";

import Typography from "@mui/material/Typography";
import { placeBasedOnRegion } from "../../web-admin/_mock_/placeBasedOnRegion";
import Grid from "@mui/material/Grid";
import ButtonBase from "@mui/material/ButtonBase";

import { useRouter, userRouter } from "next/router";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { fireStore } from "../../services/firebase";
import Carousel from "react-multi-carousel";
import BigCard from "../presentations/twoCard";
import WeekendGetAway from "../presentations/twoCardDown";

const breakPoints = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const CallToActionMessage = styled("div")(({ theme }) => ({
  paddingTop: "10px",
  marginLeft: 135,
  fontSize: "34px",
  position: "absolute",
  [theme.breakpoints.down("md")]: {
    marginLeft: "20px",
    fontSize: "18px",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "25px",
  },
}));
const CallToActionImage = styled("div")(({ theme }) => ({
  padding: "40px",
  [theme.breakpoints.up("md")]: {},
}));

const styles = {
  paperContainer: {
    backgroundImage: `url(${"https://ae01.alicdn.com/kf/H1e0ec6a2115e4d77bafefb0cf6af41a6N/Office-Inspirational-Words-Wall-sticker-Teamwork-Makes-The-Dream-Work-Motivational-Quotes-Home-or-Office-Decal.jpg_Q90.jpg_.webp"})`,
  },
};

const Img = styled("img")({
  margin: 0,
  padding: 0,
  maxWidth: "100%",
  maxHeight: "100%",
});
const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 300,
  marginLeft: 50,
  marginTop: 10,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important", // Overrides inline-style
    height: 100,
  },
  "&, &.Mui-focusVisible": {
    "& .hoverText": {
      display: "none",
    },
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .typography": {
      //border: '4px solid currentColor',
      display: "none",
    },
    "& .ArrowRightIcon": {
      display: "none",
    },
    "& .hoverText": {
      display: "inline",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "left",
  color: theme.palette.common.white,
}));

const ImageBackdrop = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0,
  transition: theme.transitions.create("opacity"),
  borderRadius: 15,
}));

const ImageMarked = styled("span")(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  position: "absolute",
  bottom: -2,
  left: "calc(50% - 9px)",
  transition: theme.transitions.create("opacity"),
}));

export default function CardInHomepage() {
  const [articlePages, SetArticlePages] = React.useState([]);
  const router = useRouter();
  const articleRouter = router.query.id;
  const [spacing, setSpacing] = React.useState(2);
  React.useEffect(() => {
    fireStore.collection("articleContent").onSnapshot((snapshot) => {
      console.log(snapshot);
      const articlePage = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      console.log(articlePage);
      SetArticlePages(articlePage);
      console.log(articlePages);
    });
  }, []);
  return (
    <div>
      {/* --------Kind of places---------- */}

      <Typography style={{ color: "gray", marginLeft: "10%", marginTop: 50 }}>
        <b>Place based on Region</b>
      </Typography>
      <div className="App" style={{ marginTop: "10px" }}>
        <div className="carousel-wrapper">
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={false}
            responsive={breakPoints}
            // ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={false}
            removeArrowOnDeviceType={["tablet", "mobile"]}
          >
            {placeBasedOnRegion.map((image, index) => (
              <Card
                key={index}
                sx={{
                  width: 310,
                  height: 300,
                  borderRadius: "20px",
                  margin: "auto",
                }}
              >
                <ButtonBase
                  onClick={() => router.push("./FilterPagesBeforeLogin")}
                >
                  <CardActionArea>
                    <CardMedia
                      // position="relative"
                      image={image.url}
                      style={{
                        width: 310,
                        height: 240,
                      }}
                      component="img"
                      alt="green iguana"
                    />

                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {image.title}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </ButtonBase>
              </Card>
            ))}
          </Carousel>
        </div>
      </div>
      {/* --------------end---------------- */}

      <Typography style={{ color: "gray", marginLeft: "10%", marginTop: 100 }}>
        <b>explore...</b>
      </Typography>
      <BigCard></BigCard>

      {/* ----------------- Explore Seggested Places -------------------- */}
      <Typography style={{ color: "gray", marginLeft: "10%", marginTop: 90 }}>
        <b> Explore Suggested Places</b>
      </Typography>
      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
        {/* <Grid item marginLeft="20%" marginRight="10%"> */}
        <Grid item sx={{ margin: "auto", marginTop: "10px" }}>
          <Grid container justifyContent="center" spacing={15}>
            {articlePages.slice(0, 3).map((item) => (
              <Grid item key={item.name} xs={12} sm={6} lg={4} spacing={3}>
                <Card sx={{ width: 310, height: 320, borderRadius: "20px" }}>
                  <ButtonBase
                    onClick={() => router.push("/articlepage/" + `${item.id}`)}
                  >
                    <CardActionArea>
                      <CardMedia
                        // position="relative"
                        sx={{ width: 310, height: 230 }}
                        component="img"
                        alt="green iguana"
                        image={item.url[0]}
                      />
                      <CardContent sx={{ minHeight: "100px" }}>
                        <Typography
                          gutterBottom
                          variant="p"
                          fontSize="19px"
                          textAlign="left"
                          component="div"
                        >
                          {item.title}
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </ButtonBase>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      {/* ---------------------- end ------------------------ */}

      {/* -----------------------weekend getaway------------- */}
      <Typography style={{ color: "gray", marginLeft: "10%", marginTop: 90 }}>
        <b> Weekend Getaway</b>
      </Typography>
      <div style={{ marginTop: "10px", marginBottom: " 120px" }}>
        <WeekendGetAway></WeekendGetAway>
      </div>
    </div>
  );
}
