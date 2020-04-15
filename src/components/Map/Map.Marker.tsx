import L from "leaflet";

export const MarkerIcon = new L.Icon({
    iconUrl: require("assets/icons/marker.svg"),
    iconRetinaUrl: require("assets/icons/marker.svg"),
    iconSize: new L.Point(30, 30),
});
