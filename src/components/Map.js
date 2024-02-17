"use-client";
import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { useAppSelector } from "../app/hooks";
import "../styles/Map.module.css";
import styles from "../styles/icons.module.css";
import RestaurantIcon from "./icons/Restaurant.jsx";
import RiderIcon from "./icons/Rider";
import CustomerIcon from "./icons/Customer";
import HubIcon from "./icons/hub";

// import

//import { Marker } from "antd";

//import "./MapComponent.css"; // Import your CSS file for styling

const iconDict = {
  restaurant: <RestaurantIcon />,
  rider: <RiderIcon />,
  customer: <CustomerIcon />,
  hub: <HubIcon />,
};

const MapComponent = () => {
  
  // const [visible, setVisible] = useState({
  //   latitude: 37.7749,
  //   longitude: -122.4194,
  //   zoom: 12,
  //   width: "100%",
  //   height: "100%",
  // });
  const markers = useAppSelector((state) => state.selectMap.filteredMarkers);
  //console.log(markers);

  const markerPosition = {
    latitude: 37.7749,
    longitude: -122.4194,
  };

  return (
    <ReactMapGL
      initialViewState={{
        latitude: 51.51974,
        longitude: -0.094021,
        zoom: 12,
        bearing: 0,
        pitch: 0,
      }}
      mapStyle="mapbox://styles/mapbox/outdoors-v12"
      mapboxAccessToken={
        "pk.eyJ1Ijoibm9lbGFsYW0iLCJhIjoiY2xwNXptZWh0MWo4cTJpczRnOTR2emxxZSJ9.2ysg9xmzMsMmBzuFmiO80A"
      }
    >
      {markers.map((marker) => (
        <Marker longitude={marker.lng} latitude={marker.lat}>
          {iconDict[marker.type]}
        </Marker>
      ))}
      {/* <Marker longitude={-0.094021} latitude={51.51974}> */}
    </ReactMapGL>
  );
};

export default MapComponent;
