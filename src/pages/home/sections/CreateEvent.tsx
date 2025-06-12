const CreateEvent = () => {
  return (
    <section className="mb-16">
      <div className="bg-gray-800 rounded-lg p-8 flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold mb-2">Create an event with Cheers be a Slayer</h3>
          <p className="text-gray-300">
            Got a show, event, activity or a great experience? Partner with us &
            get listed on App
          </p>
        </div>
        <button className="bg-yellow-400 text-gray-900 px-6 py-3 rounded font-medium hover:bg-yellow-300 transition-colors whitespace-nowrap ml-8">
          📅 Create Event
        </button>
      </div>
    </section>
  );
};

export default CreateEvent;
