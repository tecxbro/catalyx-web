import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-dark-charcoal py-4 fixed w-full top-0 z-10">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-white">CatalyX</Link>
        <div className="flex space-x-6">
          <Link href="/about" className="text-white hover:text-electric-blue">About</Link>
          <Link href="/membership" className="text-white hover:text-electric-blue">Membership</Link>
          <Link href="/events" className="text-white hover:text-electric-blue">Events</Link>
          <Link href="/blog" className="text-white hover:text-electric-blue">Blog</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
