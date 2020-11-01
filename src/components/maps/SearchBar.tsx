import React from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const SearchBar = () => {
  return <GooglePlacesAutocomplete apiKey={process.env.REACT_APP_API_GOOGLE} />;
};
export default SearchBar;
