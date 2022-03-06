import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
// import Carousel from "react-elastic-carousel";
import ButtonBase from "@mui/material/ButtonBase";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import Link from 'next/link';

const Content = [
  {
    url: "https://firebasestorage.googleapis.com/v0/b/places-99af3.appspot.com/o/places%2F4.jpg?alt=media&token=995733e0-13dc-4d4d-8378-04d7b14d40c1",
    id: "1",
    path: "/BaseMap",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/places-99af3.appspot.com/o/places%2F1.jpg?alt=media&token=9b3bc0e3-255a-4bf2-ab28-65eefc55293a",
    title: "Peaceful",
    id: "2",
    path: "/",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/places-99af3.appspot.com/o/places%2FSummer%20Travel%20Photo%20Collage%20(2).jpg?alt=media&token=3172e026-b2be-48b9-beea-194892599f52",
    id: "3",
    path: "/",
  },

  {
    url: "https://firebasestorage.googleapis.com/v0/b/places-99af3.appspot.com/o/places%2F2.jpg?alt=media&token=fd68ac79-2359-4944-a0d6-1986ab0901fc",
    id: "3",
    path: "/",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
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

const BigCard = () => {
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      autoPlay={true}
      autoPlaySpeed={1500}
      transitionDuration={1500}
      removeArrowOnDeviceType={["tablet", "mobile"]}
    >
      {Content.map((image, index) => (
        <Card
          key={index}
          sx={{
            width: "74%",
            height: "60vh",
            margin: "auto",
            borderRadius: "20px",
          }}
        >
          <ButtonBase>
            <CardActionArea>
              <CardMedia
                image={image.url}
                style={{
                  width: "100%",
                  height: "",
                }}
                component="img"
              />
            </CardActionArea>
          </ButtonBase>
        </Card>
      ))}
    </Carousel>
  );
};

export default BigCard;
