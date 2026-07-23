import { useEffect, useState } from "react";

import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer
} from "recharts";

import "./PriorityChart.css";

type PriorityData = {
    name: string;
    value: number;
};

const COLORS = [
    "#dc2626",
    "#f97316",
    "#eab308",
    "#22c55e"
];

function PriorityChart() {

    const [data] = useState<PriorityData[]>([]);

    useEffect(() => {

        // TODO:
        // Fetch Priority Chart data from backend
        //
        // Example:
        // getPriorityChart()
        //     .then(data => setData(data))
        //     .catch(error => console.error(error));

    }, []);

    if (data.length === 0) {

        return (

            <div className="priority-chart">

                <h2>Work Order Priority</h2>

                <div
                    style={{
                        height: "300px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >

                    <p>No Priority Data Available</p>

                </div>

            </div>

        );

    }

    return (

        <div className="priority-chart">

            <h2>Work Order Priority</h2>

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
                                key={index}
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

export default PriorityChart;