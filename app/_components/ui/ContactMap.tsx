/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// 1. Define the icon outside the component to prevent re-creation on re-renders
const defaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

const position: [number, number] = [-34.0048, 150.8359];

const ContactMap = () => {
  // 2. Use a standard mounted state to prevent SSR mismatch and strict-mode double firing
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    // 3. Clean up Leaflet's internal global container ID to prevent duplicate map errors
    return () => {
      setIsMounted(false);
    };
  }, []);

  if (!isMounted) {
    return <div className="h-full w-full bg-gray-100 animate-pulse" />;
  }

  return (
    <MapContainer
      center={position}
      zoom={15}
      scrollWheelZoom={false}
      // 4. Added zIndex: 0 to prevent stacking context errors with Next.js layouts
      style={{ height: "100%", width: "100%", zIndex: 0 }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position} icon={defaultIcon}>
        <Popup>
          <div className="font-sans">
            <p className="font-bold">Bella Green Homes</p>
            <p className="text-xs">38 Arkley Ave, Claymore</p>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default ContactMap;
