import "./InventoryReport.css";

import { useEffect, useState } from "react";

type InventoryReportItem = {
    id: number;
    part: string;
    quantity: number;
    status: string;
};

function InventoryReport() {

    const [inventory] = useState<InventoryReportItem[]>([]);

    useEffect(() => {

        // TODO:
        // Fetch inventory report from backend
        //
        // Example:
        //
        // const loadInventoryReport = async () => {
        //     try {
        //         const data = await getInventoryReport();
        //         setInventory(data);
        //     } catch (error) {
        //         console.error(error);
        //     }
        // };
        //
        // loadInventoryReport();

    }, []);

    return (

        <div className="report-box">

            <h2>Inventory Report</h2>

            {inventory.length === 0 ? (

                <div className="empty-state">

                    <p>No Inventory Report Available</p>

                </div>

            ) : (

                <table>

                    <thead>

                        <tr>

                            <th>Part</th>

                            <th>Quantity</th>

                            <th>Status</th>

                        </tr>

                    </thead>

                    <tbody>

                        {inventory.map((item) => (

                            <tr key={item.id}>

                                <td>{item.part}</td>

                                <td>{item.quantity}</td>

                                <td>{item.status}</td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            )}

        </div>

    );

}

export default InventoryReport;