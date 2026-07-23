import "./RecentCustomers.css";

import { useEffect, useState } from "react";

type Customer = {
    id: number;
    company: string;
    city: string;
    date: string;
};

function RecentCustomers() {

    const [customers] = useState<Customer[]>([]);

    useEffect(() => {

        // TODO:
        // Fetch recent customers from backend
        //
        // Example:
        // getRecentCustomers()
        //     .then(data => setCustomers(data))
        //     .catch(error => console.error(error));

    }, []);

    return (

        <div className="recent-customers">

            <h2>Recent Customers</h2>

            {customers.length === 0 ? (

                <div className="empty-state">

                    <p>No Recent Customers</p>

                </div>

            ) : (

                customers.map((customer) => (

                    <div
                        key={customer.id}
                        className="customer-card"
                    >

                        <div>

                            <h4>{customer.company}</h4>

                            <p>{customer.city}</p>

                        </div>

                        <span>{customer.date}</span>

                    </div>

                ))

            )}

        </div>

    );

}

export default RecentCustomers;