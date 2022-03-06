import maplibregl from "maplibre-gl";
import React from "react";

const BaseMap = ({ MapStyles, defaultCenter, zoom }) => {
  const mapRef = React.useRef(null);
  const [map, setMap] = React.useState(null);
  React.useEffect(() => {
    console.log("____CALL MAP____");
    let map = new maplibregl.Map({
      container: mapRef.current,
      style:
        "https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL",
      center: defaultCenter,
      zoom: zoom,
    });
    setMap(map);
    // Control map
    var draw = new MapboxDraw({
      displayControlsDefault: false,
      controls: {
        polygon: true,
        trash: true,
      },
    });
    map.addControl(draw);
    map.addControl(new maplibregl.NavigationControl(), "top-right");
    map.addControl(
      new maplibregl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      }),
    );
    map.addControl(new maplibregl.FullscreenControl());
    map.on("draw.create", updateArea);
    map.on("draw.delete", updateArea);
    map.on("draw.update", updateArea);

    function updateArea(e) {
      var data = draw.getAll();
    }
    map.once("load", (e) => {
      console.log("____Layer___");
    });
  }, []);

  return (
    <>
      <div style={MapStyles} ref={mapRef}></div>
    </>
  );
};

export default BaseMap;
