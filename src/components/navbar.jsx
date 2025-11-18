import { useState } from "react";
import Sidebar from "./sidebar";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <>
      <nav className="text-slate-700  shadow-sm shadow-slate-400 p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">100 Ladrillos</h1>
        <button
          onClick={toggleSidebar}
          className="bg-slate-400 hover:bg-slate-500 px-3 py-1 rounded"
        >
          ☰
        </button>
      </nav>

      <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />

      {sidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-50 z-40"
        />
      )}
    </>
  );
}
