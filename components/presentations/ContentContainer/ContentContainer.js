//                                      Import
import * as React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  styled,
  Typography,
  Grid,
  ButtonBase,
  Button,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@mui/material";
import { fireStore } from "../../../services/firebase";
import Carousel from "react-multi-carousel";
import PlaceBasedOnRegion from "./PlaceBasedOnRegion";
import BigCard from "../twoCard";
import WeekendGetAway from "../twoCardDown";
const breakPoints = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
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
    width: "100% !important",
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
      <PlaceBasedOnRegion></PlaceBasedOnRegion>
      <Typography style={{ color: "gray", marginLeft: "10%", marginTop: 100 }}>
        <b>explore...</b>
      </Typography>
      <BigCard></BigCard>

      <div
        style={{
          width: "100%",
          height: "45vh",
          backgroundColor: "rgba(196, 196, 196, 0.29)",
          marginTop: "100px",
          marginBottom: "90px",
          position: "relative",
        }}
      >
        <div>
          <CallToActionMessage>
            <p>
              Want to save your{" "}
              <b style={{ color: "rgba(21, 162, 184, 1)" }}>Favorite</b> places
              for <br></br>later,{" "}
              <b style={{ color: "rgba(21, 162, 184, 1)" }}>Post</b> a place or{" "}
              <b style={{ color: "rgba(21, 162, 184, 1)" }}>Write</b> your{" "}
              <br></br>experience ?
            </p>
          </CallToActionMessage>
        </div>

        <Button
          sx={{
            position: "absolute",
            marginTop: "160px",
            marginLeft: "40%",
            cursor: "pointer",
            backgroundColor: "rgba(21, 162, 184, 1)",
          }}
          variant="contained"
          size="large"
        >
          <Link href="/signup"> Get Start!</Link>
        </Button>
        <CallToActionImage>
          <img
            style={{
              width: "30%",
              height: "30vh",
              marginLeft: "60%",
              boxShadow: "15px 15px 0px #B2B2B2",
            }}
            src="https://expatguideturkey.com/wp-content/uploads/2020/10/which-ways-may-be-followed-in-making-long-distance-travel.jpg "
          />
        </CallToActionImage>
      </div>

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
