import maplibregl, { LngLat } from "maplibre-gl";
import React from "react";
import PersistentDrawerLeft from "../components/presentations/drawer";
import { makeStyles } from "@mui/styles";

import { useRecoilState } from "recoil";
import { Typography } from "@mui/material";
import { latState, lngState } from "../states/latlongState";
const useStyleDraggable = makeStyles({
  root: {
    background: "rgba(0, 0, 0, 0.5)",
    color: "#fff",
    position: "absolute",
    bottom: "40px",
    left: "10px",
    padding: "5px 10px",
    margin: 0,
    fontSize: "11px",
    lineHeight: "18px",
    borderRadius: "3px",
    display: "none",
  },
});
const useStyles = makeStyles({
  root: {
    position: "absolute",
    top: "10px",
    zIndex: "1",
  },
});
const useStyle = makeStyles({
  root: {
    marginLeft: "70%",
    float: "right",
    position: "absolute",
    top: "10px",
    zIndex: "1",
  },
});

const BaseMap = ({ MapStyles, defaultCenter, zoom }) => {
  const coordinates = useStyleDraggable();
  const classes = useStyles();
  const SearchButton = useStyle();
  const mapRef = React.useRef(null);
  const [map, setMap] = React.useState(null);
  const [lat, setLat] = React.useState("");
  const [lng, setlng] = React.useState("");
  const [latitute, setlatitute] = useRecoilState(latState);
  const [longtitute, setlngtitute] = useRecoilState(lngState);

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

    //draggable
    var marker = new maplibregl.Marker({
      draggable: true,
    })
      .setLngLat([104.91666266871523, 11.541525694098969])
      .addTo(map);

    function onDragEnd() {
      var lngLat = marker.getLngLat();

      setLat(lngLat.lat);
      setlng(lngLat.lng);
      setlatitute(lngLat.lat);
      setlngtitute(lngLat.lng);
    }

    marker.on("dragend", onDragEnd);

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

    map.once("load", (e) => {
      console.log("____Layer___");

      map.loadImage(
        "https://maplibre.org/maplibre-gl-js-docs/assets/custom_marker.png",
        function (error, image) {
          if (error) throw error;
          map.addImage("custom-marker", image);

          map.addSource("places", {
            type: "geojson",
            data: {
              type: "FeatureCollection",
              features: [
                {
                  type: "Feature",
                  properties: {
                    description:
                      '<img src="https://scontent.fpnh11-1.fna.fbcdn.net/v/t39.30808-6/241182091_168427522072744_402217380367789922_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=0debeb&_nc_eui2=AeEFWUt8-X-X1sWTJ0h-oSCotZ7gf5W3BNy1nuB_lbcE3DnlW_UowMSJ82iPVQbj8ShOzQUD2ZqlvFHQ8rbJbmEb&_nc_ohc=lH12MWdERoUAX8k0P-E&_nc_ht=scontent.fpnh11-1.fna&oh=00_AT8nwMxM0DaDSKuniYVrkduoueNFfixcrrhvSJDT_IuoXg&oe=61CEDB54" width="220px" height="150px"></img><br/><strong> La Chou</strong> <p>incredible view and atmosphere that you can’t find anywhere else. One stop for all your favorite foods and drinks.We serve you wholeheartedly with taste and quality.</p>',
                  },
                  geometry: {
                    type: "Point",
                    coordinates: [104.91666266871523, 11.541525694098969],
                  },
                },
                {
                  type: "Feature",
                  properties: {
                    description:
                      '<img src="https://foodbuzz.site/api/v1/files/5D0A563B-07C0-42DA-AE47-0A404825B2DC" width="220px" height="150px"></img><br/><strong> Krosal</strong> <p>incredible view and atmosphere that you can’t find anywhere else. One stop for all your favorite foods and drinks.We serve you wholeheartedly with taste and quality.</p>',
                  },
                  geometry: {
                    type: "Point",
                    coordinates: [104.90187964629374, 11.562827956023085],
                  },
                },
                {
                  type: "Feature",
                  properties: {
                    description:
                      '<img src="https://scontent.fpnh11-1.fna.fbcdn.net/v/t39.30808-6/245346484_2909628385956804_2689408321992097700_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=8bfeb9&_nc_eui2=AeF1aM_-X_jJRrvLapcmmZROD7Wre0f9DWkPtat7R_0Nae_ADHwyhQL7260_TQog11D1h8MY5zfoguR-3SDKJ-6h&_nc_ohc=hk1oWn50pMsAX9U1Np8&tn=HX6z2omfOTSIYI1-&_nc_ht=scontent.fpnh11-1.fna&oh=00_AT_pNHOyMDON1Goy3ZejPcmU6XDV01dBd7fmZbV8L3xtHQ&oe=61CF8CF0" width="220px" height="150px"></img><br/><strong> Cottage Coffee - Sen Sok</strong> <p>incredible view and atmosphere that you can’t find anywhere else. One stop for all your favorite foods and drinks.We serve you wholeheartedly with taste and quality.</p>',
                  },
                  geometry: {
                    type: "Point",
                    coordinates: [104.88188732911193, 11.593113320678762],
                  },
                },
                {
                  type: "Feature",
                  properties: {
                    description:
                      '<img src="https://www.jongnhams.com/uploads/Mobile%20Coffee/store1.jpg" width="220px" height="150px"></img><br/><strong> Mobile Coffee Sen Sok</strong> <p>incredible view and atmosphere that you can’t find anywhere else. One stop for all your favorite foods and drinks.We serve you wholeheartedly with taste and quality.</p>',
                  },
                  geometry: {
                    type: "Point",
                    coordinates: [104.88583077698529, 11.595176057174085],
                  },
                },
                {
                  type: "Feature",
                  properties: {
                    description:
                      '<img src="https://img.theculturetrip.com/wp-content/uploads/2018/04/14324698_1253539384669705_525659971122049721_o.jpg" width="220px" height="150px"></img><br/><strong> Malis Restaurant</strong> <p>incredible view and atmosphere that you can’t find anywhere else. One stop for all your favorite foods and drinks.We serve you wholeheartedly with taste and quality.</p>',
                  },
                  geometry: {
                    type: "Point",
                    coordinates: [104.9294513610565, 11.555090277797781],
                  },
                },
                {
                  type: "Feature",
                  properties: {
                    description:
                      '<img src="https://pix10.agoda.net/hotelImages/4959651/-1/61cdfa157b597a7c02589096ba8cc360.jpg?ca=7&ce=1&s=1024x768" width="220px" height="150px"></img><br/><strong> Hotel Emion Phnom Penh</strong> <p>incredible view and atmosphere that you can’t find anywhere else. One stop for all your favorite foods and drinks.We serve you wholeheartedly with taste and quality.</p>',
                  },
                  geometry: {
                    type: "Point",
                    coordinates: [-77.043444, 38.909664],
                  },
                },
                {
                  type: "Feature",
                  properties: {
                    description:
                      '<img src="" width="220px" height="150px"></img><br/><strong> La Chou</strong> <p>incredible view and atmosphere that you can’t find anywhere else. One stop for all your favorite foods and drinks.We serve you wholeheartedly with taste and quality.</p>',
                  },
                  geometry: {
                    type: "Point",
                    coordinates: [-77.031706, 38.914581],
                  },
                },
                {
                  type: "Feature",
                  properties: {
                    description:
                      '<img src="" width="220px" height="150px"></img><br/><strong> La Chou</strong> <p>incredible view and atmosphere that you can’t find anywhere else. One stop for all your favorite foods and drinks.We serve you wholeheartedly with taste and quality.</p>',
                  },
                  geometry: {
                    type: "Point",
                    coordinates: [-77.020945, 38.878241],
                  },
                },
                {
                  type: "Feature",
                  properties: {
                    description:
                      '<img src="" width="220px" height="150px"></img><br/><strong> La Chou</strong> <p>incredible view and atmosphere that you can’t find anywhere else. One stop for all your favorite foods and drinks.We serve you wholeheartedly with taste and quality.</p>',
                  },
                  geometry: {
                    type: "Point",
                    coordinates: [-77.007481, 38.876516],
                  },
                },
              ],
            },
          });

          // Add a layer showing the places.

          map.addLayer({
            id: "places",
            type: "symbol",
            source: "places",
            layout: {
              "icon-image": "custom-marker",
              "icon-allow-overlap": true,
            },
          });
        }
      );

      // Create a popup, but don't add it to the map yet.
      var popup = new maplibregl.Popup({
        closeButton: false,
        closeOnClick: false,
      });

      map.on("mouseenter", "places", function (e) {
        map.getCanvas().style.cursor = "pointer";

        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = e.features[0].properties.description;
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }
        popup.setLngLat(coordinates).setHTML(description).addTo(map);
      });

      map.on("mouseleave", "places", function () {
        map.getCanvas().style.cursor = "";
        popup.remove();
      });
    });
  }, []);

  return (
    <>
      <div className={classes.root}>
        <PersistentDrawerLeft></PersistentDrawerLeft>
      </div>

      <div style={MapStyles} ref={mapRef}></div>
     
      <Typography>
        {lat} {lng}
      </Typography>
    

      <Typography>{latitute}</Typography>
    </>
  );
};

export default BaseMap;
