import { useState } from "react";
import { X, GraduationCap, Shield, Users } from "lucide-react";
import { useModal } from "../context/ModalContext";
import "./LoginModal.css";
import { GoogleLogin } from "@react-oauth/google";

const ROLES = [
  { key: "STUDENT", label: "Student", icon: GraduationCap },
  { key: "SOCIETY_ADMIN", label: "Society Admin", icon: Users },
  { key: "LNF_ADMIN", label: "LNF Admin", icon: Shield },
  { key: "THAPAR_ADMIN", label: "Thapar Admin", icon: Shield },
];

export default function LoginModal() {
  const { isLoginOpen, closeLogin } = useModal();
  const [selectedRole, setSelectedRole] = useState("STUDENT");

  if (!isLoginOpen) return null;

  return (
    <div className="login-overlay" onClick={closeLogin}>
      <div className="login-modal" onClick={(e) => e.stopPropagation()}>
        <button className="login-close" onClick={closeLogin}>
          <X size={18} />
        </button>

        {/* ROLES */}
        <div className="login-left">
          <h2>Access Portal</h2>
          <p className="sub">Select your role</p>

          <div className="roles-list">
            {ROLES.map(({ key, label, icon: Icon }) => (
              <div
                key={key}
                className={`role-card ${selectedRole === key ? "active" : ""}`}
                onClick={() => setSelectedRole(key)}
              >
                <Icon size={20} />
                <p>{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="login-right">
          <h2>User Login</h2>
          <p className="sub">Continue with your Thapar Google account</p>

          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log("Google ID token:", credentialResponse);
            }}
            onError={() => {
              console.error("Google login failed");
            }}
            useOneTap={false}
          />
        </div>
      </div>
    </div>
  );
}
