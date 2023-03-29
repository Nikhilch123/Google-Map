import React, { useEffect } from "react";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import { useMap } from "react-leaflet";


const LeafletRoutingMachine = () => {
  const map = useMap();
  let DefaultIcon = L.icon({
   iconUrl: "icon.jpg",
    iconSize: [25, 30 ],
  });
  useEffect(() => {
    var marker1 = L.marker([17.51729268887622, 78.31581893903385], { icon: DefaultIcon }).addTo(
      map
    );
    map.on("click", function (e) {
      L.marker([e.latlng.lat, e.latlng.lng]).addTo(map);
      L.Routing.control({
        waypoints: [
          L.latLng(17.51729268887622, 78.31581893903385),
          L.latLng(e.latlng.lat, e.latlng.lng),
        ],
        lineOptions: {
          styles: [
            {
              color: "green",
              weight: 4,
              opacity: 0.7,
            },
          ],
        },
        routeWhileDragging: false,
        geocoder: L.Control.Geocoder.nominatim(),
        addWaypoints: false,
        draggableWaypoints: false,
        fitSelectedRoutes: true,
        showAlternatives: true,
      })
//         .on("routesfound", function (e) {
//           e.routes[0].coordinates.forEach((c, i) => {
//             setTimeout(() => {
//               marker1.setLatLng([c.lat, c.lng]);
//             }, 1000 * i);
//           });
//         })
        .addTo(map);
    });
  }, []);
  return null;
  
};

export default LeafletRoutingMachine;
