import { Grid, Link } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const GroupSocialMediaIcons = ({ facebook, email, twitter, linkedin }) => {
  return (
    <div>
      <Grid container justifyContent="center">
        <Grid item xs={1.5}>
          <Link href={facebook} target="_blank" rel="noopener noreferrer">
            <FacebookIcon style={{ width: 45, height: 45 }} />
          </Link>
        </Grid>
        <Grid item xs={1.5}>
          <Link href={email} target="_blank" rel="noopener noreferrer">
            <EmailIcon style={{ width: 45, height: 45 }} />
          </Link>
        </Grid>
        <Grid item xs={1.5}>
          <Link href={linkedin} target="_blank" rel="noopener noreferrer">
            <LinkedInIcon style={{ width: 45, height: 45 }} />
          </Link>
        </Grid>
      </Grid>
    </div>
  );
};

export default GroupSocialMediaIcons;
