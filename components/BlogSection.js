import React from 'react';
const BlogSection = () => {
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
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white mb-6 text-center">Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.slug} className="bg-dark-charcoal p-6 rounded-md shadow-md hover:shadow-lg transition-shadow">
              <img src={post.imageUrl} alt={post.title} className="mb-4 rounded-md" />
              <h3 className="text-xl font-bold text-white mb-2">{post.title}</h3>
              <p className="text-white">{post.snippet}</p>
              <a href={`/blog/${post.slug}`} className="text-electric-blue hover:text-white transition-colors">Read More</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
