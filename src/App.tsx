import { useState } from "react";
import {
  Search,
  MapPin,
  Clock,
  Users,
  Star,
  Heart,
  Share2,
  Music,
  Camera,
  Gamepad2,
  Palette,
  Utensils,
  Briefcase,
} from "lucide-react";
import "./App.css";
import logo from "./assets/logo.webp";
import apple from "./assets/apple.png";
import playStore from "./assets/play.svg";

type EventType = {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  price: string;
  image: string;
  rating: number;
  attendees: number;
  category: string;
  isOnline: boolean;
  isTrending?: boolean;
};

const App = () => {
  const [searchLocation, setSearchLocation] = useState("Mumbai");

  const categories = [
    { id: 1, name: "Music", icon: Music, color: "bg-purple-600" },
    { id: 2, name: "Photography", icon: Camera, color: "bg-blue-600" },
    { id: 3, name: "Gaming", icon: Gamepad2, color: "bg-green-600" },
    { id: 4, name: "Art", icon: Palette, color: "bg-pink-600" },
    { id: 5, name: "Food", icon: Utensils, color: "bg-orange-600" },
    { id: 6, name: "Business", icon: Briefcase, color: "bg-indigo-600" },
  ];
  const events: EventType[] = [
    {
      id: 1,
      title: "Electronic Music Festival 2025",
      date: "NOV 15",
      time: "7:00 PM",
      location: "Bandra, Mumbai",
      price: "₹1,200",
      image:
        "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=300&fit=crop",
      rating: 4.8,
      attendees: 2450,
      category: "Music",
      isOnline: false,
    },
    {
      id: 2,
      title: "Digital Photography Workshop",
      date: "NOV 18",
      time: "2:00 PM",
      location: "Andheri, Mumbai",
      price: "₹800",
      image:
        "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=400&h=300&fit=crop",
      rating: 4.9,
      attendees: 150,
      category: "Photography",
      isOnline: false,
    },
    {
      id: 3,
      title: "Gaming Championship 2025",
      date: "NOV 20",
      time: "4:00 PM",
      location: "Powai, Mumbai",
      price: "₹500",
      image:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop",
      rating: 4.7,
      attendees: 890,
      category: "Gaming",
      isOnline: false,
    },
    {
      id: 4,
      title: "Modern Art Exhibition",
      date: "NOV 22",
      time: "11:00 AM",
      location: "Fort, Mumbai",
      price: "₹300",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop",
      rating: 4.6,
      attendees: 320,
      category: "Art",
      isOnline: false,
    },
    {
      id: 5,
      title: "Street Food Festival",
      date: "NOV 25",
      time: "6:00 PM",
      location: "Juhu, Mumbai",
      price: "₹200",
      image:
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
      rating: 4.5,
      attendees: 1200,
      category: "Food",
      isOnline: false,
    },
    {
      id: 6,
      title: "Startup Pitch Competition",
      date: "NOV 28",
      time: "10:00 AM",
      location: "BKC, Mumbai",
      price: "Free",
      image:
        "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=400&h=300&fit=crop",
      rating: 4.4,
      attendees: 400,
      category: "Business",
      isOnline: false,
    },
  ];

  const onlineEvents = [
    {
      id: 7,
      title: "Virtual Reality Workshop",
      date: "DEC 1",
      time: "3:00 PM",
      location: "Online",
      price: "₹600",
      image:
        "https://images.unsplash.com/photo-1559223607-a43c990c692c?w=400&h=300&fit=crop",
      rating: 4.8,
      attendees: 850,
      category: "Technology",
      isOnline: true,
    },
    {
      id: 8,
      title: "Online Cooking Masterclass",
      date: "DEC 3",
      time: "5:00 PM",
      location: "Online",
      price: "₹400",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=300&fit=crop",
      rating: 4.9,
      attendees: 1200,
      category: "Food",
      isOnline: true,
    },
    {
      id: 9,
      title: "Digital Marketing Seminar",
      date: "DEC 5",
      time: "7:00 PM",
      location: "Online",
      price: "₹350",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      rating: 4.7,
      attendees: 950,
      category: "Business",
      isOnline: true,
    },
  ];

  const trendingEvents = [
    {
      id: 10,
      title: "International Jazz Festival",
      date: "DEC 10",
      time: "8:00 PM",
      location: "Delhi",
      price: "₹2,500",
      image:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      rating: 4.9,
      attendees: 3200,
      category: "Music",
      isOnline: false,
      isTrending: true,
    },
    {
      id: 11,
      title: "Tech Conference 2025",
      date: "DEC 12",
      time: "9:00 AM",
      location: "Bangalore",
      price: "₹1,800",
      image:
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
      rating: 4.8,
      attendees: 2800,
      category: "Technology",
      isOnline: false,
      isTrending: true,
    },
    {
      id: 12,
      title: "Fashion Week Preview",
      date: "DEC 15",
      time: "6:00 PM",
      location: "Goa",
      price: "₹1,500",
      image:
        "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=300&fit=crop",
      rating: 4.6,
      attendees: 1800,
      category: "Fashion",
      isOnline: false,
      isTrending: true,
    },
  ];

  const EventCard = ({
    event,
    showTrendingBadge = false,
  }: {
    event: EventType;
    showTrendingBadge?: boolean;
  }) => (
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

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="text-yellow-400 text-xl font-bold">
                <img src={logo} style={{ height: "2rem" }} />
              </div>
              <nav className="hidden md:block ml-10">
                <div className="flex items-baseline space-x-8">
                  <a
                    href="#"
                    className="text-white hover:text-yellow-400 px-3 py-2 text-sm font-medium"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-yellow-400 px-3 py-2 text-sm font-medium"
                  >
                    Events
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-yellow-400 px-3 py-2 text-sm font-medium"
                  >
                    About
                  </a>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-yellow-400 px-3 py-2 text-sm font-medium"
                  >
                    Contact
                  </a>
                </div>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <button className="text-gray-300 hover:text-yellow-400 px-3 py-2 text-sm font-medium">
                Create Event
              </button>
              <button className="text-gray-300 hover:text-yellow-400 px-3 py-2 text-sm font-medium">
                Login
              </button>
              <button className="bg-yellow-400 text-gray-900 px-4 py-2 rounded text-sm font-medium hover:bg-yellow-300">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </header>

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Categories */}
        <section className="py-12 bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-8">
              Explore Categories
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {categories.map((category) => {
                const IconComponent = category.icon;
                return (
                  <div key={category.id} className="text-center">
                    <div
                      className={`${category.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 hover:scale-110 transition-transform cursor-pointer`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-sm font-medium text-gray-300">
                      {category.name}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Popular Events in Mumbai */}
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

        {/* Online Events */}
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

        {/* Curated Events CTA */}
        <section className="mb-16">
          <div className="bg-gray-800 rounded-lg p-12 text-center">
            <h2 className="text-2xl font-bold mb-4">
              Events specially curated for you!
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Get event suggestions tailored to your interests! Tell us your
              favorite events like these.
            </p>
            <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded font-medium hover:bg-yellow-300 transition-colors">
              Get Started →
            </button>
          </div>
        </section>

        {/* Trending Events */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8">
            Trending Events around the World
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {trendingEvents.map((event) => (
              <EventCard
                key={`trending-${event.id}`}
                event={event}
              />
            ))}
          </div>

          <div className="text-center">
            <button className="px-8 py-3 border border-gray-600 text-white rounded hover:bg-gray-800 transition-colors">
              Load More
            </button>
          </div>
        </section>

        {/* Create Event CTA */}
        <section className="mb-16">
          <div className="bg-gray-800 rounded-lg p-8 flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold mb-2">
                Create an event with App
              </h3>
              <p className="text-gray-300">
                Got a show, event, activity or a great experience? Partner with
                us & get listed on App
              </p>
            </div>
            <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded font-medium hover:bg-yellow-300 transition-colors whitespace-nowrap ml-8">
              📅 Create Event
            </button>
          </div>
        </section>

        {/* Newsletter */}
        <section className="mb-16">
          <div className="bg-yellow-400 rounded-lg p-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Subscribe to our Newsletter
                </h3>
                <p className="text-gray-800">
                  Receive our weekly newsletter & updates with new events from
                  your favorite organizers & more
                </p>
              </div>
              <div className="flex ml-8">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 rounded-l bg-white text-gray-900 focus:outline-none min-w-64"
                />
                <button className="bg-gray-900 text-white px-6 py-3 rounded-r hover:bg-gray-800 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-4">About comapny</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Press & Media
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Help</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Account Support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Listed Events
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Event Ticketing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Ticket Purchase
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Categories</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Online Events
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Things to do Online
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Concert
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Workshops
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Kids & Family
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Shopping & FLea
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Follow Us</h4>
              <ul className="space-y-2 text-gray-400 mb-6">
                <li>
                  <a href="#" className="hover:text-white">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    YouTube
                  </a>
                </li>
              </ul>

              <h5 className="text-white font-semibold mb-4">
                Download The App
              </h5>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-gray-400">
                  <div className="w-6 h-6 rounded">
                    <img src={playStore} className="h-5" alt="play store"/>
                  </div>
                  <span className="text-sm">Google Play</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <div className="w-6 h-6 rounded">
                    <img src={apple} className="h-5" alt="app store"/>
                  </div>
                  <span className="text-sm">App Store</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            © 2024 Cheers Be a Slayer. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
