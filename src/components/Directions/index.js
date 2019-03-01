import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

import { View } from 'react-native';
// import styles from './styles';

const Directions = ({ destination, origin, onReady }) => (
    <MapViewDirections
        origin={origin}
        destination={destination} 
        onReady={onReady}
        apikey="AIzaSyA2_mEuDdFzxj1_QJxBGA0skCtN2dRJ1bA"
        strokeWidth={3}
        strokeColor="#222"
    />
);

export default Directions;
