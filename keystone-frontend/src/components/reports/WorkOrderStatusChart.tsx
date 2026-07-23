import "./WorkOrderStatusChart.css";

import { useEffect, useState } from "react";

import {
    ResponsiveContainer,
    PieChart,
    Pie,
    Cell,
    Tooltip,
} from "recharts";

type WorkOrderStatus = {
    name: string;
    value: number;
};

const COLORS = [
    "#22c55e",
    "#3b82f6",
    "#f59e0b",
    "#ef4444",
];

function WorkOrderStatusChart() {

    const [data] = useState<WorkOrderStatus[]>([]);

    useEffect(() => {

        // TODO:
        // Fetch Work Order Status data from backend
        //
        // Example:
        //
        // const loadStatusChart = async () => {
        //     try {
        //         const response = await getWorkOrderStatusChart();
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

            <div className="chart-card">

                <h2>Work Order Status</h2>

                <div
                    style={{
                        height: "300px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >

                    <p>No Work Order Status Data Available</p>

                </div>

            </div>

        );

    }

    return (

        <div className="chart-card">

            <h2>Work Order Status</h2>

            <ResponsiveContainer
                width="100%"
                height={300}
            >

                <PieChart>

                    <Pie
                        data={data}
                        dataKey="value"
                        nameKey="name"
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        label
                    >

                        {data.map((_, index) => (

                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                            />

                        ))}

                    </Pie>

                    <Tooltip />

                </PieChart>

            </ResponsiveContainer>

        </div>

    );

}

export default WorkOrderStatusChart;