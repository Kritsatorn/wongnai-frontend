import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

const ContentTripCard = ({ title, description, url }) => {
  return (
    <>
      <a
        className="font-black text-2xl"
        href={url}
        rel="noreferrer"
        target="_blank"
      >
        {title}
      </a>
      <p className="mt-2 text-center md:text-left font-medium text-gray-400 tracking-tighter  leading-relaxed">
        {description.substring(0, 101) + "... "}
        <a
          className="inline-block text-blue-300  underline  "
          href={url}
          rel="noreferrer"
          target="_blank"
        >
          อ่านต่อ
        </a>
      </p>
    </>
  );
};

const TagsTripCard = ({ tag, isLast }) => {
  const { addText } = useContext(SearchContext);
  return (
    <span>
      {isLast ? "และ   " : null}
      <span
        className="underline break-words whitespace-nowrap cursor-pointer"
        onClick={() => addText(tag)}
      >
        {tag}
      </span>
      {isLast ? null : "   "}
    </span>
  );
};

const SmallThreePhotos = ({ photos, eid }) => {
  return (
    <div className="flex mt-6 md:pr-4 justify-between">
      {photos.map((photo, i) => {
        if (i === 0) return null;
        else {
          return (
            <div
              key={eid + "_" + i}
              className="w-24 h-24 lg:w-28 lg:h-28 overflow-hidden"
            >
              <img
                className="h-full w-full object-cover rounded-3xl "
                src={photo}
                alt={i}
              />
            </div>
          );
        }
      })}
    </div>
  );
};

const TripCard = ({ trip }) => {
  return (
    <div className="w-full md:w-8/12 max-w-screen-sm mx-auto py-4 px-3 md:px-0 md:grid md:grid-cols-3 md:pace-x-6">
      {/* Big Photo Section */}
      <div className="px-3 pt-3">
        <img
          className="h-full w-full object-cover rounded-3xl "
          src={trip.photos[0]}
          alt="main-tripImage"
        />
      </div>
      {/* Contents Section */}
      <div className="md:col-span-2 pt-4 px-3">
        <ContentTripCard
          title={trip.title}
          description={trip.description}
          url={trip.url}
        />

        {/* tags */}
        <p className=" mt-2 text-xs text-center md:text-left  text-gray-400 tracking-tighter">
          หมวด{"  -  "}
          {trip.tags.map((tag, i, arr) => (
            <TagsTripCard
              key={i + "_" + tag}
              tag={tag}
              isLast={arr.length - 1 === i}
            />
          ))}
        </p>

        {/* small imgs */}
        <SmallThreePhotos photos={trip.photos} eid={trip.eid} />
      </div>
    </div>
  );
};
export default TripCard;
