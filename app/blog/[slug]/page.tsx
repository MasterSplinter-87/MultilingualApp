// app/blog/[slug]/page.tsx

interface PageProps {
  params: {
    slug: string;
  };
}

// The page component dynamically fetches data based on the 'slug' from the url
export default async function BlogPost({ params }: PageProps) {
  const post = await fetchBlogPost(params.slug);

  // If the post is not found, we return a 404 response
  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
}

// Function to fetch the blog post dynamically (server-side logic)
async function fetchBlogPost(slug: string) {
  // We simulate fetching data based on the slug
  const blogPosts = [
    {
      slug: "first-post",
      title: "First Post",
      content: "This is the first post.",
    },
    {
      slug: "second-post",
      title: "Second Post",
      content: "This is the second post.",
    },
  ];

  // Find the blog post that matches the slug from the url
  return blogPosts.find((post) => post.slug === slug);
}
