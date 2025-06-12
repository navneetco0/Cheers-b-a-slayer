import { MapPin, Search } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [searchLocation, setSearchLocation] = useState("Mumbai");
  return (
    <section className="bg-gradient-to-r from-purple-900 via-blue-900 to-indigo-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Discover Amazing Events
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Find the perfect events around you and create unforgettable memories
          with Cheers be a Slayer
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 bg-white rounded-lg p-2">
            <div className="flex-1 flex items-center">
              <Search className="w-5 h-5 text-gray-400 ml-3" />
              <input
                type="text"
                placeholder="Search events..."
                className="w-full px-4 py-3 text-gray-900 focus:outline-none"
              />
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 text-gray-400 ml-3" />
              <select
                className="px-4 py-3 text-gray-900 focus:outline-none bg-transparent"
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
              >
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
                <option value="Bangalore">Bangalore</option>
                <option value="Chennai">Chennai</option>
                <option value="Kolkata">Kolkata</option>
              </select>
            </div>
            <button className="bg-yellow-500 text-black px-8 py-3 rounded-md hover:bg-yellow-600 transition-colors font-medium">
              Search
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
