import React from "react";
import {
  Typography,
  Grid,
  Card,
  ButtonBase,
  CardActionArea,
  CardMedia,
  CardContent,
} from "@mui/material";
import { listAllDocument } from "../../../utils/functions/firebase";
const SuggestedPlace = () => {
  const [articlePages, SetArticlePages] = React.useState([]);
  React.useEffect(() => {
    listAllDocument("articleContent").then((res) => {
      SetArticlePages(res);
    });
  }, []);

  return (
    <div>
      <Typography style={{ color: "gray", marginLeft: "10%", marginTop: 90 }}>
        <b> Explore Suggested Places</b>
      </Typography>
      <Grid sx={{ flexGrow: 1 }} container spacing={2}>
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
    </div>
  );
};

export default SuggestedPlace;
