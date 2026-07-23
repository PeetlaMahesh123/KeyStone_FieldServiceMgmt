import "./RevenueSummary.css";

import { useEffect, useState } from "react";

type Revenue = {
    today: string;
    weekly: string;
    monthly: string;
    yearly: string;
};

function RevenueSummary() {

    const [revenue] = useState<Revenue | null>(null);

    useEffect(() => {

        // TODO:
        // Fetch revenue summary from backend
        //
        // Example:
        // getRevenueSummary()
        //     .then(data => setRevenue(data))
        //     .catch(error => console.error(error));

    }, []);

    if (!revenue) {

        return (

            <div className="revenue-summary">

                <h2>Revenue Summary</h2>

                <div className="revenue-grid">

                    <p>No Revenue Data Available</p>

                </div>

            </div>

        );

    }

    return (

        <div className="revenue-summary">

            <h2>Revenue Summary</h2>

            <div className="revenue-grid">

                <div className="revenue-card">

                    <h3>Today</h3>

                    <h1>{revenue.today}</h1>

                </div>

                <div className="revenue-card">

                    <h3>This Week</h3>

                    <h1>{revenue.weekly}</h1>

                </div>

                <div className="revenue-card">

                    <h3>This Month</h3>

                    <h1>{revenue.monthly}</h1>

                </div>

                <div className="revenue-card">

                    <h3>This Year</h3>

                    <h1>{revenue.yearly}</h1>

                </div>

            </div>

        </div>

    );

}

export default RevenueSummary;