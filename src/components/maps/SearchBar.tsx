import React from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const SearchBar = (): JSX.Element => (
  <div>
    <GooglePlacesAutocomplete apiKey={process.env.API_GOOGLE} />
  </div>
);

export default SearchBar;
