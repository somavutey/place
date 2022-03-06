import { Container, ImageList, ImageListItem } from "@mui/material";
import { Box } from "@mui/system";

const PhotoLayout = ({ arrayUrl }) => {
  const urls = arrayUrl?.slice(3);
  return (
    <div style={{ margin: "20px 0" }}>
      <Box
        sx={{
          width: "100%",
          height: 450,
          overflowY: "scroll",
          borderRadius: "50px",
        }}
      >
        <ImageList variant="masonry" cols={2} gap={8}>
          {urls?.map((url, index) => {
            return (
              <ImageListItem key={index}>
                <img src={url} loading="lazy" />
              </ImageListItem>
            );
          })}
        </ImageList>
      </Box>
    </div>
  );
};

export default PhotoLayout;
