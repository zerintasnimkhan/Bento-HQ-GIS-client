import MapComponent from "../components/Map";
import React from "react";
import Sidebar from "../components/SidebarComponent";
import "../styles/sidebar.module.css";
import "mapbox-gl/dist/mapbox-gl.css";
export default function Map() {
  return (
    <div style={{ display: "flex", overflow: "hidden" }}>
      <div>
        <Sidebar />
      </div>
      <div style={{ width: "85vw", height: "100vh" }}>
        {/* <h1>MapComponent</h1> */}
        <MapComponent />
      </div>
    </div>
  );
}
