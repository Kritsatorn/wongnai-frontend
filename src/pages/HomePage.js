import trips from "../json/trips.json";
import { useEffect, useState } from "react";
export default function HomePage() {
  console.log(trips);
  const trip = trips.trips[0];
  console.log(trip);

  const [textInput, setTextInput] = useState("");
  useEffect(() => {}, []);

  return (
    <div className="w-full font-prompt ">
      <header className=" w-full ">
        <h1 className="pt-12 text-6xl text-blue-400  text-center py-3">
          เที่ยวไหนดี
        </h1>
        {/* <p>Search bar</p> */}
        <form className=" w-7/12 mx-auto border-blue-400 border-b-2 ">
          <input
            className="w-full focus:outline-none  text-center "
            type="text"
            value={textInput}
            onChange={(event) => setTextInput(event.target.value)}
          />
        </form>
      </header>
      <div className="mt-3">
        <div className="w-8/12 max-w-screen-sm mx-auto py-4 grid grid-cols-3 space-x-6  relative">
          <div className="px-3 pt-3">
            <img
              className="object-cover h-full w-full rounded-3xl "
              src={trip.photos[0]}
              alt="pic"
            />
          </div>

          <div className="col-span-2 pt-4">
            <h1 className="text-2xl font-black">
              {/* คู่มือเที่ยวเกาะช้าง กิน เที่ยว พักที่ไหนดี? อ่านจบครบที่เดียว! */}
              {trip.title}
            </h1>
            <p className="mt-2 tracking-tighter  leading-relaxed  font-medium text-gray-400">
              {trip.description.substring(0, 101) + "... "}

              <a
                className="inline-block underline  text-blue-300 "
                href={trip.url}
              >
                อ่านต่อ
              </a>
            </p>
            {/* tags */}
            <div className="mt-2">
              <p className="text-xs tracking-tighter  text-gray-400">
                หมวด{"  -  "}
                {trip.tags.map((tag, i, arr) => {
                  if (arr.length - 1 === i) {
                    return (
                      <>
                        และ {"   "}
                        <span className="underline whitespace-nowrap">
                          {tag}
                        </span>
                      </>
                    );
                  } else {
                    return (
                      <>
                        <span className="underline break-words whitespace-nowrap">
                          {tag}
                        </span>
                        {"   "}
                      </>
                    );
                  }
                })}
              </p>
            </div>
            {/* imgs */}
            <div className="flex mt-6 pr-4 justify-between">
              {trip.photos.map((photo, i) => {
                if (i === 0) return null;
                else {
                  return (
                    <div key={i} className="w-28 h-28  overflow-hidden">
                      <img
                        className="h-full w-full object-cover rounded-3xl "
                        src={photo}
                        alt="x1"
                      />
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
