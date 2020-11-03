import React from "react";
import GoogleMapReact from "google-map-react";

const MapView = () => {
  const defaultProps = {
    center: { lat: 39.9945711, lng: -1.0689003 },
    zoom: 14,
  };
  return (
    <div style={{ height: "325px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: `${process.env.REACT_APP_API_GOOGLE}` }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      />
    </div>
  );
};

export default MapView;
