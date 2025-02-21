import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import BriefIntroduction from '../components/BriefIntroduction';
import AboutSection from '../components/AboutSection';
import MembershipSection from '../components/MembershipSection';
import EventsSection from '../components/EventsSection';
import BlogSection from '../components/BlogSection';
import Chatbot from '../components/Chatbot';

export default function Home() {
  return (
    <div className="bg-near-black text-white font-sans">
      <Head>
        <title>CatalyX - Where Entrepreneurs Accelerate Innovation</title>
        <meta name="description" content="Join a curated community of visionaries, builders, and investors shaping the future." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main>
        <HeroSection />
        <BriefIntroduction />
        <AboutSection />
        <MembershipSection />
        <EventsSection />
        <BlogSection />
      </main>

      <Footer />
      <Chatbot />
    </div>
  );
}
