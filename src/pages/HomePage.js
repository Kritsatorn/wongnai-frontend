import { useContext } from "react";
import SearchBar from "../components/SearchBar";
import TripCard from "../components/TripCard";
import { SearchContext } from "../context/SearchContext";
export default function HomePage() {
  const { tripData } = useContext(SearchContext);
  return (
    <div className="w-full font-prompt ">
      <header className=" w-full ">
        <h1 className="pt-12 py-3 text-6xl text-blue-400 text-center leading-relaxed ">
          เที่ยวไหนดี
        </h1>
        <SearchBar />
      </header>
      <div className="mt-3">
        {tripData
          ? tripData.map((trip) => <TripCard key={trip.eid} trip={trip} />)
          : "Not FOUND"}
      </div>
    </div>
  );
}
