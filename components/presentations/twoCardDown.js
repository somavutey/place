import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import ButtonBase from "@mui/material/ButtonBase";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useRouter } from "next/router";
const Content = [
  {
    url: "https://firebasestorage.googleapis.com/v0/b/places-99af3.appspot.com/o/places%2FSR.jpg?alt=media&token=e29342d1-c73c-4b7c-a12c-4845b57ae220",
    id: "1",
    path: "/BaseMap",
  },
  {
    url: "https://firebasestorage.googleapis.com/v0/b/places-99af3.appspot.com/o/places%2Fknorng%20psa.jpg?alt=media&token=f8c26d34-03fe-4c3c-934c-f07caa51a3da",
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

const WeekendGetAway = () => {
  const router = useRouter();
  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite={true}
      removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
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
          <ButtonBase onClick={() => router.push(`/cards/${image.id}`)}>
            <CardActionArea>
              {/* <Link href={}></Link> */}

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

export default WeekendGetAway;
