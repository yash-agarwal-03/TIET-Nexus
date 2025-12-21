import { Outlet } from "react-router-dom";
import Layout from "../components/Layout";
import LoginModal from "../components/LoginModal";

export default function PublicLayout() {
  return (
    <>
      <Layout>
        <Outlet />
      </Layout>

      {/* Global, persistent */}
      <LoginModal />
    </>
  );
}
