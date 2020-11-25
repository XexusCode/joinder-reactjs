import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { LatLng } from "react-google-places-autocomplete/build/GooglePlacesAutocomplete.types";

const containerStyle = {
  width: "100%",
  height: "300px",
};

interface MapViewParams {
  position: LatLng;
  center: LatLng;
}

const MapView = ({ position, center }: MapViewParams) => (
  <LoadScript googleMapsApiKey="AIzaSyDezLhIcYAe7hrj0P3fF9oa6XAnEiHLEqs">
    <GoogleMap
      id="marker"
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
    >
      <Marker label={"evento"} position={position} />
    </GoogleMap>
  </LoadScript>
);

export default React.memo(MapView);
