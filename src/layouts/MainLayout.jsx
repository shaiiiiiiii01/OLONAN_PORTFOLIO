import { Outlet } from "react-router-dom";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

// Shared layout: Header on top, the current page in the middle (Outlet), Footer at the bottom.
export default function MainLayout() {
  return (
    <div className="layout">
      <Header />
      <main className="layout-main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
