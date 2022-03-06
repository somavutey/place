import BaseMap from "./BaseMap";
const Map = () => {
  return (
    <>
      <BaseMap
        defaultCenter={[104.91666266871523, 11.541525694098969]}
        zoom={12}
        MapStyles={{ width: "100%", height: "80vh" }}
      ></BaseMap>
    </>
  );
};

export default Map;
