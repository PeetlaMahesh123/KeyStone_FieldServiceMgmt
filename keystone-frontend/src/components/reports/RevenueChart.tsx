import "./RevenueChart.css";

import { useEffect, useState } from "react";

import {
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
} from "recharts";

type RevenueData = {
    month: string;
    revenue: number;
};

function RevenueChart() {

    const [data] = useState<RevenueData[]>([]);

    useEffect(() => {

        // TODO:
        // Fetch monthly revenue from backend
        //
        // Example:
        //
        // const loadRevenueChart = async () => {
        //     try {
        //         const response = await getRevenueChart();
        //         setData(response);
        //     } catch (error) {
        //         console.error(error);
        //     }
        // };
        //
        // loadRevenueChart();

    }, []);

    if (data.length === 0) {

        return (

            <div className="chart-card">

                <h2>Monthly Revenue</h2>

                <div
                    style={{
                        height: "300px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >

                    <p>No Revenue Data Available</p>

                </div>

            </div>

        );

    }

    return (

        <div className="chart-card">

            <h2>Monthly Revenue</h2>

            <ResponsiveContainer
                width="100%"
                height={300}
            >

                <LineChart data={data}>

                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="month" />

                    <YAxis />

                    <Tooltip />

                    <Line
                        type="monotone"
                        dataKey="revenue"
                        stroke="#2563eb"
                        strokeWidth={3}
                    />

                </LineChart>

            </ResponsiveContainer>

        </div>

    );

}

export default RevenueChart;