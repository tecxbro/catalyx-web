import React from 'react';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const BlogPostPage = () => {
  // Placeholder for fetching a single blog post from CMS based on the slug
  const blogPost = {
    title: 'Sample Blog Post',
    content: 'This is the content of the sample blog post.',
    author: 'John Doe',
    date: 'January 1, 2025',
  };

  return (
    <div className="bg-near-black text-white font-sans">
      <Head>
        <title>{blogPost.title} - CatalyX</title>
        <meta name="description" content={blogPost.content} />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="container mx-auto py-20">
        <h1 className="text-5xl font-bold text-center mb-8">{blogPost.title}</h1>

        <section className="mb-8">
          <p className="text-gray-300">By {blogPost.author} on {blogPost.date}</p>
        </section>

        <section>
          <p className="text-lg">{blogPost.content}</p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPostPage;
