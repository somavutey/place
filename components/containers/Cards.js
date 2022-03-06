{
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
                                   Import
   * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
}

import { Typography } from "../presentations/articlepage/node_modules/@mui/material";
{
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
                                Create a component and exportation part
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
}
import CardInHomepage from "./Card";

const ContentContainer = () => {
  return (
    <div>
      <Typography></Typography>
      <CardInHomepage></CardInHomepage>
    </div>
  );
};

export default ContentContainer;
