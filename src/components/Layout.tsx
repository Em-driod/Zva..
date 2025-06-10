import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div style={{ display: "flex", height: "100vh", width: "100vw", overflow: "hidden", backgroundColor: "black" }}>
      {/* Desktop Sidebar - visible on large screens, hidden on mobile */}
      <div style={{ display: window.innerWidth >= 1024 ? "block" : "none" }}>
        <Sidebar />
      </div>

      {/* Mobile Sidebar - appears when menu button is clicked */}
      {mobileSidebarOpen && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1000,
          display: window.innerWidth < 1024 ? "block" : "none"
        }}>
          <div 
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0,0,0,0.5)"
            }} 
            onClick={() => setMobileSidebarOpen(false)}
          />
          <div style={{
            position: "relative",
            height: "100%",
            width: "275px",
            backgroundColor: "white",
            boxShadow: "2px 0 10px rgba(0,0,0,0.1)"
          }}>
            <Sidebar />
            <button
              style={{
                position: "absolute",
                top: "20px",
                right: "20px",
                color: "#666",
                background: "none",
                border: "none",
                fontSize: "20px",
                cursor: "pointer"
              }}
              onClick={() => setMobileSidebarOpen(false)}
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
        backgroundColor: "white",
        overflowY: "auto"
      }}>
        <Topbar 
          onMenuClick={() => setMobileSidebarOpen(!mobileSidebarOpen)} 
          showMenuButton={window.innerWidth < 1024} 
        />
        
        <main style={{
          padding: "20px",
          backgroundColor: "white",
          minHeight: "calc(100vh - 70px)",
          marginLeft: window.innerWidth >= 1024 ? "275px" : "0",
          width: window.innerWidth >= 1024 ? "calc(100vw - 275px)" : "100vw",
          marginTop: "70px" // To account for fixed Topbar
        }}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;