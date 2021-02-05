import React from 'react';
import GoogleMapReact from 'google-map-react';

export default function Map() {
    const defaultProps = {
        center: {
            lat: 35.23085282165942,
            lng: -80.84217989672665
        },
        zoom: 11
    };

    const LocationPin = ({ text }) => (
        <div className="flex items-center justify-center text-red-300">
            <img src="/mapmarker.png" className="h-4 w-4" />
            <p className="pin-text text-lg">{text}</p>
        </div>
    )
    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '300px', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: '' }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
            </GoogleMapReact>
            {/*<LocationPin*/}
            {/*    lat={defaultProps.center.lat}*/}
            {/*    lng={defaultProps.center.lng}*/}
            {/*    text="Somewhere around here!"*/}
            {/*/>*/}
        </div>
    );
}
