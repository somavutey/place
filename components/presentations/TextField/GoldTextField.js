import { TextField } from "@mui/material";
const GoldTextField = ({
  key,
  id,
  label,
  name,
  type,
  variant,
  color,
  autoComplete,
}) => {
  return (
    <TextField
      key={key}
      style={{ width: "48ch", marginTop: "15px" }}
      id={id}
      label={label}
      name={name}
      inputProps={{ style: { fontFamily: "Arial" } }}
      InputLabelProps={{ style: { color: "#E09C26" } }}
      type={type}
      multiline
      //onChange={handleChange}
      variant={variant}
      color={color}
      autoComplete={autoComplete}
    />
  );
};

export default GoldTextField;
