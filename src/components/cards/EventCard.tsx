import type { EventType } from "../../types/event.types";
import { Clock, Heart, MapPin, Share2, Star, Users } from "lucide-react";

const EventCard = ({
  event,
  showTrendingBadge = false,
}: {
  event: EventType;
  showTrendingBadge?: boolean;
}) => {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 relative">
      {showTrendingBadge && event.isTrending && (
        <div className="absolute top-2 left-2 bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-bold z-10">
          Trending
        </div>
      )}
      <div className="absolute top-2 right-2 z-10 flex gap-2">
        <button className="bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70 transition-all">
          <Heart className="w-4 h-4 text-white" />
        </button>
        <button className="bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-70 transition-all">
          <Share2 className="w-4 h-4 text-white" />
        </button>
      </div>

      <div className="relative h-48 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
          <div className="flex items-center gap-2 text-white text-sm">
            <div className="bg-yellow-500 text-black px-2 py-1 rounded font-bold">
              {event.date}
            </div>
            <Clock className="w-4 h-4" />
            <span>{event.time}</span>
          </div>
        </div>
      </div>

      <div className="p-4">
        <h3 className="text-white font-semibold mb-2 line-clamp-2">
          {event.title}
        </h3>

        <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
          <MapPin className="w-4 h-4" />
          <span>{event.location}</span>
          {event.isOnline && (
            <span className="bg-green-600 text-white px-2 py-1 rounded-full text-xs">
              Online
            </span>
          )}
        </div>

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-white text-sm font-medium">
              {event.rating}
            </span>
            <span className="text-gray-400 text-sm">
              ({event.attendees} going)
            </span>
          </div>
          <div className="text-yellow-500 font-bold">{event.price}</div>
        </div>

        <div className="flex items-center justify-between">
          <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded-full text-xs">
            {event.category}
          </span>
          <div className="flex items-center gap-1 text-gray-400 text-sm">
            <Users className="w-4 h-4" />
            <span>{event.attendees}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
