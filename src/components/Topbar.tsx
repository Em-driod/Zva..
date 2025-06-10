import React from "react";
import {
  FaSearch,
  FaGlobe,
  FaThLarge,
  FaBell,
  FaCog,
  FaBars,
} from "react-icons/fa";
import "./Topbar.css";

interface TopbarProps {
  onMenuClick?: () => void;
  showMenuButton?: boolean;
}

const Topbar: React.FC<TopbarProps> = ({
  onMenuClick,
  showMenuButton = false,
}) => {
  return (
    <div
      style={{
        width: "100vw",
        height: "70px",
        backgroundColor: "black",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 30px",
        borderBottom: "1px solid #eee",
        position: "fixed",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Left side: menu button always visible, greeting hidden on mobile */}
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        {showMenuButton && (
          <button
            onClick={onMenuClick}
            style={{
              background: "none",
              border: "none",
              color: "red",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
            aria-label="Open menu"
          >
            <FaBars size={20} />
          </button>
        )}

        {/* Greeting hidden on mobile */}
        <div className="hide-on-mobile" style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <h2
            style={{
              color: "red",
              fontSize: "20px",
              fontWeight: 600,
              margin: 0,
            }}
          >
            Welcome TOFI 👋
          </h2>
          <span style={{ color: "#888", fontSize: "14px" }}>
            Todays Happening
          </span>
        </div>
      </div>

      {/* Search bar - hidden on mobile */}
      <div
        className="hide-on-mobile"
        style={{
          display: "flex",
          alignItems: "center",
          border: "1px solid red",
          borderRadius: "20px",
          padding: "6px 12px",
          backgroundColor: "#fff",
          margin: "0 10px",
          flex: 1,
          maxWidth: "400px",
        }}
      >
        <FaSearch style={{ color: "red", fontSize: "14px" }} />
        <input
          type="text"
          placeholder="Search"
          style={{
            border: "none",
            outline: "none",
            marginLeft: "8px",
            fontSize: "14px",
            color: "black",
            backgroundColor: "transparent",
            width: "100%",
          }}
        />
      </div>

      {/* Right: Icons + Profile */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        {/* Language Icon */}
        <div style={{ color: "red", fontWeight: 600, fontSize: "14px" }}>
          EN
        </div>

        {/* Icon Buttons */}
        {[FaThLarge, FaBell, FaCog].map((Icon, index) => (
          <Icon
            key={index}
            style={{
              color: "red",
              fontSize: "18px",
              cursor: "pointer",
            }}
          />
        ))}

        {/* Avatar + Info */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src="https://i.pravatar.cc/300"
            alt="admin avatar"
            style={{
              width: "35px",
              height: "35px",
              borderRadius: "50%",
              objectFit: "cover",
              cursor: "pointer",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              lineHeight: "1.2",
            }}
          >
            <span style={{ fontSize: "14px", color: "#000", fontWeight: 600 }}>
              Alex Mora
            </span>
            <span style={{ fontSize: "12px", color: "red" }}>Admin</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
