const NewsLetter = () => {
  return (
    <section className="mb-16">
      <div className="bg-yellow-400 rounded-lg p-8">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Subscribe to our Newsletter
            </h3>
            <p className="text-gray-800">
              Receive our weekly newsletter & updates with new events from your
              favorite organizers & more
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
  );
};

export default NewsLetter;
