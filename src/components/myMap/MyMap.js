import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MyMap = () => {
  const position = [55.751244, 37.618423]; // Координаты Москвы

  return (
    <MapContainer center={position} zoom={10} style={{ height: "500px", width: "100%" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
        <Popup>Москва — столица России</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MyMap;
