import "./Dashboard.css";

import MainLayout from "../../layouts/MainLayout";

import DashboardCards from "../../components/dashboard/cards/DashboardCards";
import StatusChart from "../../components/dashboard/charts/StatusChart";
import RecentWorkOrders from "../../components/dashboard/tables/RecentWorkOrders";
import UpcomingVisits from "../../components/dashboard/UpcomingVisits";
import QuickActions from "../../components/dashboard/actions/QuickActions";
import TechnicianAvailability from "../../components/dashboard/TechnicianAvailability";
import LowStockAlert from "../../components/dashboard/LowStockAlert";
import RecentCustomers from "../../components/dashboard/RecentCustomers";
import Notifications from "../../components/dashboard/Notifications";
import ActivityTimeline from "../../components/dashboard/ActivityTimeline";
import RevenueSummary from "../../components/dashboard/RevenueSummary";
import PriorityChart from "../../components/dashboard/PriorityChart";
import MiniCalendar from "../../components/dashboard/MiniCalendar";
import WeatherWidget from "../../components/dashboard/WeatherWidget";

function Dashboard() {

    return (

        <MainLayout>

            <div className="dashboard">

                <h1>Dashboard</h1>

                <p>Welcome to Project KEYSTONE</p>

                <DashboardCards />

<div className="dashboard-grid">

    <StatusChart />
    <PriorityChart />

    <RevenueSummary />
    <WeatherWidget />

    <RecentWorkOrders />
    <UpcomingVisits />

    <TechnicianAvailability />
    <LowStockAlert />

    <RecentCustomers />
    <Notifications />

</div>

<div className="full-width">

    <ActivityTimeline />

</div>

<div className="dashboard-grid">

    <MiniCalendar />

    <QuickActions />

</div>
            </div>

        </MainLayout>

    );

}

export default Dashboard;