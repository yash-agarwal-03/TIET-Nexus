import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import LostItemCard from "../components/LNF/LostItemCard";
import FoundItemCard from "../components/LNF/FoundItemCard";
import ConfirmActionModal from "../components/LNF/ConfirmActionModal";
import "./LostFound.css";
import {
  getApprovedLostTickets,
  getPendingLostTickets,
  approveLostTicket,
  getFoundItems,
  deleteFoundItem,
  deleteLostTicket,
  getMyTickets,
  createFoundItem,
  createLostTicket,
} from "../api/lnf.api.js";
import AddFoundItemModal from "../components/LNF/AddFoundItemModal";
import ReportLostItemModal from "../components/LNF/ReportLostItemModal";
import LoginButton from "../components/LoginButton.jsx";

const LostFound = () => {
  const { user, token } = useAuth();

  /* ===== DERIVED FLAGS (SAFE WITH OPTIONAL CHAINING) ===== */
  const isAdmin = user?.role === "LNF_ADMIN";
  const isStudent = user?.role === "STUDENT";

  /* ===== STATE (ALL HOOKS FIRST) ===== */
  const [activeTab, setActiveTab] = useState(isAdmin ? "pending" : "found");
  const [modal, setModal] = useState({
    open: false,
    action: null,
    item: null,
  });

  const [lostItems, setLostItems] = useState([]);
  const [loadingLost, setLoadingLost] = useState(false);

  const [pendingTickets, setPendingTickets] = useState([]);
  const [loadingPending, setLoadingPending] = useState(false);

  const [foundItems, setFoundItems] = useState([]);
  const [loadingFound, setLoadingFound] = useState(false);

  const [myTickets, setMyTickets] = useState([]);
  const [loadingMyTickets, setLoadingMyTickets] = useState(false);

  const openModal = (action, item) => setModal({ open: true, action, item });
  const closeModal = () => setModal({ open: false, action: null, item: null });
  
  const [showAddFoundModal, setShowAddFoundModal] = useState(false);
  const [showLostModal, setShowLostModal] = useState(false);

  /* ===== EFFECT: APPROVED LOST TICKETS ===== */
  useEffect(() => {
    if (!token) return;

    setLoadingLost(true);
    getApprovedLostTickets(token)
      .then((data) => {
        setLostItems(data.tickets || []);
      })
      .catch(() => {
        setLostItems([]);
      })
      .finally(() => {
        setLoadingLost(false);
      });
  }, [token]);

  /* ===== EFFECT: PENDING TICKETS (ADMIN ONLY) ===== */
  useEffect(() => {
    if (!token || !isAdmin) return;

    setLoadingPending(true);
    getPendingLostTickets(token)
      .then((data) => {
        setPendingTickets(Array.isArray(data) ? data : []);
      })
      .finally(() => setLoadingPending(false));
  }, [token, isAdmin]);

  useEffect(() => {
    if (!token) return;

    setLoadingFound(true);
    getFoundItems(token)
      .then((data) => {
        setFoundItems(data.items || data || []);
      })
      .finally(() => setLoadingFound(false));
  }, [token]);

  useEffect(() => {
    if (!token || !isStudent) return;

    setLoadingMyTickets(true);
    getMyTickets(token)
      .then((data) => {
        setMyTickets(Array.isArray(data) ? data : []);
      })
      .finally(() => setLoadingMyTickets(false));
  }, [token, isStudent]);

  /* ===== CONFIRM ACTION ===== */
  const confirmAction = async () => {
    const { action, item } = modal;

    try {
      if (action === "approve") {
        await approveLostTicket(token, item._id);

        setLostItems((prev) => [
          {
            _id: item._id,
            description: item.description,
            location: item.location,
          },
          ...prev,
        ]);
      }

      

      if (action === "delete-lost") {
        await deleteLostTicket(token, item._id);
        setLostItems((prev) => prev.filter((t) => t._id !== item._id));
      }

      if (action === "delete-found") {
        await deleteFoundItem(token, item._id);
        setFoundItems((prev) => prev.filter((f) => f._id !== item._id));
      }

      setPendingTickets((prev) => prev.filter((t) => t._id !== item._id));
    } catch (e) {
      console.error(e);
    } finally {
      closeModal();
    }
  };
  const handleAddFoundItem = async (data) => {
  try {
    const payload = {
      description: data.description,
      location: data.location?.trim()
        ? data.location
        : "Lost and Found Office (Jaggi)",
    };

    const created = await createFoundItem(token, payload);
    setFoundItems((prev) => [created, ...prev]);
  } catch (e) {
    console.error(e);
  } finally {
    setShowAddFoundModal(false);
  }
};
const handleReportLost = async (data) => {
  try {
    await createLostTicket(token, {
      description: data.description,
      location: data.location
    });
  } catch (e) {
    console.error(e);
  } finally {
    setShowLostModal(false);
  }
};



  /* ===== EARLY RETURN (AFTER ALL HOOKS) ===== */
  if (!user) {
    return (
      <div className="lnf-guest-block">
        <h2>Please login as a student to access Lost & Found</h2>
        <div ><LoginButton/></div>
        
      </div>
    );
  }

  return (
    <div className="lnf-page">
      {/* HEADER */}
      <div className="lnf-header">
        <div className="lnf-header-text">
          <h1>Lost & Found</h1>
          <p>Report lost items and check items found on campus</p>
          <span className="lnf-info-text">
            * All claims are verified physically at the Lost & Found office.
          </span>
        </div>

        <div className="lnf-header-actions">
          {isStudent && (
  <button
    className="primary-btn"
    onClick={() => setShowLostModal(true)}
  >
    + Report Lost Item
  </button>
)}

          {isAdmin && (
  <button
    className="primary-btn"
    onClick={() => setShowAddFoundModal(true)}
  >
    + Add Found Item
  </button>
)}

        </div>
      </div>

      {/* TABS */}
      <div className="lnf-tabs">
        {isAdmin ? (
          <>
            <button
              className={activeTab === "pending" ? "active" : ""}
              onClick={() => setActiveTab("pending")}
            >
              Pending Requests
            </button>
            <button
              className={activeTab === "lost" ? "active" : ""}
              onClick={() => setActiveTab("lost")}
            >
              Lost Items
            </button>
            <button
              className={activeTab === "found" ? "active" : ""}
              onClick={() => setActiveTab("found")}
            >
              Found Items
            </button>
          </>
        ) : (
          <>
            <button
              className={activeTab === "found" ? "active" : ""}
              onClick={() => setActiveTab("found")}
            >
              Found Items
            </button>
            <button
              className={activeTab === "lost" ? "active" : ""}
              onClick={() => setActiveTab("lost")}
            >
              Lost Items
            </button>
            <button
              className={activeTab === "my" ? "active" : ""}
              onClick={() => setActiveTab("my")}
            >
              My Tickets
            </button>
          </>
        )}
      </div>

      {/* STATIC INFO TEXT */}
      {activeTab === "found" && (
        <p className="lnf-info-text">
          To claim an item, please visit the Lost & Found office.
        </p>
      )}

      {isAdmin && activeTab === "pending" && (
        <div className="lnf-grid">
          {loadingPending ? (
            <p>Loading...</p>
          ) : pendingTickets.length === 0 ? (
            <p>No pending requests.</p>
          ) : (
            pendingTickets.map((item) => (
              <LostItemCard
                key={item._id}
                item={{
                  description: item.description,
                  location: item.location,
                }}
                isAdmin
                isPending
                onApprove={() => openModal("approve", item)}
                onReject={() => openModal("delete-lost", item)}
              />
            ))
          )}
        </div>
      )}

      {/* GRID */}
      <div className="lnf-grid-wrapper">
        {activeTab === "lost" && (
          <div className="lnf-grid">
            {loadingLost ? (
              <p>Loading...</p>
            ) : lostItems.length === 0 ? (
              <p>No lost items found.</p>
            ) : (
              lostItems.map((item) => (
                <LostItemCard
                  key={item._id}
                  item={{
                    description: item.description,
                    location: item.location,
                  }}
                  isAdmin={isAdmin}
                  isPending={false}
                  onDelete={() => openModal("delete-lost", item)}
                />
              ))
            )}
          </div>
        )}

        {activeTab === "found" && (
          <div className="lnf-grid">
            {loadingFound ? (
              <p>Loading...</p>
            ) : foundItems.length === 0 ? (
              <p>No found items.</p>
            ) : (
              foundItems.map((item) => (
                <FoundItemCard
                  key={item._id}
                  item={{
                    description: item.description,
                    location: item.location,
                  }}
                  isAdmin={isAdmin}
                  onDelete={() => openModal("delete-found", item)}
                />
              ))
            )}
          </div>
        )}
        {!isAdmin && activeTab === "my" && (
          <div className="lnf-grid">
            {loadingMyTickets ? (
              <p>Loading...</p>
            ) : myTickets.length === 0 ? (
              <p>No approved tickets yet.</p>
            ) : (
              myTickets.map((item) => (
                <LostItemCard
                  key={item._id}
                  item={{
                    description: item.description,
                    location: item.location,
                  }}
                  isAdmin={false}
                  isPending={false}
                />
              ))
            )}
          </div>
        )}
      </div>

      {/* CONFIRM MODAL */}
      <ConfirmActionModal
        open={modal.open}
        title="Confirm Action"
        message={`Are you sure you want to ${modal.action} this item?`}
        onConfirm={confirmAction}
        onCancel={closeModal}
      />
      <AddFoundItemModal
  open={showAddFoundModal}
  onClose={() => setShowAddFoundModal(false)}
  onSubmit={handleAddFoundItem}
/>
<ReportLostItemModal
  open={showLostModal}
  onClose={() => setShowLostModal(false)}
  onSubmit={handleReportLost}
/>


    </div>
  );
};

export default LostFound;
