import {
  Typography,
  Card,
  ButtonBase,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";
import { placeBasedOnRegion } from "../../../web-admin/_mock_/placeBasedOnRegion";
import Carousel from "react-multi-carousel";
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

const PlaceBasedOnRegion = () => {
  return (
    <div>
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
            infinite={true}
            autoPlay={false}
            removeArrowOnDeviceType={["tablet", "mobile"]}
          >
            {placeBasedOnRegion.map((image, index) => {
              return (
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
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default PlaceBasedOnRegion;
