import React from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

const SearchBar = (): JSX.Element => (
  <div>
    <GooglePlacesAutocomplete
      apiKey={"AIzaSyDezLhIcYAe7hrj0P3fF9oa6XAnEiHLEqs"}
    />
  </div>
);

export default SearchBar;
