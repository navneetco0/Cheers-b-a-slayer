import { onlineEvents } from "../../../static/mockdata";
import { EventCard } from "../../../components";

const OnlineEvenet = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold mb-8">
        Discover Best of Online Events
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {onlineEvents.map((event) => (
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

export default OnlineEvenet;
