import React from 'react';
import Head from 'next/head';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Link from 'next/link';

const BlogIndexPage = () => {
  // Placeholder for fetching blog posts from CMS
  const blogPosts = [
    {
      title: 'Sample Blog Post 1',
      snippet: 'This is a snippet of the first blog post.',
      imageUrl: 'https://via.placeholder.com/400x200',
      slug: 'sample-blog-post-1',
    },
    {
      title: 'Sample Blog Post 2',
      snippet: 'This is a snippet of the second blog post.',
      imageUrl: 'https://via.placeholder.com/400x200',
      slug: 'sample-blog-post-2',
    },
  ];

  return (
    <div className="bg-near-black text-white font-sans">
      <Head>
        <title>Blog - CatalyX</title>
        <meta name="description" content="Insights and articles from CatalyX." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="container mx-auto py-20">
        <h1 className="text-5xl font-bold text-center mb-8">Blog</h1>

        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.slug} className="bg-dark-charcoal p-6 rounded-md shadow-md">
                <img src={post.imageUrl} alt={post.title} className="mb-4 rounded-md" />
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-300">{post.snippet}</p>
                <Link href={`/blog/${post.slug}`} className="text-electric-blue hover:text-white transition-colors">Read More</Link>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogIndexPage;
