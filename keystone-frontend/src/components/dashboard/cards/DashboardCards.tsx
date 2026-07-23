import "./DashboardCards.css";

import { useEffect, useState } from "react";

import DashboardCard from "./DashboardCard";

type DashboardStats = {
    totalWorkOrders: number;
    openWorkOrders: number;
    completedWorkOrders: number;
    totalTechnicians: number;
};

function DashboardCards() {

    const [stats] = useState<DashboardStats | null>(null);

    useEffect(() => {

        // TODO:
        // Fetch dashboard statistics from backend
        //
        // Example:
        //
        // const loadDashboardStats = async () => {
        //     try {
        //         const data = await getDashboardStats();
        //         setStats(data);
        //     } catch (error) {
        //         console.error(error);
        //     }
        // };
        //
        // loadDashboardStats();

    }, []);

    if (!stats) {

        return (

            <section className="dashboard-cards">

                <DashboardCard
                    title="Total Work Orders"
                    value={0}
                    variant="blue"
                />

                <DashboardCard
                    title="Open Work Orders"
                    value={0}
                    variant="orange"
                />

                <DashboardCard
                    title="Completed"
                    value={0}
                    variant="green"
                />

                <DashboardCard
                    title="Technicians"
                    value={0}
                    variant="red"
                />

            </section>

        );

    }

    return (

        <section className="dashboard-cards">

            <DashboardCard
                title="Total Work Orders"
                value={stats.totalWorkOrders}
                variant="blue"
            />

            <DashboardCard
                title="Open Work Orders"
                value={stats.openWorkOrders}
                variant="orange"
            />

            <DashboardCard
                title="Completed"
                value={stats.completedWorkOrders}
                variant="green"
            />

            <DashboardCard
                title="Technicians"
                value={stats.totalTechnicians}
                variant="red"
            />

        </section>

    );

}

export default DashboardCards;