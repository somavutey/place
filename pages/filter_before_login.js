import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import FormRow from "./Filter";
import FilterBar from "../components/presentations/FilterBar";
import HorizontalCards from "./HorizontalCards";
//import PreviewCard from "./Firebase/Preview"
import ContentList from "./Details/index";

const useStyles = makeStyles({});
const FilterPagesBeforeLOgin = () => {
  const classes = useStyles();
  return (
    <div>
      <Container align="center">
        <img src="/cover.jpg" alt="cover" width={1000} height={300} />
      </Container>
      <FormRow></FormRow>
      <br></br>
      <ContentList></ContentList>
      {/* <PreviewCard></PreviewCard>*/}
      <HorizontalCards></HorizontalCards>
    </div>
  );
};

export default FilterPagesBeforeLOgin;
