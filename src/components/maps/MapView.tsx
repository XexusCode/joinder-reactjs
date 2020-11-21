import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "300px",
  height: "300px",
};

const MapView = ({ position, center }: any) => (
  <LoadScript googleMapsApiKey="AIzaSyDezLhIcYAe7hrj0P3fF9oa6XAnEiHLEqs">
    <GoogleMap
      id="marker"
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
    >
      <Marker position={position} />
    </GoogleMap>
  </LoadScript>
);

export default React.memo(MapView);
