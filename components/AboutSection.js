import React from 'react';
const AboutSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white mb-6 text-center">Our Mission</h2>
        <p className="text-lg text-white mb-8 text-center">
          Our mission is to empower entrepreneurs to build innovative solutions and create a positive impact on the world.
        </p>
        <div className="flex justify-center space-x-8">
          <div>
            <h3 className="text-xl font-bold text-white">500+ Members</h3>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Hosted 12 major events</h3>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Raised $X million collectively</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
