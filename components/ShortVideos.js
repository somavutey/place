import ReactPlayer from "react-player";
const ShortVideos = ({ video_url }) => {
  return (
    <div>
      <ReactPlayer
        controls
        width="300px"
        height="60vh"
        url={video_url}
      ></ReactPlayer>
    </div>
  );
};

export default ShortVideos;
