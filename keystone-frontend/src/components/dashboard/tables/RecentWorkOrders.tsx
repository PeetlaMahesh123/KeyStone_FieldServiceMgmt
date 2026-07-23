import "./RecentWorkOrders.css";

import { useEffect, useState } from "react";

type RecentWorkOrder = {
    id: string;
    customer: string;
    technician: string;
    status: string;
};

function RecentWorkOrders() {

    const [workOrders] = useState<RecentWorkOrder[]>([]);

    useEffect(() => {

        // TODO:
        // Fetch recent work orders from backend
        //
        // Example:
        // getRecentWorkOrders()
        //     .then(data => setWorkOrders(data))
        //     .catch(error => console.error(error));

    }, []);

    return (

        <div className="recent-orders">

            <div className="recent-header">

                <h3>Recent Work Orders</h3>

            </div>

            {workOrders.length === 0 ? (

                <div className="empty-state">

                    <p>No Recent Work Orders</p>

                </div>

            ) : (

                <table>

                    <thead>

                        <tr>

                            <th>ID</th>

                            <th>Customer</th>

                            <th>Technician</th>

                            <th>Status</th>

                        </tr>

                    </thead>

                    <tbody>

                        {workOrders.map((order) => (

                            <tr key={order.id}>

                                <td>{order.id}</td>

                                <td>{order.customer}</td>

                                <td>{order.technician}</td>

                                <td>{order.status}</td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            )}

        </div>

    );

}

export default RecentWorkOrders;