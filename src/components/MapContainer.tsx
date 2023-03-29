import React, { useEffect, useState } from "react";
import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";
import { GoogleApiWrapper, IProvidedProps } from "@react-google-maps/api";

interface MapContainerProps {
  comics: Comic[];
  center: {
    lat: number;
    lng: number;
  };
}

interface Comic {
  id: number;
  title: string;
  lat: number;
  lng: number;
}

const MapContainer: React.FC<MapContainerProps> = ({ comics, center }) => {
  const [selectedComic, setSelectedComic] = useState<Comic | null>(null);

  const handleMarkerClick = (comic: Comic) => {
    setSelectedComic(comic);
  };

  const handleInfoWindowClose = () => {
    setSelectedComic(null);
  };

  return (
    <GoogleMap
      mapContainerStyle={{
        width: "100%",
        height: "100%",
      }}
      zoom={15}
      center={center}
    >
      {comics.map((comic) => (
        <Marker
          key={comic.id}
          position={{ lat: comic.lat, lng: comic.lng }}
          onClick={() => handleMarkerClick(comic)}
        />
      ))}
      {selectedComic && (
        <InfoWindow
          position={{ lat: selectedComic.lat, lng: selectedComic.lng }}
          onCloseClick={handleInfoWindowClose}
        >
          <div>
            <h2>{selectedComic.title}</h2>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

const WrappedMapContainer = GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY || '',
})(MapContainer);

export default WrappedMapContainer;
