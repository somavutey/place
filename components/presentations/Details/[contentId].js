import React from 'react';
import { useRouter } from 'next/router'
import { fireStore } from '../../../services/firebase'
//import FilterPagesBeforeLOgin from '../FilterPagesBeforeLogin'
import PhotoLayout from "../PhotoLayout"
import LocationBox from "../LocationBox"
import CommentNew from "../CommentNew"
import { Container, ImageList, ImageListItem } from "@mui/material";
import { Box } from "@mui/system";
import Navbar from "../../containers/NavBar"
const ContentDetail = () => {
  const [data, setData] = React.useState({});
  const [horizontalCards, setHorizontalCards] = React.useState([])
  React.useEffect(() => {
    fireStore.collection("places").onSnapshot((snapshot) => {
      const horizontalCard = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      })

      setHorizontalCards(horizontalCard)


    })
  }, [])

  return (
    <div>
      <Navbar ></Navbar>

      <div>

        <Container>
          <Box sx={{ width: "100%", height: 450, overflowY: "scroll" }}>
            <ImageList variant="masonry" cols={2} gap={8}>
              {horizontalCards.map((item) => (
                <ImageListItem key={item.url}>
                  <img key={item.url}
                    src={`${item.url}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}

                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </Box>
        </Container>


      </div>
      <div style={{ width: "95%", paddingLeft: "7.5%" }}>
        <p >

        </p>
      </div>
      <div style={{ position: "absolute", left: "20%" }}>
        <h4>
          Note
        </h4>
        <ul>
          <li>hello</li>
          <li>hi</li>
          <li>bonjour</li>
        </ul>
      </div>
      <div style={{ position: "absolute", right: "20%" }}>
        <h4>
          Proximity
        </h4>
        <ul>
          <li>hello</li>
          <li>hi</li>
          <li>bonjour</li>
        </ul>
      </div>
      <div>
        <div style={{ marginTop: "18%" }}>
          <LocationBox />
        </div>
      </div>
      <div>
        <CommentNew />
      </div>


    </div>

  );
}

export default ContentDetail;