"use-client";
import React, { useState } from "react";
import Map, { Marker } from "react-map-gl";
import "@/styles/Map.module.css"
//import { Marker } from "antd";

//import "./MapComponent.css"; // Import your CSS file for styling

const MapComponent = () => {
  // const [visible, setVisible] = useState({
  //   latitude: 37.7749,
  //   longitude: -122.4194,
  //   zoom: 12,
  //   width: "100%",
  //   height: "100%",
  // });

  const [viewport, setViewport] = useState({
    width: "100%",
    height: 400,
    latitude: 37.7749,
    longitude: -122.4194,
    zoom: 12,
  });

  const markerPosition = {
    latitude: 37.7749,
    longitude: -122.4194,
  };

  return (
    <Map
    style={{width:"85vw", height:"100vh"}}
      initialViewState={{
        latitude: 24.904371,
        longitude: 91.892136,
        zoom: 12,
        bearing: 0,
        pitch: 0,
      }}
      mapStyle="mapbox://styles/mapbox/outdoors-v12"
      mapboxAccessToken={
        "pk.eyJ1Ijoibm9lbGFsYW0iLCJhIjoiY2xwNXptZWh0MWo4cTJpczRnOTR2emxxZSJ9.2ysg9xmzMsMmBzuFmiO80A"
      }
    ></Map>
  );
};

export default MapComponent;
