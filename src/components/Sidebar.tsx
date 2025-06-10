import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaHome, FaUsers, FaCog, FaEnvelope, FaStar,
  FaStore, FaPodcast, FaBell, FaLock, FaMusic,
  FaMoneyBillWave, FaComments, FaVideo, FaRobot, FaChevronDown
} from "react-icons/fa";

const SidebarGroup = ({
  title,
  children,
  isOpen,
  toggle,
}: {
  title: string;
  children: React.ReactNode;
  isOpen: boolean;
  toggle: () => void;
}) => (
  <div style={{ marginBottom: "10px" }}>
    <div
      onClick={toggle}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        cursor: "pointer",
        padding: "10px 16px",
        backgroundColor: "#111",
        color: "red",
        fontWeight: "bold",
        borderRadius: "6px",
      }}
    >
      <span>{title}</span>
      <FaChevronDown style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0)", transition: "0.2s" }} />
    </div>
    <div
      style={{
        display: isOpen ? "flex" : "none",
        flexDirection: "column",
        marginLeft: "10px",
        marginTop: "8px",
        gap: "6px",
      }}
    >
      {children}
    </div>
  </div>
);

const SidebarLink = ({ to, icon, label, active }: any) => (
  <Link
    to={to}
    style={{
      display: "flex",
      alignItems: "center",
      gap: "10px",
      padding: "8px 16px",
      borderRadius: "8px",
      textDecoration: "none",
      color: active ? "red" : "#ffffff",
      backgroundColor: active ? "#111" : "transparent",
      borderLeft: active ? "4px solid #ff0000" : "4px solid transparent",
      fontWeight: active ? "bold" : "normal",
      cursor: "pointer",
      position: "relative",
      transition: "all 0.2s ease",
    }}
    onMouseEnter={(e) =>
      (e.currentTarget.style.backgroundColor = active ? "#222" : "#111")
    }
    onMouseLeave={(e) =>
      (e.currentTarget.style.backgroundColor = active ? "#111" : "transparent")
    }
  >
    {icon}
    <span>{label}</span>
  </Link>
);

const AdminSidebar: React.FC = () => {
  const location = useLocation();

  // Dropdown states
  const [openMgmt, setOpenMgmt] = useState(true);
  const [openSystem, setOpenSystem] = useState(false);
  const [openMarketing, setOpenMarketing] = useState(false);
  const [openMedia, setOpenMedia] = useState(false);

  return (
    <div
      style={{
        width: "250px",
        height: "100vh",
        backgroundColor: "#202020 ",
        color: "#fff",
        padding: "20px",
        position: "fixed",
        top: 0,
        left: 0,
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        borderRight: "2px solid #444",
      }}
    >
      <h2
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          marginBottom: "30px",
          textAlign: "center",
          color: "red",
          marginTop: "40px",
          backgroundColor: "black",
          position: "fixed",
          top: "0px",
          zIndex: 1000,
          width: "15%",
          textShadow: "1px 1px 3px rgba(255, 0, 0, 0.7)",
        }}
      >
        
      </h2>

      <div style={{ marginTop: "100px", display: "flex", flexDirection: "column", gap: "10px" }}>
        {/* Management Group */}
        <SidebarGroup
          title="Management"
          isOpen={openMgmt}
          toggle={() => setOpenMgmt(!openMgmt)}
        >
          <SidebarLink to="/admin/content-management" label="Content Management" icon={<FaHome />} active={location.pathname === "/admin/content-management"} />
          <SidebarLink to="/admin/artist-talent-management" label="Artist & Talent" icon={<FaMusic />} active={location.pathname === "/admin/artist-talent-management"} />
          <SidebarLink to="/admin/user-management" label="User Management" icon={<FaUsers />} active={location.pathname === "/admin/user-management"} />
          <SidebarLink to="/admin/event-management" label="Event Management" icon={<FaVideo />} active={location.pathname === "/admin/event-management"} />
          <SidebarLink to="/admin/monetization-management" label="Monetization" icon={<FaMoneyBillWave />} active={location.pathname === "/admin/monetization-management"} />
          <SidebarLink to="/admin/podcast-management" label="Podcast Management" icon={<FaPodcast />} active={location.pathname === "/admin/podcast-management"} />
        </SidebarGroup>

        {/* System Tools Group */}
        <SidebarGroup
          title="System Tools"
          isOpen={openSystem}
          toggle={() => setOpenSystem(!openSystem)}
        >
          <SidebarLink to="/admin/notification-system" label="Notifications" icon={<FaBell />} active={location.pathname === "/admin/notification-system"} />
          <SidebarLink to="/admin/security-settings" label="Security Settings" icon={<FaCog />} active={location.pathname === "/admin/security-settings"} />
          <SidebarLink to="/admin/ai-recommendations" label="AI Recommendations" icon={<FaRobot />} active={location.pathname === "/admin/ai-recommendations"} />
        </SidebarGroup>

        {/* Marketing Group */}
        <SidebarGroup
          title="Marketing"
          isOpen={openMarketing}
          toggle={() => setOpenMarketing(!openMarketing)}
        >
          <SidebarLink to="/admin/marketing-promotions" label="Promotions" icon={<FaEnvelope />} active={location.pathname === "/admin/marketing-promotions"} />
          <SidebarLink to="/admin/feedback-reviews" label="Feedback & Reviews" icon={<FaComments />} active={location.pathname === "/admin/feedback-reviews"} />
          <SidebarLink to="/admin/internal-communication" label="Internal Communication" icon={<FaEnvelope />} active={location.pathname === "/admin/internal-communication"} />
        </SidebarGroup>

        {/* Media & Engagement */}
        <SidebarGroup
          title="Media & Engagement"
          isOpen={openMedia}
          toggle={() => setOpenMedia(!openMedia)}
        >
          <SidebarLink to="/admin/rights-licensing" label="Rights & Licensing" icon={<FaLock />} active={location.pathname === "/admin/rights-licensing"} />
          <SidebarLink to="/admin/casting-audition" label="Casting & Audition" icon={<FaStar />} active={location.pathname === "/admin/casting-audition"} />
          <SidebarLink to="/admin/merchandise-store" label="Merchandise Store" icon={<FaStore />} active={location.pathname === "/admin/merchandise-store"} />
        </SidebarGroup>
      </div>
    </div>
  );
};

export default AdminSidebar;

