import "./Topbar.css";

import {
    FaBell,
    FaSearch,
    FaUserCircle
} from "react-icons/fa";

import { useEffect, useState } from "react";

type UserInfo = {
    name: string;
    role: string;
};

function Topbar() {

    const [pageTitle] = useState("");

    const [pageSubtitle] = useState("");

    const [notificationCount] = useState(0);

    const [user] = useState<UserInfo>({
        name: "",
        role: "",
    });

    useEffect(() => {

        // TODO:
        // Load logged-in user details
        // Load notification count
        // Load page title if required

    }, []);

    return (

        <header className="topbar">

            <div className="topbar-left">

                <h1 className="page-title">

                    {pageTitle || "Dashboard"}

                </h1>

                <p className="page-subtitle">

                    {pageSubtitle || "Welcome"}

                </p>

            </div>

            <div className="topbar-center">

                <div className="search-box">

                    <FaSearch className="search-icon" />

                    <input
                        type="text"
                        placeholder="Search..."
                    />

                </div>

            </div>

            <div className="topbar-right">

                <button className="notification-btn">

                    <FaBell />

                    {notificationCount > 0 && (

                        <span className="notification-badge">

                            {notificationCount}

                        </span>

                    )}

                </button>

                <div className="profile">

                    <FaUserCircle className="profile-icon" />

                    <div className="profile-info">

                        <h4>

                            {user.name || "User"}

                        </h4>

                        <p>

                            {user.role || "Role"}

                        </p>

                    </div>

                </div>

            </div>

        </header>

    );

}

export default Topbar;