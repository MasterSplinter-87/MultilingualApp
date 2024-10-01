// app/posts/page.tsx
import React from "react";

async function fetchPosts() {
  // Simulate fetching data from an API
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return posts;
}

export default async function PostsPage() {
  const posts = await fetchPosts();

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post: { id: string; title: string; body: string }) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
