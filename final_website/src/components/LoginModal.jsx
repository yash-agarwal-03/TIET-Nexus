import { useState } from "react";
import { X, GraduationCap, Shield, Users } from "lucide-react";
import { useModal } from "../context/ModalContext";
import "./LoginModal.css";
import { GoogleLogin } from "@react-oauth/google";
import { useAuth } from "../context/AuthContext";
import { googleLogin } from "../api/auth.api";
const ROLES = [
  { key: "STUDENT", label: "Student", icon: GraduationCap },
  { key: "SOCIETY_ADMIN", label: "Society Admin", icon: Users },
  { key: "LNF_ADMIN", label: "Lost & Found Admin", icon: Shield },
  { key: "THAPAR_ADMIN", label: "Thapar Admin", icon: Shield },
];

export default function LoginModal() {
  const { isLoginOpen, closeLogin } = useModal();
  const [selectedRole, setSelectedRole] = useState("STUDENT");
  const { login } = useAuth();

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
            onSuccess={async (credentialResponse) => {
              try {
                const data = await googleLogin(
                  credentialResponse.credential,
                  selectedRole
                );

                login(data.token);
                closeLogin();
              } catch (err) {
                alert(err.message || "Login failed");
              }
            }}
            onError={() => {
              alert("Google login failed");
            }}
          />
        </div>
      </div>
    </div>
  );
}
