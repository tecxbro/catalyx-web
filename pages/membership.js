import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MembershipPage = () => {
  return (
    <div className="bg-near-black text-white font-sans">
      <Head>
        <title>Membership - CatalyX</title>
        <meta name="description" content="Join CatalyX and unlock exclusive benefits." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="container mx-auto py-20">
        <h1 className="text-5xl font-bold text-center mb-8">Membership</h1>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Benefits</h2>
          <ul className="list-disc list-inside text-lg">
            <li>Access to exclusive workshops and events</li>
            <li>Personalized mentorship from industry experts</li>
            <li>Networking opportunities with fellow entrepreneurs and investors</li>
            <li>Access to valuable resources and tools</li>
            <li>Discounts on partner services</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-dark-charcoal p-6 rounded-md shadow-md">
              <p className="text-lg italic mb-2">"CatalyX has been instrumental in helping me grow my startup. The mentorship and networking opportunities are invaluable."</p>
              <p className="text-gray-300">- John Doe, Founder of Example Startup</p>
            </div>
            <div className="bg-dark-charcoal p-6 rounded-md shadow-md">
              <p className="text-lg italic mb-2">"The workshops and resources provided by CatalyX have helped me refine my business strategy and secure funding."</p>
              <p className="text-gray-300">- Jane Smith, CEO of Innovation Corp</p>
            </div>
          </div>
        </section>

        <section className="text-center">
          <a href="#" className="bg-electric-blue text-white py-3 px-8 rounded-md hover:shadow-lg transition-shadow">Apply Now</a>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MembershipPage;
