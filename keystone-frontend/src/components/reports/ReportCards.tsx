import "./ReportCards.css";

import { useEffect, useState } from "react";

type ReportSummary = {
    totalRevenue: number;
    completedJobs: number;
    totalCustomers: number;
    totalTechnicians: number;
};

function ReportCards() {

    const [report] = useState<ReportSummary | null>(null);

    useEffect(() => {

        // TODO:
        // Fetch report summary from backend
        //
        // Example:
        //
        // const loadReportSummary = async () => {
        //     try {
        //         const data = await getReportSummary();
        //         setReport(data);
        //     } catch (error) {
        //         console.error(error);
        //     }
        // };
        //
        // loadReportSummary();

    }, []);

    if (!report) {

        return (

            <div className="report-cards">

                <div className="report-card">

                    <h2>Total Revenue</h2>

                    <h1>--</h1>

                </div>

                <div className="report-card">

                    <h2>Completed Jobs</h2>

                    <h1>--</h1>

                </div>

                <div className="report-card">

                    <h2>Customers</h2>

                    <h1>--</h1>

                </div>

                <div className="report-card">

                    <h2>Technicians</h2>

                    <h1>--</h1>

                </div>

            </div>

        );

    }

    return (

        <div className="report-cards">

            <div className="report-card">

                <h2>Total Revenue</h2>

                <h1>{report.totalRevenue}</h1>

            </div>

            <div className="report-card">

                <h2>Completed Jobs</h2>

                <h1>{report.completedJobs}</h1>

            </div>

            <div className="report-card">

                <h2>Customers</h2>

                <h1>{report.totalCustomers}</h1>

            </div>

            <div className="report-card">

                <h2>Technicians</h2>

                <h1>{report.totalTechnicians}</h1>

            </div>

        </div>

    );

}

export default ReportCards;