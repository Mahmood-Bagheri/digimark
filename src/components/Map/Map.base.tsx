import React, { useState } from "react";
import { Map, TileLayer, Marker } from "react-leaflet";
import { MarkerIcon } from "./Map.Marker";
import "leaflet/dist/leaflet.css";
import "./Map.scss";

interface Props {}

export const MapControl = (props: Props) => {
    const [center, setCenter] = useState<any>([36.318159, 59.522884]);

    return (
        <Map className="leaflet-map" zoom={13} center={center} zoomControl={false}>
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
            />
            <Marker position={center} icon={MarkerIcon}></Marker>
        </Map>
    );
};
