import React from 'react';
const BriefIntroduction = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">About CatalyX</h2>
        <p className="text-lg text-white mb-8">
          CatalyX is a community focused on entrepreneurship, innovation, networking, and acceleration.
        </p>
        <div className="flex justify-center space-x-8">
          <div>
            <h3 className="text-xl font-bold text-white">Community</h3>
            <p className="text-white">Connect with like-minded individuals.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Mentorship</h3>
            <p className="text-white">Get guidance from experienced mentors.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold text-white">Resources</h3>
            <p className="text-white">Access valuable resources and tools.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BriefIntroduction;
