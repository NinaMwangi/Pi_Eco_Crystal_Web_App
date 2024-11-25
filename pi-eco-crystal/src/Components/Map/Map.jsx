import React, { useState, useEffect, useRef } from 'react'
import { GoogleMap, LoadScript, Marker} from '@react-google-maps/api'
import { getFirestore, getDocs, setDoc, Timestamp } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';


const mapContainerStyle = {
    width: '100%',
    height: '400px',
};

const defaultCenter = {
    lat: -1.292066,
    lng: 36.821945
};

const Map =() => {
    const [userLocation, setUserLocation] = useState(null);
    const [error, setError] = useState(null);
    const [facilities, setFacilities] = useState([]);
    const [selectedFacility, setSelectedFacility] = useState(null);
    const mapRef = useRef(null);

    useEffect(() => {
        const fetchFacilities = async () => {
          try {
            const querySnapshot = await getDocs(collection(db, 'facilities'));
            const facilitiesData = querySnapshot.docs.map(doc => doc.data());
            setFacilities(facilitiesData);
          } catch (error) {
            console.error("Error fetching facilities data:", error);
          }
        };
    
        fetchFacilities();
      }, []);

    useEffect(() => {
        const getUserLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const {latitude, longitude } = position.coords;
                        setUserLocation({ lat: latitude, lng:longitude});

                        saveLocationToFirebase(latitude, longitude);
                    },
                    (error) => {
                        console.error('Error getting geolocation', error);
                        setUserLocation({lat: -1.292066, lng: 36.821945});
                    }
                );
            } else {
                setError('Geolocation is not supported by this browser.');
                setUserLocation({lat: -1.292066, lng: 36.821945});
            }
        };
        getUserLocation();
    }, []);


useEffect(() => {
    if (userLocation && mapRef.current) {
      const map = mapRef.current;

      // Create an AdvancedMarkerElement
      const marker = new google.maps.marker.AdvancedMarkerElement({
        position: userLocation,
        map: map,
        title: 'You are here',
      });

      marker.current = marker;
    }
  }, [userLocation]);

  return (
    <div className="map">
      <LoadScript googleMapsApiKey='AIzaSyAmx9DAd1bxzCywh23dGmc6D9YRnBgAZXE'>
          <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={userLocation || defaultCenter}
              zoom={12}>
              
              {userLocation && (<Marker position={userLocation} title='Your Location'/>)}
              {facilities.map((facility, index) => (
            <Marker
              key={index}
              position={{ lat: facility.latitude, lng: facility.longitude }}
              title={facility.name}
              onClick={() => setSelectedFacility(facility)} // Set selected facility to show in InfoWindow
            />
          ))}
          </GoogleMap>
      </LoadScript>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>  
  );
};

export default Map