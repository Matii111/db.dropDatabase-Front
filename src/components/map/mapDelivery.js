import React from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from "leaflet"

const position = [-33.434828, -70.6160545, 19]
const markerIcon = L.icon({
    iconUrl: './uramaki.ico',
    iconSize: [30, 30]
});
export default function MapDelivery() {
    return (
        <MapContainer center={position} zoom={20} style={{ width: '100%', height: '100%' }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={markerIcon}>
            </Marker>
        </MapContainer>

    )
}
