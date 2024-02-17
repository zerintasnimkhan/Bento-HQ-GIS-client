"use-client";
import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { filterMarkers } from "../features/selectMap/selectMap-slice";
import "../styles/Map.module.css";
import styles from "../styles/icons.module.css";
import RestaurantIcon from "./icons/Restaurant.jsx";
import RiderIcon from "./icons/Rider";
import CustomerIcon from "./icons/Customer";
import HubIcon from "./icons/hub";


const iconDict = {
  restaurant: <RestaurantIcon />,
  rider: <RiderIcon />,
  customer: <CustomerIcon />,
  hub: <HubIcon />,
};

const MapComponent = () => {
  const dispatch = useAppDispatch();
  const type = useAppSelector((state) => state.selectMap.type);
  const markers = useAppSelector((state) => state.selectMap.filteredMarkers);
  const [selectedMarker, setSelectedMarker] = useState<markers | null>(null);
  React.useEffect(() => {
    dispatch(filterMarkers());
  }, [dispatch, type]);

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
      {/* {markers.map((marker) => (
        <Marker longitude={marker.lng} latitude={marker.lat}>
        {iconDict[marker.type]}
        // {type === "restaurant" && <RestaurantIcon />}
        {/* // <Marker
        //   key={`${marker.lat}-${marker.lng}`}
        //   longitude={marker.lng}
        //   latitude={marker.lat}
        // >
        //   {iconDict[marker.type]} */}
        {/* </Marker>
      ))}
      {/* <Marker longitude={-0.094021} latitude={51.51974}> */}

{markers
        .filter((marker) => (type === "all" ? true : marker.type === type))
        .map((marker) => (
          <Marker
            key={`${marker.lat}-${marker.lng}`}
            longitude={parseFloat(marker.lng)}
            latitude={parseFloat(marker.lat)}
          >
            {iconDict[marker.type]}
          </Marker>
        ))}

      {selectedMarker && (
        <div className="selected-marker-info">
          <p>Type: {selectedMarker.type}</p>
          {/* Add additional information rendering if needed */}
        </div>
      )}

      {/* Conditional rendering for Rider markers */}
      {type === "rider" && (
        <div className="rider-markers-info">
          <h2>Rider Markers:</h2>
          {markers
            .filter((marker) => marker.type === "rider")
            .map((riderMarker) => (
              <p key={`${riderMarker.lat}-${riderMarker.lng}`}>
                Latitude: {riderMarker.lat}, Longitude: {riderMarker.lng}
              </p>
            ))}
        </div>
      )}
    </ReactMapGL>
  );
};

export default MapComponent;
