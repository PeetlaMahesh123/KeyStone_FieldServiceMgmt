import "./LowStockAlert.css";

import { useEffect, useState } from "react";

type LowStockPart = {
    id: number;
    part: string;
    quantity: number;
};

function LowStockAlert() {

    const [parts] = useState<LowStockPart[]>([]);

    useEffect(() => {

        // TODO:
        // Fetch low stock parts from backend
        //
        // Example:
        // getLowStockParts()
        //     .then(data => setParts(data))
        //     .catch(error => console.error(error));

    }, []);

    return (

        <div className="low-stock">

            <h2>Low Stock Alerts</h2>

            {parts.length === 0 ? (

                <div className="empty-state">

                    <p>No Low Stock Alerts</p>

                </div>

            ) : (

                parts.map((part) => (

                    <div
                        className="stock-card"
                        key={part.id}
                    >

                        <span>{part.part}</span>

                        <span>

                            {part.quantity} Left

                        </span>

                    </div>

                ))

            )}

        </div>

    );

}

export default LowStockAlert;