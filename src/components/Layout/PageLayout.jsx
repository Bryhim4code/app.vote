import React, { useState } from "react";
import Topbar from "./topbar/Topbar";
import Sidebar from "./sidebar/Sidebar";

export default function PageLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <Topbar onMenuClick={() => setSidebarOpen(true)} />
      <div className="layout-body">
        <Sidebar isOpen={sidebarOpen} onOpen={() => setSidebarOpen(true)} onClose={() => setSidebarOpen(false)} />
        <div className="page-content fade-in">
          {children}
        </div>
      </div>
    </div>
  );
}
