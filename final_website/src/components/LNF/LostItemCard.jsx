const LostItemCard = ({
  item,
  isAdmin,
  isPending,
  onApprove,
  onReject,
  onDelete,
}) => {
  return (
    <div className="lnf-card">
  <p className="lnf-card-desc">{item.description}</p>

  <p className="lnf-card-meta">
    <strong>Location:</strong>{" "}
    {item.location || "Location not specified"}
  </p>

  {isAdmin && isPending && (
    <div className="lnf-card-actions">
      <button className="btn-approve" onClick={onApprove}>Approve</button>
      <button className="btn-reject" onClick={onReject}>Reject</button>
    </div>
  )}

  {isAdmin && !isPending && (
    <div className="lnf-card-actions">
      <button className="btn-reject" onClick={onDelete}>Delete</button>
    </div>
  )}
</div>

  );
};

export default LostItemCard;
