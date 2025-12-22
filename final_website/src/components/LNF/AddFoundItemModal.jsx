import { useState } from "react";

const AddFoundItemModal = ({ open, onClose, onSubmit }) => {
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");

  if (!open) return null;

  const handleSubmit = () => {
    if (!description.trim()) return;
    onSubmit({ description, location });
    setDescription("");
    setLocation("");
  };

  return (
    <div className="lnf-modal-overlay">
      <div className="lnf-modal">
        <h3>Add Found Item</h3>

        <textarea
          placeholder="Item description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <div className="lnf-modal-actions">
          <button className="btn-outline" onClick={onClose}>Cancel</button>
          <button className="btn-danger" onClick={handleSubmit}>Add</button>
        </div>
      </div>
    </div>
  );
};

export default AddFoundItemModal;