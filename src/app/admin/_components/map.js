// "use client";

// import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

// const containerStyle = {
//   width: "80%",
//   height: "400px",
// };

// const GoogleMaps = ({ lat, lon }) => {
//   // Ensure lat and lon are numbers
//   const latitude = Number(lat);
//   const longitude = Number(lon);

//   if (isNaN(latitude) || isNaN(longitude)) {
//     return <p>Error: Invalid latitude or longitude</p>;
//   }

//   const center = { lat: latitude, lng: longitude };

//   return (
//     <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={13}>
//       <Marker position={center} />
//     </GoogleMap>
//   );
// };

// export default GoogleMaps;
"use client";

import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  minHeight: "300px",
};

// Keep libraries array stable
const GOOGLE_LIBRARIES = ["places"];

const GoogleMaps = ({ lat, lon }) => {
  const { isLoaded, loadError } = useJsApiLoader({
    id: "script-loader",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY || "",
    libraries: GOOGLE_LIBRARIES,
  });

  // Ensure lat and lon are numbers
  const latitude = Number(lat);
  const longitude = Number(lon);

  if (loadError) {
    return <p className="text-red-500">Error loading map</p>;
  }

  if (!isLoaded) {
    return <p className="text-gray-500">Loading map...</p>;
  }

  if (isNaN(latitude) || isNaN(longitude)) {
    return <p className="text-red-500">Error: Invalid latitude or longitude</p>;
  }

  const center = { lat: latitude, lng: longitude };

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={12}>
      <Marker position={center} />
    </GoogleMap>
  );
};

export default GoogleMaps;
