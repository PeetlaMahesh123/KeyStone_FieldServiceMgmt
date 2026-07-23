import "./StatusChart.css";

import { useEffect, useState } from "react";

import {
    ResponsiveContainer,
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";

type StatusData = {
    status: string;
    count: number;
};

function StatusChart() {

    const [data] = useState<StatusData[]>([]);

    useEffect(() => {

        // TODO:
        // Fetch work order status statistics from backend
        //
        // Example:
        //
        // const loadStatusChart = async () => {
        //     try {
        //         const response = await getStatusChart();
        //         setData(response);
        //     } catch (error) {
        //         console.error(error);
        //     }
        // };
        //
        // loadStatusChart();

    }, []);

    if (data.length === 0) {

        return (

            <div className="status-chart">

                <div className="chart-header">

                    <h3>Work Order Status</h3>

                </div>

                <div
                    style={{
                        height: "350px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >

                    <p>No Status Data Available</p>

                </div>

            </div>

        );

    }

    return (

        <div className="status-chart">

            <div className="chart-header">

                <h3>Work Order Status</h3>

            </div>

            <ResponsiveContainer
                width="100%"
                height={350}
            >

                <BarChart data={data}>

                    <CartesianGrid strokeDasharray="3 3" />

                    <XAxis dataKey="status" />

                    <YAxis />

                    <Tooltip />

                    <Bar
                        dataKey="count"
                        fill="#2563eb"
                        radius={[5, 5, 0, 0]}
                    />

                </BarChart>

            </ResponsiveContainer>

        </div>

    );

}

export default StatusChart;