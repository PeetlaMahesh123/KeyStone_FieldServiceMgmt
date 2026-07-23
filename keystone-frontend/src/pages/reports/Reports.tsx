import "./Reports.css";

import MainLayout from "../../layouts/MainLayout";
import PageHeader from "../../components/common/PageHeader/PageHeader";

import ReportCards from "../../components/reports/ReportCards";
import RevenueChart from "../../components/reports/RevenueChart";
import WorkOrderStatusChart from "../../components/reports/WorkOrderStatusChart";
import TechnicianPerformance from "../../components/reports/TechnicianPerformance";

import InventoryReport from "../../components/reports/InventoryReport";
import CustomerReport from "../../components/reports/CustomerReport";
import ExportButtons from "../../components/reports/ExportButtons";

function Reports() {
    return (
        <MainLayout>
            <div className="reports-page">

                <PageHeader
                    title="Reports & Analytics"
                    subtitle="Business insights and performance"
                />

                <ReportCards />

                <div className="reports-grid">

                    <RevenueChart />

                    <WorkOrderStatusChart />

                    <TechnicianPerformance />

                    <InventoryReport />

                    <CustomerReport />

                </div>

                <ExportButtons />

            </div>
        </MainLayout>
    );
}

export default Reports;