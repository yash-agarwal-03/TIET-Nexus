const FoundItemCard = ({ item, isAdmin, onDelete }) => {
  return (
    <div className="lnf-card">
  <p className="lnf-card-desc">{item.description}</p>

  <p className="lnf-card-meta">
    <strong>Location:</strong>{" "}
    {item.location || "Location not specified"}
  </p>

  {isAdmin && (
    <div className="lnf-card-actions">
      <button className="btn-reject" onClick={onDelete}>Delete</button>
    </div>
  )}
</div>

  );
};

export default FoundItemCard;
