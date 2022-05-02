import {
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  Dialog,
  Box,
} from "./articlepage/node_modules/@mui/material";
import React from "react";
import LoadingBar from "react-top-loading-bar";
import { fireStorage, fireStore } from "../services/firebase";
import { makeStyles } from "@material-ui/styles";
import Create from "./articlepage/node_modules/@mui/icons-material/Create";
import AccessTimeIcon from "./articlepage/node_modules/@mui/icons-material/AccessTime";
import PhotoLayout from "./../components/presentations/PhotoLayout";
import { useRecoilValue } from "recoil";
import { userState } from "../states/userState";

const useStyles = makeStyles({
  paper: {
    marginTop: 8,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  form: {
    width: "100%", // Fix IE 11 issue.
  },
  submit: {
    marginTop: "24px",
  },
  dialog: {
    width: "100vw",
    height: "100vh",
  },
});

const Upload = () => {
  const classes = useStyles();
  const user = useRecoilValue(userState);
  const [filePic, setFilePic] = React.useState([]);
  const [titlePreview, setTitlePreview] = React.useState("");
  const [contentPreview, setContentPreview] = React.useState("");
  const splitContentPreview = contentPreview.split(" ");
  const upperContentPreview = splitContentPreview.slice(0, 100).join(" ");
  const lowerContentPreview = splitContentPreview.slice(100).join(" ");
  const [progress, setProgress] = React.useState(0);
  const [allFiles, setAllFiles] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const [rawFiles, setRawFiles] = React.useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();

    let allfiles = [];
    if (e.target.elements) {
      const { files, title, content } = e.target.elements;

      const splitContent = content.value.split(" ");
      const upperContent = splitContent.slice(0, 100).join(" ");
      const lowerContent = splitContent.slice(100).join(" ");
      const storageRef = fireStorage.ref("articlePage");

      if (files.files.length > 6) {
        console.log(files.files);
        for (let i = 0; i < files.files.length; i++) {
          console.log(files.files[i].name);
          const fileRef = storageRef.child(files.files[i].name);
          fileRef
            .put(files.files[i])
            .then((res) => {
              fileRef
                .getDownloadURL()
                .then((res) => {
                  allfiles.push(res);
                  console.log(allfiles);
                  setAllFiles(allfiles);
                  if (allfiles.length === files.files.length) {
                    fireStore
                      .collection("articleContent")
                      .add({
                        title: title.value,
                        upperContent: upperContent,
                        lowerContent: lowerContent,
                        datetime: new Date().toLocaleString(),
                        name: user.username,
                        url: allfiles,
                      })
                      .then((res) => {
                        console.log("success");
                        setProgress(100);
                      })
                      .catch((err) => {
                        console.error(err.message);
                      });
                  }
                })
                .catch((err) => {
                  console.error(err.message);
                });
            })
            .catch((err) => {
              console.error(err.message);
            });
        }
      } else {
        alert("You must upload photo more than 7 pics");
      }
    } else {
      console.log(rawFiles);
      if (rawFiles.length > 6) {
        const storageRef = fireStorage.ref("articlePage");

        for (let i = 0; i < rawFiles.length; i++) {
          const fileRef = storageRef.child(rawFiles[i].name);
          fileRef
            .put(rawFiles[i])
            .then((res) => {
              fileRef
                .getDownloadURL()
                .then((res) => {
                  allfiles.push(res);
                  console.log(allfiles);
                  setAllFiles(allfiles);
                  if (allfiles.length === filePic.length) {
                    fireStore
                      .collection("articleContent")
                      .add({
                        title: titlePreview,
                        upperContent: upperContentPreview,
                        lowerContent: lowerContentPreview,
                        datetime: new Date().toLocaleString(),
                        name: user.username,
                        url: allfiles,
                      })
                      .then((res) => {
                        console.log("success");
                        setProgress(100);
                      })
                      .catch((err) => {
                        console.error(err.message);
                      });
                  }
                })
                .catch((err) => {
                  console.error(err.message);
                });
            })
            .catch((err) => {
              console.error(err.message);
            });
        }
      } else {
        alert("You must upload photo more than 7 pics");
      }
    }
  };
  const handleOpen = (e) => {
    setOpen(true);
  };
  const handleClose = (e) => {
    setOpen(false);
  };

  const previewPic = (e) => {
    setRawFiles(e.target.files);
    console.log(e.target.files);
    const fileArray = Array.from(e.target.files).map((file) =>
      URL.createObjectURL(file)
    );
    console.log(fileArray);
    setFilePic(fileArray);
  };
  const handleTitlePreview = (e) => {
    setTitlePreview(e.target.value);
  };
  const handleContentPreview = (e) => {
    setContentPreview(e.target.value);
  };
  return (
    <Container style={{ width: "100%" }}>
      <LoadingBar
        color="#f11946"
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Grid
        container
        justifyContent="center"
        style={{ textAlign: "center", width: "100%" }}
        rowSpacing={1}
      >
        <Grid item xs={12}>
          <Typography variant="h5" color="primary" style={{ margin: "50px" }}>
            Upload Article
          </Typography>
        </Grid>
        <form onSubmit={handleSubmit}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid item lg={12}>
              <label>
                <img
                  style={{ width: "10%", margin: "50px", cursor: "pointer" }}
                  src="/icon upload.png"
                />
                <input
                  style={{
                    display: "none",
                  }}
                  type="file"
                  name="files"
                  id="imageFile"
                  accept="image/*"
                  multiple
                  onChange={previewPic}
                />
              </label>
            </Grid>

            <Grid item lg={12}>
              <Grid container justifyContent="flex-end">
                <Grid item lg={1}>
                  <img style={{ width: "90%" }} src="/title 1.png" />
                </Grid>
                <Grid item lg={11}>
                  <TextField
                    style={{ textAlign: "center", marginBottom: "24px" }}
                    type="text"
                    name="title"
                    fullWidth
                    placeholder="*Title"
                    required
                    onChange={handleTitlePreview}
                  />
                </Grid>
              </Grid>
              <Grid container>
                <Grid item lg={1}></Grid>
                <Grid item lg={11}>
                  <TextField
                    style={{ marginBottom: "24px" }}
                    type="text"
                    name="content"
                    multiline={true}
                    rows={10}
                    fullWidth
                    placeholder="*Description"
                    required
                    onChange={handleContentPreview}
                  />
                </Grid>
                <br />
                <Grid item lg={12}>
                  <Typography variant="h5">
                    Give reader some note of your article...
                  </Typography>
                </Grid>
              </Grid>
              <br />
              <Grid container>
                <Grid item lg={1}>
                  <img style={{ width: "90%" }} src="/logoUpload.png" />
                </Grid>
                <Grid item lg={5.5}>
                  <Typography
                    style={{
                      marginBottom: "24px",
                      height: "56px",
                      paddingTop: "15px",
                    }}
                  >
                    Place&apos;s name you are writing about
                  </Typography>
                </Grid>
                <Grid item lg={5.5}>
                  <TextField
                    style={{ marginBottom: "24px" }}
                    type="url"
                    name="link card"
                    fullWidth
                    placeholder="Add Link "
                    required
                  />
                </Grid>
              </Grid>
              <Grid container>
                <Grid item lg={1}>
                  <img
                    style={{ width: "60%", paddingTop: "15px" }}
                    src="/facebook 2.png"
                  />
                </Grid>
                <Grid item lg={5.5}>
                  <Typography
                    style={{
                      marginBottom: "24px",
                      height: "56px",
                      paddingTop: "15px",
                    }}
                  >
                    Place Facebook Page Name
                  </Typography>
                </Grid>
                <Grid item lg={5.5}>
                  <TextField
                    style={{ marginBottom: "24px" }}
                    type="url"
                    name="link facebook"
                    fullWidth
                    placeholder="Add Link "
                    required
                  />
                </Grid>
              </Grid>
              <Grid item container>
                <Grid item lg={6} sm={6} xs={12}>
                  <Button
                    variant="contained"
                    onClick={() => {
                      handleOpen();
                      // previewPic();
                    }}
                  >
                    Preview
                  </Button>
                </Grid>
                <Grid item lg={6} sm={6} xs={12}>
                  <Button variant="contained" type="submit">
                    Upload
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </form>
      </Grid>
      <Dialog open={open} onClose={() => handleClose()}>
        <Grid container justifyContent="center">
          <Grid item xs={4}>
            {filePic[0] && (
              <img
                id="blah"
                src={filePic[0]}
                alt="your image"
                style={{
                  width: "100%",
                  height: "200px",
                  margin: "auto",
                  objectFit: "cover",
                }}
              />
            )}
          </Grid>
          <Grid item xs={4} style={{ width: "30vw" }}>
            {filePic[1] && (
              <img
                id="blah"
                src={filePic[1]}
                alt="your image"
                style={{
                  width: "100%",
                  height: "200px",
                  display: "block",
                  margin: "auto",
                  objectFit: "cover",
                }}
              />
            )}
          </Grid>
          <Grid item xs={4}>
            {filePic[2] && (
              <img
                id="blah"
                src={filePic[2]}
                onError={{ display: "none" }}
                alt="your image"
                style={{
                  width: "100%",
                  height: "200px",
                  display: "block",
                  margin: "auto",
                  objectFit: "cover",
                }}
              />
            )}
          </Grid>
        </Grid>

        <Container>
          <Typography variant="h4" style={{ margin: "20px 20px 20px 0" }}>
            {titlePreview}
          </Typography>
          <Typography style={{ marginBottom: "20px" }}>
            <span style={{ verticalAlign: "middle" }}>
              <AccessTimeIcon />
            </span>
            <span> {new Date().toLocaleString()}</span>
            <span style={{ verticalAlign: "middle", margin: "0 5px 0 20px" }}>
              <Create />
            </span>
            <span> {user.username}</span>
          </Typography>
          <Typography
            align="justify"
            variant="body1"
            style={{ fontSize: "20px" }}
          >
            {upperContentPreview}
          </Typography>
          {filePic[3] && <PhotoLayout arrayUrl={filePic} />}

          <Typography
            align="justify"
            variant="body1"
            style={{ fontSize: "20px" }}
          >
            {lowerContentPreview}
          </Typography>
          <Button
            onClick={handleSubmit}
            variant="contained"
            type="submit"
            style={{ marginBottom: "10px" }}
          >
            Upload
          </Button>
        </Container>
      </Dialog>
    </Container>
  );
};

export default Upload;
