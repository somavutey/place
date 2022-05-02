import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";

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

      <ContentList></ContentList>
    </div>
  );
};

export default FilterPagesBeforeLOgin;
