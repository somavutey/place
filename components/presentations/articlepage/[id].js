import { Container, Grid, Typography } from "@mui/material";
import { fireStore } from "../../../services/firebase";
import Link from "next/link";
import { useRouter } from "next/router";
import * as React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Create from "@mui/icons-material/Create";
import { useRecoilValue } from "recoil";
import { idRout } from "../../../states/userState";
import PhotoLayout from "../PhotoLayout";
import Comment from "../CommentNew";
import LinearWithValueLabel from "../../containers/LinearProgressReview";
const ArticlePage = () => {
  const router = useRouter();
  const articleId = router.query.id;
  const [articlePages, SetArticlePages] = React.useState([]);

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

  return (
    <div>
      {articlePages
        .filter((item) => item.id === articleId)
        .map((item) => (
          <div key={item.title}>
            <Grid container justifyContent="center">
              <Grid item xs={4}>
                <img
                  style={{
                    width: "100%",
                    height: "300px",
                    margin: "auto",
                    objectFit: "cover",
                  }}
                  src={item.url[0]}
                />
              </Grid>
              <Grid item xs={4} style={{ width: "30vw" }}>
                <img
                  style={{
                    width: "100%",
                    height: "300px",
                    margin: "auto",
                    objectFit: "cover",
                  }}
                  src={item.url[1]}
                />
              </Grid>
              <Grid item xs={4}>
                <img
                  style={{
                    width: "100%",
                    height: "300px",
                    margin: "auto",
                    objectFit: "cover",
                  }}
                  src={item.url[2]}
                />
              </Grid>
            </Grid>
            <Container>
              <Typography
                style={{ margin: "20px 20px 20px 0", fontSize: "2.5em" }}
              >
                {item.title}
              </Typography>
              <Grid container sx={{ marginBottom: "20px" }}>
                {/* <Typography style={{ marginBottom: "20px" }}> */}
                <Grid item lg={2.5} md={3} sm={4.5} xs={6}>
                  <span style={{ verticalAlign: "middle" }}>
                    <AccessTimeIcon />
                  </span>
                  <span> {new Date(item.datetime).toLocaleString()}</span>
                </Grid>
                <Grid item lg={2} md={5} sm={5} xs={6}>
                  <span
                    style={{
                      verticalAlign: "middle",
                      // margin: "0 5px 0 20px",
                    }}
                  >
                    <Create />
                  </span>
                  <span> {item.name}</span>
                </Grid>
                {/* </Typography> */}
              </Grid>
              <Typography
                align="justify"
                variant="body1"
                style={{ fontSize: "20px" }}
              >
                {item.upperContent}
              </Typography>

              <PhotoLayout arrayUrl={item.url} />

              <Typography
                align="justify"
                variant="body1"
                style={{ fontSize: "20px" }}
              >
                {item.lowerContent}
              </Typography>
              <Typography variant="h4" style={{ margin: "40px 0" }}>
                Detail
              </Typography>
              <div>
                <Link href="#">
                  <a
                    style={{
                      fontSize: "20px",
                      color: "blue",
                      textDecoration: "underline",
                    }}
                  >
                    Korn Café
                  </a>
                </Link>
              </div>
              <br />
              <LinearWithValueLabel />
              <br />
              <Comment idRout={articleId} />
            </Container>
          </div>
        ))}
    </div>
  );
};

export default ArticlePage;
