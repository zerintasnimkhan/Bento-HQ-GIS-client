"use-client";
import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import {
  fetchMarkersFromJson,
  updateType,
} from "../features/selectMap/selectMap-slice.ts";
import "../styles/Map.module.css";
import styles from "../styles/icons.module.css";
import RestaurantIcon from "./icons/Restaurant.jsx";
import RiderIcon from "./icons/Rider";
import CustomerIcon from "./icons/Customer";
import HubIcon from "./icons/Hub.jsx";
import filterMarkers from "../features/selectMap/selectMap-slice.ts";

const iconDict = {
  restaurant: <RestaurantIcon />,
  rider: <RiderIcon />,
  customer: <CustomerIcon />,
  hub: <HubIcon />,
};

const MapComponent = () => {
  const dispatch = useAppDispatch();
  const type = useAppSelector((state) => state.selectMap?.type || "");
  const allMarkers = useAppSelector((state) => state.selectMap.allMarkers);
  const filteredMarkers = useAppSelector(
    (state) => state.selectMap.filteredMarkers
  );

  useEffect(() => {
    dispatch(fetchMarkersFromJson());
    dispatch(updateType(type));
    //dispatch(selectedMarkers)
  }, []);

  // useEffect (() => {
  //   if(type) {
  //     // dispatch(updateType(type))
  //     dispatch(filterMarkers())
  //   }
  // }, [type])

  // const markerPosition = {
  //   latitude: 37.7749,
  //   longitude: -122.4194,
  // };

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
        "pk.eyJ1Ijoibm9lbGFsYW05OTk5IiwiYSI6ImNsbzEyZHd5MTAzM3kydHBtamE3djluN28ifQ.KPPVnkZ0mpaF5D0AIU635A"
      }
    >
      {Array.isArray(allMarkers) &&
        !type &&
        allMarkers.map((marker) => (
          <Marker longitude={marker.lng} latitude={marker.lat}>
            {iconDict[marker.type]}
          </Marker>
        ))}
      {Array.isArray(filteredMarkers) &&
        type &&
        filteredMarkers.map((marker) => (
          <Marker longitude={marker.lng} latitude={marker.lat}>
            {iconDict[marker.type]}
          </Marker>
        ))}
      {/* <Marker longitude={-0.094021} latitude={51.51974}> */}
    </ReactMapGL>
  );
};

export default MapComponent;
