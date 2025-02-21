import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutPage = () => {
  return (
    <div className="bg-near-black text-white font-sans">
      <Head>
        <title>About CatalyX</title>
        <meta name="description" content="Learn more about CatalyX and our mission." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="container mx-auto py-20">
        <h1 className="text-5xl font-bold text-center mb-8">About CatalyX</h1>
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg">
            CatalyX is dedicated to fostering a vibrant community of entrepreneurs, innovators, and investors. We provide resources, mentorship, and networking opportunities to help our members accelerate their ventures and make a lasting impact on the world.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
          <p className="text-lg">
            We envision a future where entrepreneurship is accessible to all, and where innovative solutions are developed to address the world's most pressing challenges. CatalyX strives to be at the forefront of this movement, empowering the next generation of leaders and change-makers.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-4">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-dark-charcoal p-6 rounded-md shadow-md">
              <h3 className="text-xl font-bold mb-2">John Doe</h3>
              <p className="text-gray-300">Co-founder & CEO</p>
              <p className="text-sm mt-2">John is a serial entrepreneur with a passion for building innovative companies.</p>
            </div>
            <div className="bg-dark-charcoal p-6 rounded-md shadow-md">
              <h3 className="text-xl font-bold mb-2">Jane Smith</h3>
              <p className="text-gray-300">Co-founder & CTO</p>
              <p className="text-sm mt-2">Jane is a technology expert with a background in software engineering and data science.</p>
            </div>
            {/* Add more team members as needed */}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
