import React from 'react';
const EventsSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white mb-6 text-center">Upcoming Events</h2>
        <p className="text-lg text-white mb-8 text-center">
          Join us for our monthly founder roundtables and demo days.
        </p>
        <div className="text-center">
          <a href="#" className="border border-white text-white py-3 px-8 rounded-md hover:bg-white hover:text-electric-blue transition-colors">View All Events</a>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
