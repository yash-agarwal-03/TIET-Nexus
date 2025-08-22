import React, { useEffect, useState } from "react";

const FeedCard = ({ post, onLike }) => {
  const date = new Date(post.timestamp);
  return (
    <div className="bg-white rounded shadow p-4 relative">
      {post.isPinned && (
        <div className="absolute top-4 right-4 text-blue-600" title="Pinned">📌</div>
      )}
      <div className="flex items-start gap-3 mb-2">
        <img
          src={post.avatar || "/placeholder.svg"}
          alt={post.author}
          className="w-12 h-12 rounded-full bg-blue-100 object-cover"
        />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="font-semibold text-gray-900">{post.author}</h3>
            <span className="bg-gray-200 text-xs px-2 py-0.5 rounded">{post.authorRole}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <span>{date.toLocaleDateString()}</span>
            <span>•</span>
            <span className="border border-blue-200 text-blue-700 rounded px-2 text-xs">{post.category}</span>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <p className="text-gray-700 whitespace-pre-line">{post.content}</p>
      </div>
      <div className="flex items-center gap-6 pt-3 border-t">
        <button
          className={`flex items-center gap-2 text-sm ${post.isLiked ? "text-red-600" : "text-gray-500"}`}
          onClick={() => onLike(post.id)}
        >
          <span role="img" aria-label="like">❤️</span> {post.likes}
        </button>
        <span className="flex items-center gap-2 text-gray-500 text-sm">
          <span role="img" aria-label="comments">💬</span> {post.comments}
        </span>
        <span className="flex items-center gap-2 text-gray-500 text-sm">
          <span role="img" aria-label="share">🔗</span> Share
        </span>
      </div>
    </div>
  );
};

export default FeedCard;
