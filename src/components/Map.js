import React, { useEffect, useState } from "react";

import { MapContainer, TileLayer, useMap, Marker } from "react-leaflet";

const Map = (props) => {
  const [coordinates, setCoordinates] = useState(props.coords);

  useEffect(() => {
    setCoordinates(props.coords);
  }, [props.coords]);
  if (!props.coords || !coordinates) return;

  function MyComponent() {
    const map = useMap();
    map.setView(coordinates, 4);

    return null;
  }

  return (
    <MapContainer
      className="map"
      center={coordinates}
      zoom={4}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={coordinates}></Marker>
      <MyComponent />
    </MapContainer>
  );
};

export default Map;
