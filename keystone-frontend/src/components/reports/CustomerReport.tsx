import "./CustomerReport.css";

import { useEffect, useState } from "react";

type CustomerReportItem = {
    id: number;
    customerName: string;
    totalSites: number;
};

function CustomerReport() {

    const [customers] = useState<CustomerReportItem[]>([]);

    useEffect(() => {

        // TODO:
        // Fetch Customer Report from backend
        //
        // Example:
        //
        // const loadCustomerReport = async () => {
        //     try {
        //         const data = await getCustomerReport();
        //         setCustomers(data);
        //     } catch (error) {
        //         console.error(error);
        //     }
        // };
        //
        // loadCustomerReport();

    }, []);

    return (

        <div className="report-box">

            <h2>Top Customers</h2>

            {customers.length === 0 ? (

                <div className="empty-state">

                    <p>No Customer Report Available</p>

                </div>

            ) : (

                <table>

                    <thead>

                        <tr>

                            <th>Customer</th>

                            <th>Sites</th>

                        </tr>

                    </thead>

                    <tbody>

                        {customers.map((customer) => (

                            <tr key={customer.id}>

                                <td>{customer.customerName}</td>

                                <td>{customer.totalSites}</td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            )}

        </div>

    );

}

export default CustomerReport;