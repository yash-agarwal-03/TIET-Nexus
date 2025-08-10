import React, { useEffect, useState } from "react";
import FeedCard from "../components/FeedCard.jsx";

function FeedsPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
  fetch("/data/feeds.json")
      .then((res) => res.json())
      .then((data) => {
        // Convert timestamp strings to Date objects
        setPosts(data.map(post => ({ ...post, timestamp: new Date(post.timestamp) })));
      });
  }, []);

  const handleLike = (postId) => {
    setPosts(posts =>
      posts.map(post =>
        post.id === postId
          ? { ...post, isLiked: !post.isLiked, likes: post.isLiked ? post.likes - 1 : post.likes + 1 }
          : post
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">TIET Campus Feeds</h1>
          <p className="text-lg text-gray-600">
            Stay updated with the latest news, announcements, and happenings around campus
          </p>
        </div>
        <div className="space-y-6">
          {posts.map((post) => (
            <FeedCard key={post.id} post={post} onLike={handleLike} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeedsPage;
