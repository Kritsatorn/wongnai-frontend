import trips from "../json/trips.json";
// import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import TripCard from "../components/TripCard";
export default function HomePage() {
  const trip = trips.trips[0];
  return (
    <div className="w-full font-prompt ">
      <header className=" w-full ">
        <h1 className="pt-12 py-3 text-6xl text-blue-400 text-center leading-relaxed ">
          เที่ยวไหนดี
        </h1>
        <SearchBar />
      </header>
      <div className="mt-3">
        <TripCard trip={trip} />
      </div>
    </div>
  );
}
