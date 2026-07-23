import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaTachometerAlt,
  FaUsers,
  FaBuilding,
  FaClipboardList,
  FaTools,
  FaBoxes,
  FaChartBar,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

import "./Sidebar.css";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  const menuItems = [
    {
      path: "/dashboard",
      icon: <FaTachometerAlt />,
      label: "Dashboard",
    },
    {
      path: "/customers",
      icon: <FaUsers />,
      label: "Customers",
    },
    {
      path: "/sites",
      icon: <FaBuilding />,
      label: "Sites",
    },
    {
      path: "/work-orders",
      icon: <FaClipboardList />,
      label: "Work Orders",
    },
    {
      path: "/technicians",
      icon: <FaTools />,
      label: "Technicians",
    },
    {
      path: "/inventory",
      icon: <FaBoxes />,
      label: "Inventory",
    },
    {
      path: "/reports",
      icon: <FaChartBar />,
      label: "Reports",
    },
    {
      path: "/settings",
      icon: <FaCog />,
      label: "Settings",
    },
  ];

  return (
    <>
      {/* Toggle Button */}
      <button
        className="menu-toggle"
        onClick={toggleSidebar}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="sidebar-overlay"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar */}
      <aside className={`sidebar ${isOpen ? "open" : ""}`}>

        {/* Logo */}

        <div className="sidebar-logo">

          <h2>KEYSTONE</h2>

          <p>Field Service Management</p>

        </div>

        {/* Navigation */}

        <nav className="sidebar-menu">

          {menuItems.map((item) => (

            <NavLink
              key={item.path}
              to={item.path}
              onClick={closeSidebar}
              className={({ isActive }) =>
                isActive
                  ? "menu-item active"
                  : "menu-item"
              }
            >

              {item.icon}

              <span>{item.label}</span>

            </NavLink>

          ))}

        </nav>

        {/* Footer */}

        <div className="sidebar-footer">

          <button className="logout-btn">

            <FaSignOutAlt />

            <span>Logout</span>

          </button>

        </div>

      </aside>
    </>
  );
}

export default Sidebar;