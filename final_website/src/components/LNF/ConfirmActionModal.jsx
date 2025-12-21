/* =========================================================
   STEP 1: CONFIRMATION MODAL (GLOBAL, SIMPLE)
   File: src/components/LNF/ConfirmActionModal.jsx
   ========================================================= */

const ConfirmActionModal = ({ open, title, message, onConfirm, onCancel }) => {
  if (!open) return null;

  return (
    <div className="lnf-modal-overlay">
      <div className="lnf-modal">
        <h3>{title}</h3>
        <p>{message}</p>

        <div className="lnf-modal-actions">
          <button className="btn-outline" onClick={onCancel}>
            Cancel
          </button>
          <button className="btn-danger" onClick={onConfirm}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmActionModal;
