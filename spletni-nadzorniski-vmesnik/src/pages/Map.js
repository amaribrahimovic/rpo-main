import React, { useEffect, useRef, useState } from 'react';
import '../css/map.css';
import '../css/general-dashboard.css';
import secondaryLogo from '../res/secondary-logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { GoogleMap, Marker, InfoWindow, useJsApiLoader } from '@react-google-maps/api';

//Firebase
import { getDatabase, ref, set, get } from 'firebase/database';
import { auth } from '../firebase'
import { signOut } from 'firebase/auth';

const containerStyle = {
    width: '100%', // Make the map container full width
    height: '100vh', // Make the map container full height
};

const center = {
    lat: 46.554831012457626,
    lng: 15.64609419269028
};

const markers = [
    { id: 1, lat: 46.554831012457626, lng: 15.64609419269028, name: 'Marko Kurnik', deviceName: 'Samsung Galaxy S23', batteryPercentage: 80 },
];

const Map = () => {
    const navigate = useNavigate();
    const [selectedMarker, setSelectedMarker] = useState(null);
    const [crud, setCrud] = useState("");
    const [crud2, setCrud2] = useState("");
    const [crudLink, setCrudLink] = useState("");
    const [crudLink2, setCrudLink2] = useState("");
    const [crud3, setCrud3] = useState("");
    const [crudLink3, setCrudLink3] = useState("");

    const user = auth.currentUser;

    if (user) {
        console.log("User signed in");
    } else {
        navigate("/login");
    }

    const userId = user.uid;
    console.log(userId);


    const db = getDatabase();
    const userRef = ref(db, `uporabnik/${userId}`);

    get(userRef)
        .then(snapshot => {
            const userData = snapshot.val();

            if (userData && userData.admin === true) {
                console.log("User is an admin.");
                setCrud("Users");
                setCrudLink("/users");
                setCrud2("Admins");
                setCrudLink2("/admins");
                setCrud3("Groups");
                setCrudLink3("/groups");
            } else {
                console.log("User is not an admin.");
            }
        })
        .catch(error => {
            console.error("Error fetching user data:", error);
        });

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyCV1mwlJKZLJa0o_dIvssaDKYAq5Mv3waw"
    });

    const [map, setMap] = React.useState(null);

    const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        setMap(map)
    }, []);

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, []);

    const handleLogout = () => {
        signOut(auth).then(() => {
            navigate('/');
        }).catch((error) => {
            console.log(error);
        });
    }

    return isLoaded ? (
        <div>
            <div className='bannerDash'>
                <Link to="/home"><img src={secondaryLogo} alt="Logo" className="logoDash" /></Link>
                <div className='bannerDashLinksTop'>
                    <button><Link to="/map">Map</Link></button>
                    <button><Link to={crudLink}>{crud}</Link></button>
                    <button><Link to={crudLink2}>{crud2}</Link></button>
                    <button><Link to={crudLink3}>{crud3}</Link></button>
                    <button><Link to="/">Notifications</Link></button>
                    <button><Link to="/">Devices</Link></button>
                </div>
                <div className='bannerDashLinksBottom'>
                    <button><Link to="/">Settings</Link></button>
                    <button onClick={() => handleLogout()}><div id="ducktape">Logout</div></button>
                </div>
            </div>
            <div className='GoogleMaps' style={containerStyle}>
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    onLoad={onLoad}
                    zoom={14}
                    onUnmount={onUnmount}
                    options={{ // Specify map options
                        mapTypeControl: true,
                        mapTypeControlOptions: {
                            position: window.google.maps.ControlPosition.TOP_RIGHT, // Adjust the position as needed
                        },
                    }}
                >
                    {markers.map(({ id, lat, lng, name, deviceName, batteryPercentage }) => (
                        <Marker
                            key={id}
                            position={{ lat, lng }}
                            onClick={() => setSelectedMarker({ id, lat, lng, name, deviceName, batteryPercentage })}
                        />
                    ))}
                    {selectedMarker && (
                        <InfoWindow
                            position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
                            onCloseClick={() => setSelectedMarker(null)}
                            options={{ pixelOffset: new window.google.maps.Size(0, -30) }} // Adjust the offset as needed
                        >
                            <div>
                                <p>Name: <b>{selectedMarker.name}</b></p>
                                <p>Device: {selectedMarker.deviceName}</p>
                                <p>Battery: {selectedMarker.batteryPercentage}%</p>
                            </div>
                        </InfoWindow>
                    )}
                    { /* Child components, such as markers, info windows, etc. */}
                    <></>
                </GoogleMap>
            </div>
        </div>
    ) : <></>
}

export default Map