import React from 'react';
const HeroSection = () => {
  return (
    <section className="py-24 text-center">
      <div className="container mx-auto">
        <h1 className="text-6xl font-bold text-white mb-4">CatalyX</h1>
        <p className="text-2xl text-white">Where Entrepreneurs Accelerate Innovation</p>
        <div className="mt-8 flex justify-center space-x-4">
          <a href="#" className="bg-electric-blue text-white py-3 px-8 rounded-md hover:shadow-lg transition-shadow">Membership</a>
          <a href="#" className="border border-white text-white py-3 px-8 rounded-md hover:bg-white hover:text-electric-blue transition-colors">Events</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
