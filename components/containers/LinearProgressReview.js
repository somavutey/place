{/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
                                                          Import
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -*/}
import * as React from "react";
import PropTypes from "prop-types";
import LinearProgress from "@mui/material/LinearProgress";
import { useRecoilValue } from "recoil";
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";
import Box from "@mui/material/Box";
import {
  commentState,
  starOneState,
  starTwoState,
  starThreeState,
  starFourState,
  starFiveState,
} from "../../states/userState";

function LinearProgressWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">
          {props.value ? `${Math.round(props.value)}%` : `0%`}
        </Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function LinearWithValueLabel() {
  const totalView = useRecoilValue(commentState);
  const starOneValue = useRecoilValue(starOneState);
  const starTwoValue = useRecoilValue(starTwoState);
  const starThreeValue = useRecoilValue(starThreeState);
  const starFourValue = useRecoilValue(starFourState);
  const starFiveValue = useRecoilValue(starFiveState);

  return (
    <Container>
      <div>
        <span style={{ width: "90%", fontWeight: "bold", fontSize: "2em" }}>
          Reviews
        </span>
        <span
          style={{
            width: "90%",
            fontWeight: "bold",
            fontSize: "2em",
            marginLeft: "15%",
          }}
        >
          {totalView}
        </span>
        <span
          style={{
            width: "90%",
            fontWeight: "bold",
            fontSize: "2em",
            marginLeft: "2%",
          }}
        >
          {" "}
          views
        </span>
      </div>
      <Grid container flexDirection="column" justifyContent="center">
        <Grid item>
          <Typography>Excellent</Typography>
          <Box sx={{ width: "50%", margin: "auto", verticalAlign: "middle" }}>
            <LinearProgressWithLabel
              value={totalView ? (starFiveValue * 100) / totalView : 0}
            />
          </Box>
        </Grid>
        <br />
        <Grid item>
          <Typography> Very Good</Typography>
          <Box sx={{ width: "50%", margin: "auto" }}>
            <LinearProgressWithLabel
              value={totalView ? (starFourValue * 100) / totalView : 0}
            />
          </Box>
          <br />
        </Grid>
        <Grid item>
          <Typography> Average</Typography>
          <Box sx={{ width: "50%", margin: "auto" }}>
            <LinearProgressWithLabel
              value={totalView ? (starThreeValue * 100) / totalView : 0}
            />
          </Box>
          <br />
        </Grid>
        <Grid item>
          <Typography> Poor</Typography>
          <Box sx={{ width: "50%", margin: "auto" }}>
            <LinearProgressWithLabel
              value={totalView ? (starTwoValue * 100) / totalView : 0}
            />
          </Box>
          <br />
        </Grid>
        <Grid item>
          <Typography> Terrible</Typography>
          <Box sx={{ width: "50%", margin: "auto" }}>
            <LinearProgressWithLabel
              value={totalView ? (starOneValue * 100) / totalView : 0}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
