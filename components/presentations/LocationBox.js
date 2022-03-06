import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

export default function BoxLocation() {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        "& > :not(style)": {
          m: 1,
          width: "90%",
          height: "auto",
        },
        paddingLeft: "8%",
        paddingTop: 4,
      }}
    >
      <Paper
        elevation={10}
        style={{ padding: 15, position: "relative", borderRadius: 20 }}
      >
        <div className="MapInfo" style={{ position: "absolute", right: "2%" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125447.76715284208!2d103.17826973046051!3d10.71575265304132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3107c1eb6f5622a1%3A0x836af75a469a1d58!2sKoh%20Rong!5e0!3m2!1sen!2skh!4v1636705705281!5m2!1sen!2skh"
            width="240vh"
            height="300vh"
            loading="lazy"
          ></iframe>
        </div>
        <div className="TextInfoLocation">
          <h3>Location</h3>
          <p>
            <b>Address: </b>Koh Ouen Private, Koh Rong Archipelago, Near
            Sihanouville
          </p>
        </div>
        <div className="TextInfoContact">
          <h3>Contact</h3>
          <p>
            <b>Email: </b> example@gmail.com
          </p>
          <p>
            <b>Phone: </b> 017 900 906 (Cellcard) (Telegram), 069 900 900
          </p>
          <p>
            <b>FaceBook Page: </b> Koh Rong - កោះរុង
          </p>
          <p>
            <b>Place App: </b>Koh Rong - កោះរុង
          </p>
        </div>
      </Paper>
    </Box>
  );
}
