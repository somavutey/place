import Footer from "../components/containers/Footer";
import CardInHomepage from "../components/containers/ContentContainerAfterLogin";
import PrimarySearchAppBar from "../components/containers/NavBarAfterLogin";
import ButtonBases from "../components/presentations/TrendyCard";
export default function HomepageAfterLogin() {
  return (
    <div>
      <PrimarySearchAppBar></PrimarySearchAppBar>
      <ButtonBases />
      <CardInHomepage />
      <Footer />
    </div>
  );
}
