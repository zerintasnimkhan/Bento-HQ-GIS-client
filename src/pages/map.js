import MapComponent from "@/components/MapComponent";
import React from "react";
import Sidebar from "../components/SidebarComponent";
import "@/styles/sidebar.module.css";

export default function Map() {
  return (
    <div style={{ display: "flex", overflow: "hidden" }}>
      <div>
        <Sidebar />
      </div>
      <div>
        {/* <h1>MapComponent</h1> */}
        <MapComponent />
      </div>
    </div>
  );
}
