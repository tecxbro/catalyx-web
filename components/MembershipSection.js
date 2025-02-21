import React from 'react';
const MembershipSection = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white mb-6 text-center">Membership Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-dark-charcoal p-6 rounded-md shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-white mb-2">Workshops</h3>
            <p className="text-white">Access exclusive workshops to enhance your skills.</p>
          </div>
          <div className="bg-dark-charcoal p-6 rounded-md shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-white mb-2">Mentorship</h3>
            <p className="text-white">Get personalized mentorship from industry experts.</p>
          </div>
          <div className="bg-dark-charcoal p-6 rounded-md shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-bold text-white mb-2">Investor Connections</h3>
            <p className="text-white">Connect with potential investors to fund your startup.</p>
          </div>
        </div>
        <div className="text-center mt-8">
          <a href="#" className="bg-electric-blue text-white py-3 px-8 rounded-md hover:shadow-lg transition-shadow">Apply Now</a>
        </div>
      </div>
    </section>
  );
};

export default MembershipSection;
