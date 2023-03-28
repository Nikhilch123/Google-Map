import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import L from "leaflet";
import "./App.css";
import LeafletGeocoder from "./Components/LeafletGeocoder";
import LeafletRoutingMachine from "./Components/LeafletRoutingMachine";

function App() {
  const position = [17.51729268887622, 78.31581893903385];
  return (
    <div className="App">
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

         <LeafletGeocoder />
        <LeafletRoutingMachine />
        
      </MapContainer>
    
    </div>
  );
}

let DefaultIcon = L.icon({
  iconUrl: "icon.jpg",
  iconSize: [25, 41],
   iconAnchor: [10, 41],
   //popupAnchor: [2, -40],
});
L.Marker.prototype.options.icon = DefaultIcon;
export default App;
