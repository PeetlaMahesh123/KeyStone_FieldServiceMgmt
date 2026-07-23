import "./Notifications.css";

import { useEffect, useState } from "react";

type Notification = {
    id: number;
    title: string;
    message: string;
    time: string;
};

function Notifications() {

    const [notifications] = useState<Notification[]>([]);

    useEffect(() => {

        // TODO:
        // Fetch notifications from backend
        //
        // Example:
        // getNotifications()
        //     .then(data => setNotifications(data))
        //     .catch(error => console.error(error));

    }, []);

    return (

        <div className="notifications">

            <h2>Notifications</h2>

            {notifications.length === 0 ? (

                <div className="empty-state">

                    <p>No Notifications Available</p>

                </div>

            ) : (

                notifications.map((notification) => (

                    <div
                        className="notification-card"
                        key={notification.id}
                    >

                        <h4>{notification.title}</h4>

                        <p>{notification.message}</p>

                        <span>{notification.time}</span>

                    </div>

                ))

            )}

        </div>

    );

}

export default Notifications;