import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { members } from "../../web-admin/_mock_/member_data";
import GroupSocialMediaIcons from "../containers/GroupSocialMediaIcons";

export default function MembersCard() {
  return (
    <Box sx={{ flexGrow: 1, marginLeft: 5, marginRight: 5 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {members.map((member, index) => (
          <Grid item xs={2} sm={3} md={3} key={index}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="250"
                  image={member.profile_image}
                  alt="member image"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {member.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {member.desc}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <GroupSocialMediaIcons />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
