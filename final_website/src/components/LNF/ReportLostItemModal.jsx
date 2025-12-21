import { useState } from "react";

const ReportLostItemModal = ({ open, onClose, onSubmit }) => {
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  if (!open) return null;

  const handleSubmit = () => {
    if (!description.trim()) return;

    onSubmit({
      description,
      location: location?.trim() || "Not Sure",
    });

    setDescription("");
    setLocation("");
  };

  return (
    <div className="lnf-modal-overlay">
      <div className="lnf-modal">
        <h3>Report Lost Item</h3>

        <textarea
          placeholder="Describe the item you lost (colour, type, identifying marks, etc.)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="text"
          placeholder="Where did you last see it? (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <div className="lnf-modal-actions">
          <button className="btn-outline" onClick={onClose}>
            Cancel
          </button>
          <button className="btn-danger" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReportLostItemModal;
