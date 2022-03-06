import { fireStore } from "../../../services/firebase";
import React from "react";
import SearchFilter from "../SearchFilter";
import HorizontalCardImageLeft from "../horizontalcards/imageleft";
import HorizontalCardImageRight from "../horizontalcards/imageright";
//import { getAllDocument } from '../../utils/functions/test';

const ContentList = () => {
  const [horizontalCards, setHorizontalCards] = React.useState([]);

  React.useEffect(() => {
    fireStore.collection("contents").onSnapshot((snapshot) => {
      const horizontalCard = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };
      });
      console.log(horizontalCard);
      setHorizontalCards(horizontalCard);
    });
  }, []);

  return (
    <div>
      <SearchFilter></SearchFilter>
      {horizontalCards.map((item, index) => {
        if (index % 2 == 0) {
          return (
            <HorizontalCardImageLeft
              url={item.url}
              desc={item.desc}
              id={item.id}
              title={item.title}
              heartColor={item.heartColor}
              items={item}
            ></HorizontalCardImageLeft>
          );
        } else {
          return (
            <HorizontalCardImageRight
              url={item.url}
              desc={item.desc}
              id={item.id}
              title={item.title}
              heartColor={item.heartColor}
              items={item}
            ></HorizontalCardImageRight>
          );
        }
      })}
    </div>
  );
};

export default ContentList;
