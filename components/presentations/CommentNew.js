import * as React from "react";
import "firebase/firestore";

import DeleteIcon from "@mui/icons-material/Delete";

import {
  Grid,
  Paper,
  Box,
  Card,
  CardContent,
  CardActionArea,
  ButtonBase,
} from "@mui/material";
import {
  listAll,
  deleteItem,
  updateItem,
} from "../../utils/functions/firebase";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { yellow } from "@mui/material/colors";
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";
import { Avatar, Stack, TextField, Button, Typography } from "@mui/material";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import SendIcon from "@mui/icons-material/Send";
import StarIcon from "@mui/icons-material/Star";
import {
  starState,
  userState,
  commentState,
  starOneState,
  starTwoState,
  starThreeState,
  starFourState,
  starFiveState,
} from "../../states/userState";
import {
  constSelector,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from "recoil";
import Star from "./Star";
import { Router, useRouter } from "next/router";
export default function Comment({ idRout }) {
  const user = useRecoilValue(userState);
  const starValue = useRecoilValue(starState);
  const setStarValue = useSetRecoilState(starState);
  const [ucomment, setuComment] = React.useState([]);
  const [totalView, setCommentState] = useRecoilState(commentState);
  const setStarOneValue = useSetRecoilState(starOneState);
  const setStarTwoValue = useSetRecoilState(starTwoState);
  const setStarThreeValue = useSetRecoilState(starThreeState);
  const setStarFourValue = useSetRecoilState(starFourState);
  const setStarFiveValue = useSetRecoilState(starFiveState);

  React.useEffect(() => {
    listAll("comments", idRout).then((res) => {
      console.log(res);
      setuComment(res);
      setCommentState(res.length);

      let group = res
        .filter((item) => item.idRout === idRout)
        .reduce((r, a) => {
          r[a.star] = [...(r[a.star] || []), a];
          return r;
        }, {});
      setStarOneValue(group[1] ? group[1].length : null);
      setStarTwoValue(group[2] ? group[2].length : null);
      setStarThreeValue(group[3] ? group[3].length : null);
      setStarFourValue(group[4] ? group[4].length : null);
      setStarFiveValue(group[5] ? group[5].length : null);
    });
  }, []);

  const handleComment = (e) => {
    e.preventDefault();
    const comment = e.target.ucomment;
    if (starValue != 0) {
      updateItem("comments", {
        comment: comment.value,
        star: starValue,
        profileName: user.username,
        profilePic: user.profile,
        time: Date.now(),
        idRout: idRout,
      });

      setStarValue(0);
      e.target.reset();
    } else {
      alert("please give us rating star!!!");
    }
  };

  const handleDelete = (id) => {
    deleteItem("comments", id);
  };

  return (
    <Grid container justifyContent="center">
      <Card
        elevation={10}
        style={{
          borderRadius: 18,
          width: "90%",
        }}
      >
        <CardContent>
          <form onSubmit={handleComment} style={{ width: "100%" }}>
            <Grid container>
              <Grid item lg={0.5} sm={0.5} xs={1}>
                <Avatar
                  style={{ margin: "auto" }}
                  alt="Remy Sharp"
                  src={user.profile}
                />
              </Grid>
              <Grid
                item
                lg={1.5}
                sm={3}
                xs={5}
                style={{ marginTop: "-10px", marginLeft: "15px" }}
              >
                <h5>{user.username}</h5>
              </Grid>
              <Grid item lg={9} sm={5} xs={5}>
                <span>
                  <Star />
                </span>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item lg={10} sm={10} xs={8}>
                <TextField
                  style={{
                    width: "90%",
                    marginLeft: "5%",
                    whiteSpace: "pre-wrap",
                  }}
                  multiline
                  id="standard-basic"
                  label="Write review..."
                  variant="standard"
                  name="ucomment"
                  required
                />
              </Grid>
              <Grid item lg={2} sm={2} xs={4}>
                <Button
                  type="submit"
                  variant="contained"
                  endIcon={<SendIcon />}
                  sx={{
                    height: 30,
                    width: "auto",
                    backgroundColor: "rgba(135, 206, 235, 1)",
                  }}
                >
                  Review
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>

      {ucomment
        .sort(function (a, b) {
          return b.time - a.time;
        })
        .map((item) => {
          return (
            <Card
              key={item.id}
              elevation={10}
              style={{
                borderRadius: 18,
                width: "90%",
              }}
            >
              <CardContent>
                <Grid container>
                  <Grid item lg={0.5} sm={0.5} xs={1}>
                    <Avatar alt="Profile Pic" src={item.profilePic} />{" "}
                  </Grid>
                  <Grid
                    item
                    lg={1.5}
                    sm={3}
                    xs={5}
                    style={{ marginTop: "-10px", marginLeft: "15px" }}
                  >
                    <h5>{item.profileName}</h5>
                  </Grid>
                  <Grid item lg={8} sm={5} xs={5}>
                    <div>
                      {[...Array(5)].map((itemStar, index) => {
                        return (
                          <span key={index}>
                            <FavoriteIcon
                              style={{
                                color:
                                  item.star > index ? "#FFBA5A" : "#a9a9a9",
                              }}
                            />
                          </span>
                        );
                      })}
                    </div>
                  </Grid>
                  <Grid item lg={1.6} sm={11} xs={11}>
                    <h5 style={{ margin: 0, paddingLeft: "20px" }}>
                      {new Date(item.time).toLocaleString()}
                    </h5>
                  </Grid>
                  <Grid item lg={0.1}>
                    <ButtonBase onClick={() => handleDelete(item.id)}>
                      <DeleteIcon />
                    </ButtonBase>
                  </Grid>
                </Grid>
                <pre
                  style={{
                    width: "80%",
                    marginLeft: "5%",
                    fontFamily: "Roboto, sans-serif",
                  }}
                >
                  {item.comment}
                </pre>
              </CardContent>
            </Card>
          );
        })}
    </Grid>
  );
}
