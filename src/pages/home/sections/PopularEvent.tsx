import { EventCard } from "../../../components";
import { events } from "../../../static/mockdata";

const PopularEvent = () => {
  return (
    <section className="mb-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">Popular Events in Mumbai</h2>
        <div className="flex space-x-2">
          <button className="px-3 py-1 bg-gray-700 text-white rounded text-sm hover:bg-gray-600">
            All
          </button>
          <button className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm hover:bg-gray-700">
            Today
          </button>
          <button className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm hover:bg-gray-700">
            Tomorrow
          </button>
          <button className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm hover:bg-gray-700">
            This weekend
          </button>
          <button className="px-3 py-1 bg-gray-800 text-gray-300 rounded text-sm hover:bg-gray-700">
            Free
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {events.slice(0, 6).map((event) => (
          <EventCard key={event.id} event={event} />
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

export default PopularEvent;
