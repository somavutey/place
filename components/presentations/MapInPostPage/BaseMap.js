import maplibregl, { LngLat } from "maplibre-gl";
import React from "react";

import { makeStyles } from "@mui/styles";

import { Typography } from "@material-ui/core";
const imageIcon = makeStyles({
  root: {
    display: "block",
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
    padding: "0",
  },
});

const BaseMap = ({ MapStyles, defaultCenter, zoom }) => {
  const mapRef = React.useRef(null);
  const [map, setMap] = React.useState(null);
  const [lat, setLat] = React.useState("");
  const [lng, setlng] = React.useState("");
  const [location, setLocation] = React.useState("");
  const imageIconStyles = imageIcon();

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
    //add icon marker

    geojson.features.forEach(function (marker) {
      // create a DOM element for the marker
      var el = document.createElement("div");
      el.className = "imageIconStyles.root";
      el.style.backgroundImage =
        "url(https://placekitten.com/g/" +
        marker.properties.iconSize.join("/") +
        "/)";
      el.style.width = marker.properties.iconSize[0] + "px";
      el.style.height = marker.properties.iconSize[1] + "px";

      el.addEventListener("click", function () {
        window.alert(marker.properties.message);
      });

      // add marker to map
      new maplibregl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);
    });
    //draggable
    var marker = new maplibregl.Marker({
      draggable: true,
    })
      .setLngLat([104.91666266871523, 11.541525694098969])
      .addTo(map);

    function onDragEnd() {
      var lngLat = marker.getLngLat();

      console.log("Longitude: " + lngLat.lng + "<br />Latitude: " + lngLat.lat);
      setLat(lngLat.lat);
      setlng(lngLat.lng);
    }

    marker.on("dragend", onDragEnd);
    // Control map

    map.addControl(new maplibregl.NavigationControl(), "top-right");
    map.addControl(
      new maplibregl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },

        trackUserLocation: true,
      })
    );

    map.addControl(new maplibregl.FullscreenControl());

    map.once(() => {
      console.log("____Layer___");

      map.loadImage(
        "https://maplibre.org/maplibre-gl-js-docs/assets/custom_marker.png"

        // Add an image to use as a custom marker
      );
    });
  }, []);

  return (
    <>
      <div style={MapStyles} ref={mapRef}></div>

      <Typography>
        {lng}|{lat}
      </Typography>
    </>
  );
};

export default BaseMap;
var geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        message: "Foo",
        iconSize: [60, 60],
      },
      geometry: {
        type: "Point",
        coordinates: [-66.324462890625, -16.024695711685304],
      },
    },
    {
      type: "Feature",
      properties: {
        message: "Bar",
        iconSize: [50, 50],
      },
      geometry: {
        type: "Point",
        coordinates: [-61.2158203125, -15.97189158092897],
      },
    },
    {
      type: "Feature",
      properties: {
        message: "Baz",
        iconSize: [40, 40],
      },
      geometry: {
        type: "Point",
        coordinates: [-63.29223632812499, -18.28151823530889],
      },
    },
  ],
};
