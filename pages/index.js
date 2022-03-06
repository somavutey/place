import MultipleSelect from "../components/presentations/SearchBar";
import { makeStyles } from "@mui/styles";
import Navbar from "../components/containers/NavBar";
import Footer from "./../components/containers/Footer";
import CardInHomepage from "../components/presentations/ContentContainer/ContentContainer";

const useStyle = makeStyles({
  picture: {
    position: "relative",
  },
  search: {
    position: "absolute",
    top: "47vh",
    zIndex: "1",
    marginLeft: "10%",
  },
  slogan: {
    position: "absolute",
    top: "25vh",
    zIndex: "1",
    textAlign: "left",
    textShadow: "3px 2px 1px rgba(91, 91, 91, 1)",
    display: "flex",
    width: "auto",
    marginLeft: "10%",
    color: "white",
    fontSize: "25px",
  },
  subslogan: {
    fontFamily: "Courgette",
    color: "rgba(224, 156, 38, 1)",
    fontSize: "55px",
  },
});

export default function New() {
  const classes = useStyle();
  return (
    <div>
      <Navbar />
      <div className={classes.swipe}>
        <picture>
          <source
            media="(min-width:800px)"
            srcSet="https://firebasestorage.googleapis.com/v0/b/places-99af3.appspot.com/o/places%2Fnew.jpg?alt=media&token=8046e540-b791-4567-a4aa-f91a942a4fb3"
          />
          <source
            media="(min-width:500px)"
            srcSet="https://firebasestorage.googleapis.com/v0/b/places-99af3.appspot.com/o/places%2Fversion%202(medium%20screen%20size).jpg?alt=media&token=344254c6-215d-4145-88e0-5416796435c3"
          />
          <img
            src="https://firebasestorage.googleapis.com/v0/b/places-99af3.appspot.com/o/places%2Fversion%203(smallest%20screen%20size).png?alt=media&token=ead661cc-87d6-48bc-b263-433e263b8ab2"
            alt="Flowers"
            style={{ width: "100%", height: "100vh" }}
          />
        </picture>
        <div className={classes.slogan}>
          <h3>
            <span className={classes.subslogan}>Places, </span>
            <br />
            where you can easily find where to go
          </h3>
        </div>
        <div container className={classes.search}>
          <MultipleSelect />
        </div>
      </div>
      <CardInHomepage />
      <Footer></Footer>
    </div>
  );
}
