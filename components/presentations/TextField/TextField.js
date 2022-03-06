{
  /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * 
              Default TextField (I used it in post content page)
  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
}

import { Grid, TextField } from "@mui/material";
const TextFields = ({ id, label, name, autoComplete }) => {
  return (
    <TextField
      variant="outlined"
      required
      fullWidth
      id={id}
      label={label}
      name={name}
      autoComplete={autoComplete}
    />
  );
};

export default TextFields;
