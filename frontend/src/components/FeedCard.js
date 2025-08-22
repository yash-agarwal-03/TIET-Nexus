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
          className={`flex items-center gap-2 text-sm transition-colors duration-200 focus:outline-none ${post.isLiked ? "text-pink-500" : "text-gray-500"}`}
          onClick={() => onLike(post.id)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className={`w-5 h-5 transition-colors duration-200 ${post.isLiked ? "fill-pink-500" : "fill-none"}`}
          >
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
          <span>{post.likes}</span>
          <span className="sr-only">Like</span>
        </button>
        <button
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-blue-600 transition-colors duration-200 focus:outline-none"
          onClick={() => navigator.clipboard.writeText(window.location.href)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6A2.25 2.25 0 005.25 5.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 15.75l3-3m0 0l-3-3m3 3H9" />
          </svg>
          <span>Share</span>
        </button>
      </div>
    </div>
  );
};

export default FeedCard;
