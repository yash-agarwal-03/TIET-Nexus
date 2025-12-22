import React, { useState, useEffect } from "react";
import { Plus, Heart, Share2, Loader2, X, AlertCircle ,Trash2} from "lucide-react";
import { getAllFeeds, addFeed, updateLikes,deleteFeed } from "../api/feeds.api";
import { useAuth } from "../context/AuthContext";
import { ALLOWED_FEED_TAGS } from "../../constants";
import "./FeedsPage.css";

export default function FeedsPage() {
  const { user, token } = useAuth();
  const [feeds, setFeeds] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [toast, setToast] = useState({ visible: false, message: "" });

  const canPost = user?.role === "THAPAR_ADMIN" || user?.role === "SOCIETY_ADMIN";

  useEffect(() => {
    const fetchFeeds = async () => {
      try {
        const res = await getAllFeeds();
        // Accessing feeds from res.data.feeds or res.feeds based on your API structure
        const fetchedFeeds = res?.feeds || res.data?.feeds || [];
        setFeeds(fetchedFeeds);
        setLoading(false);
      } catch (err) {
        setError("Couldn't load feeds. Please try again later.");
        setLoading(false);
      }
    };
    fetchFeeds();
  }, []);

  const handleLike = async (feedId) => {
  // Replace browser alert with the existing toast system
  if (!user || !token) {
    setToast({ 
      visible: true, 
      message: "Please login to like campus posts!" 
    });
    setTimeout(() => setToast({ visible: false, message: "" }), 3000);
    return;
  }

  // Optimistic UI update logic remains the same
  setFeeds(prev => prev.map(f => {
    if (f._id === feedId) {
      const isLiked = f.likedBy?.includes(user.userId);
      const newLikedBy = isLiked 
        ? f.likedBy.filter(id => id !== user.userId) 
        : [...(f.likedBy || []), user.userId];
      
      return { 
        ...f, 
        likedBy: newLikedBy,
        likes: isLiked ? Math.max(0, (f.likes || 1) - 1) : (f.likes || 0) + 1 
      };
    }
    return f;
  }));

  try {
    await updateLikes(token, feedId);
  } catch (err) {
    console.error("Like sync error:", err);
  }
};

  const handleCreateFeed = async (e) => {
  e.preventDefault();
  const form = e.target;
  const payload = {
    tag: form.tag.value,
    content: form.content.value,
  };

  try {
    const res = await addFeed(token, payload);
    
    // FIX: Ensure the new feed object has all properties before adding to state
    const newFeed = res.data || res; 
    
    // Validate the object has a tag before prepending to avoid the 'undefined' error
    if (newFeed && newFeed.tag) {
      setFeeds(prev => [newFeed, ...prev]);
      setShowModal(false);
      form.reset();
      setToast({ visible: true, message: "Feed posted successfully!" });
      setTimeout(() => setToast({ visible: false, message: "" }), 3000);
    }
  } catch (err) {
    alert("Failed to post feed");
  }
};

  const handleShare = (feedId) => {
    const shareLink = `${window.location.origin}/feeds/${feedId}`;
    navigator.clipboard.writeText(shareLink).then(() => {
      setToast({ visible: true, message: "Link copied to clipboard!" });
      setTimeout(() => setToast({ visible: false, message: "" }), 3000);
    });
  };
const handleDelete = async (feedId) => {
  if (!window.confirm("Are you sure you want to delete this post?")) return;

  try {
    await deleteFeed(token, feedId);
    setFeeds(prev => prev.filter(f => f._id !== feedId));
    setToast({ visible: true, message: "Post deleted successfully" });
    setTimeout(() => setToast({ visible: false, message: "" }), 3000);
  } catch (err) {
    alert("Delete failed: " + err.message);
  }
};
  return (
    <div className="feeds-page-wrapper">
      {toast.visible && <div className="feeds-toast-box">{toast.message}</div>}

      <div className="feeds-main-content">
        <header className="feeds-header-section">
          <h1 className="feeds-header-title">Campus Feeds</h1>
          <p className="feeds-header-subtitle">Stay updated with the latest happenings at TIET</p>
        </header>

        <div className="feeds-content-container">
          {loading ? (
            <div className="feeds-centered-status">
              <Loader2 className="animate-spin feeds-primary-red" size={40} />
              <p>Gathering updates...</p>
            </div>
          ) : error ? (
            <div className="feeds-centered-status error-card">
              <AlertCircle size={48} color="#b11317" />
              <p>{error}</p>
              <button onClick={() => window.location.reload()} className="feeds-retry-btn">Retry</button>
            </div>
          ) : (
            <div className="feeds-stack">
              {feeds.map((feed) => {
                const isLiked = feed.likedBy?.includes(user?.userId);
                return (
                  <div key={feed._id} className="feed-card-item">
                   <div className="feed-card-top">
  <div className="feed-author-meta">
    <span className={`feed-tag-badge ${feed.tag?.toLowerCase()}`}>{feed.tag}</span>
    <p className="uploader-name">{feed.uploaderName}</p>
  </div>
  
  <div className="feed-top-right">
    <span className="feed-date-text">
      {new Date(feed.createdAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })}
    </span>
    {/* Show delete only if user is the uploader */}
    {user?.userId === feed.uploaderId && (
      <button className="feed-delete-btn" onClick={() => handleDelete(feed._id)}>
        <Trash2 size={18} />
      </button>
    )}
  </div>
</div>
                    
                    <div className="feed-card-body">
                      <p className="feed-main-text">{feed.content}</p>
                    </div>

                    <div className="feed-card-footer">
                      <button 
                        className={`feed-footer-btn like-btn ${isLiked ? 'active' : ''}`} 
                        onClick={() => handleLike(feed._id)}
                      >
                        <Heart 
                          size={20} 
                          fill={isLiked ? "#ff4d6d" : "transparent"} 
                          stroke={isLiked ? "#ff4d6d" : "currentColor"} 
                        /> 
                        <span>{feed.likes || 0}</span>
                      </button>
                      <button className="feed-footer-btn" onClick={() => handleShare(feed._id)}>
                        <Share2 size={20} /> <span>Share</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {canPost && (
        <button className="feeds-fab-btn" onClick={() => setShowModal(true)}>
          <Plus size={32} />
        </button>
      )}

      {showModal && (
  <div className="feeds-modal-overlay" onClick={() => setShowModal(false)}>
    <div className="feeds-modal-window" onClick={(e) => e.stopPropagation()}>
      <div className="feeds-modal-header">
        <h3 className="modal-title">Post Campus Update</h3>
        <button className="feeds-modal-close" onClick={() => setShowModal(false)}>
          <X size={20} />
        </button>
      </div>
      
      <form className="feeds-modal-form" onSubmit={handleCreateFeed}>
        <div className="feeds-form-field">
          <label className="form-label">Category Tag</label>
          <select name="tag" className="feeds-form-select" required>
            {ALLOWED_FEED_TAGS.map(tag => (
              <option key={tag} value={tag}>{tag}</option>
            ))}
          </select>
        </div>

        <div className="feeds-form-field">
          <label className="form-label">Content</label>
          <textarea 
            name="content"
            className="feeds-form-textarea" 
            placeholder="Type your message here..."
            rows="5"
            required
          />
        </div>

        <div className="feeds-modal-footer">
          <button type="button" className="feeds-btn-cancel" onClick={() => setShowModal(false)}>
            Discard
          </button>
          <button type="submit" className="feeds-btn-submit">
            Post to Feed
          </button>
        </div>
      </form>
    </div>
  </div>
)}
    </div>
  );
}