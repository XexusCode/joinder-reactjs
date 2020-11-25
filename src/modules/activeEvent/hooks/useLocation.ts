import Geocode from "react-geocode";

export const useLocation = (
  location: string
): Promise<{ lng: number; lat: number }> =>
  Geocode.fromAddress(location).then(
    (response) => {
      const { lat, lng } = response.results[0].geometry.location;
      return { lat, lng };
    },
    (error) => {
      return error;
    }
  );
