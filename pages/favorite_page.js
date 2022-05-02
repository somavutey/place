import FavoritePopUp from "../components/presentations/favoritePopUp";
import PrimarySearchAppBar from "../components/containers/NavBarAfterLogin";
import HorizontalCards from "../components/containers/HorizontalCards";

const favortiePage = () => {
  return (
    <div>
      <PrimarySearchAppBar />
      <HorizontalCards />
    </div>
  );
};

export default favortiePage;
