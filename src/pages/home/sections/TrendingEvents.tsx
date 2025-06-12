import { EventCard } from "../../../components";
import { trendingEvents } from "../../../static/mockdata";

const TrendingEvents = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-8">
        Trending Events around the World
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {trendingEvents.map((event) => (
          <EventCard key={`trending-${event.id}`} event={event} />
        ))}
      </div>

      <div className="text-center">
        <button className="px-8 py-3 border border-gray-600 text-white rounded hover:bg-gray-800 transition-colors">
          Load More
        </button>
      </div>
    </section>
  );
};

export default TrendingEvents;
