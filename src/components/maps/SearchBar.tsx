import React from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";

interface SearchBarParams {
  selectProps: {
    value: any;
    onChange: any;
  };
}

const SearchBar = ({ selectProps }: SearchBarParams): JSX.Element => {
  return (
    <GooglePlacesAutocomplete
      selectProps={selectProps}
      apiKey={process.env.REACT_APP_API_GOOGLE}
    />
  );
};
export default SearchBar;
