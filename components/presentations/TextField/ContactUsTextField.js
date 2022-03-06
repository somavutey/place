import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { TextField, Grid } from "@mui/material";
const ContactUsTextField = ({
  width,
  margin,
  id,
  label,
  name,
  font,
  inputColor,
  type,
  variant,
}) => {
  return (
    <Grid item sx={12} sm={12}>
      <ThemeProvider theme={themes} color="white">
        <TextField
          style={{ width: "48ch", marginTop: "30px" }}
          id="email"
          label="Email"
          name="email"
          inputProps={{ style: { fontFamily: "Arial" } }}
          InputLabelProps={{ style: { color: "#E09C26" } }}
          type="email"
          multiline
          onChange={handleChange}
          variant="filled"
          color="secondary"
          autoComplete="email"
        />
      </ThemeProvider>
    </Grid>
  );
};

export default ContactUsTextField;
