import { Icon } from 'leaflet'
import markerIconPng from "leaflet/dist/images/marker-icon.png"


import React from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'


export default function Map() {
    const position = [32.07401433379777,34.78197648879961]
    return (
        <MapContainer center={position} zoom={12} scrollWheelZoom={false}>
            <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={new Icon({iconUrl:markerIconPng, iconSize:[25, 41] ,iconAnchor: [12, 0]})}>
            <Popup>
            <span><i style={{fontSize: "37px", color: "#e64723"}}className="fas fa-spa"></i></span>
            <span><p><span style={{fontWeight: "bold"}}>Ibn gabirol 22</span><br/>
              Come visit to see where the magic happens</p></span>
            </Popup>
          </Marker>
          
        </MapContainer>
    )
}