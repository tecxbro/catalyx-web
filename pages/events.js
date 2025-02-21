import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const EventsPage = () => {
  return (
    <div className="bg-near-black text-white font-sans">
      <Head>
        <title>Events - CatalyX</title>
        <meta name="description" content="Upcoming events and workshops by CatalyX." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="container mx-auto py-20">
        <h1 className="text-5xl font-bold text-center mb-8">Events</h1>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Upcoming Events</h2>
          <p className="text-lg">
            Join us for our monthly founder roundtables, demo days, and workshops. Our events are designed to provide you with the knowledge, skills, and connections you need to succeed as an entrepreneur.
          </p>
        </section>

        <section className="text-center">
          <a href="#" className="bg-electric-blue text-white py-3 px-8 rounded-md hover:shadow-lg transition-shadow">View All Events</a>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EventsPage;
