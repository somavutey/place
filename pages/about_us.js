import React from "react";
import MembersCard from "../components/presentations/MembersCard";
import GroupSocialMediaIcon from "../components/containers/GroupSocialMediaIcons";
import twoCard from "../components/presentations/twoCard";

export default function AboutUsPage() {
  return (
    <div>
      <div style={{ textAlign: "center", paddingTop: "45px" }}>
        <img src="PicCoverOfAboutUs.png" />
      </div>
      <div>
        <twoCard></twoCard>
        <h3
          style={{
            textAlign: "center",
            width: "90%",
            paddingLeft: "10%",
            paddingTop: "15px",
          }}
        >
          PLACE
        </h3>
        <p style={{ textAlign: "center", width: "90%", paddingLeft: "10%" }}>
          Romdoul Village is a place that will offer you organic food only that
          is beautifully healthy. Also, you will enjoy the nature and vegetable
          garden around that might make you miss your hometown. You can choose
          from a variety of dishes on the menu or something exceptional.
          Tantalize your taste buds with imaginative cuisine.
        </p>
      </div>
      <div
        style={{
          textAlign: "center",
          width: "90%",
          paddingLeft: "10%",
          paddingTop: "5px",
        }}
      >
        <h3>Vision</h3>
        <p>Make easy life to find good places.</p>
      </div>
      <div
        style={{
          textAlign: "center",
          width: "90%",
          paddingLeft: "10%",
          paddingTop: "5px",
        }}
      >
        <h3>Mission</h3>
        <p>Our Team build it for everyone.</p>
      </div>
      <div
        style={{
          textAlign: "center",
          width: "90%",
          paddingLeft: "10%",
          paddingTop: "30px",
        }}
      >
        <MembersCard />
      </div>
    </div>
  );
}
