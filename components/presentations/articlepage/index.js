import React from "react";
import Button from "@mui/material/Button";
import Footer from "../../containers/Footer";
import { fireStore } from "../../../services/firebase";
import Grid from "@mui/material/Grid";
import { useRouter } from "next/router";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, ButtonBase } from "@mui/material";
import Multivideo from "../MultipleItem";
import { makeStyles } from "@mui/styles";
const style = makeStyles({
  Card: {
    "&:hover": {
      color: "#15A2B8",
    },
  },
});
const ArticleContentPage = () => {
  const classes = style();
  const [articlePages, SetArticlePages] = React.useState([]);
  const router = useRouter();
  const articleRouter = router.query.id;
  React.useEffect(() => {
    fireStore.collection("articleContent").onSnapshot((snapshot) => {
      const articlePage = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      console.log(articlePage);
      SetArticlePages(articlePage);
    });
  }, []);

  const [spacing, setSpacing] = React.useState(2);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  const jsx = `
<Grid container spacing={${spacing}}>
`;

  return (
    <div>
      <Button
        variant="contained"
        style={{ marginLeft: "100px", marginTop: "50px" }}
      >
        Article
      </Button>
      <Button
        variant="contained"
        style={{ float: "right", marginRight: "100px", marginTop: "50px" }}
      >
        Video
      </Button>
      <Multivideo></Multivideo>
      <Grid sx={{ flexGrow: 1 }} container spacing={2} justifyContent="center">
        <Grid item marginLeft="100px" marginRight="100px">
          <Grid container justifyContent="center" spacing={spacing}>
            {articlePages
              .sort(function (a, b) {
                return b.time - a.time;
              })
              .map((item) => (
                <Grid
                  key={item.name}
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  lg={4}
                  spacing={3}
                >
                  <Grid container justifyContent="center">
                    <Card
                      className={classes.Card}
                      sx={{
                        width: "346px",
                        height: "322px",
                        borderRadius: "20px",
                      }}
                    >
                      <ButtonBase
                        onClick={() =>
                          router.push("/articlepage/" + `${item.id}`)
                        }
                      >
                        <CardActionArea>
                          <CardMedia
                            style={{
                              width: "315px",
                              height: "215px",
                              marginLeft: "15.5px",
                              marginTop: "12px",
                              borderRadius: "10px",
                            }}
                            component="img"
                            alt="green iguana"
                            image={item.url[0]}
                          />
                          <CardContent sx={{ minWidth: 364, minHeight: 100 }}>
                            <Typography
                              gutterBottom
                              variant="h5"
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
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
};

export default ArticleContentPage;
