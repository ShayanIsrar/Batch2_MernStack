import React, { useState, useEffect } from "react";

const FetchingData = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [fetchPosts, setFetchPosts] = useState(false); // Control when to fetch

  useEffect(() => {
    if (fetchPosts) {
      setLoading(true);
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => {
          setPosts(data);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching posts:", err);
          setLoading(false);
        });
    }
  }, [fetchPosts]);

  return (
    <div className="p-4">
      <button
        onClick={() => setFetchPosts(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Load Posts
      </button>

      {loading && <p className="mt-4">Loading...</p>}

      {!loading && posts.length > 0 && (
        <ul className="mt-4 space-y-2">
          {posts.slice(0, 100).map((post) => (
            <li key={post.id} className="border p-3 rounded shadow">
              <h2 className="font-semibold text-green-700">{post.id}</h2>
              <h3 className="font-semibold text-red-700">{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FetchingData;
