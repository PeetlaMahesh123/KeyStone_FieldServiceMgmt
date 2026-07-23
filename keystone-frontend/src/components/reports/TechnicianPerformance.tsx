import "./TechnicianPerformance.css";

import { useEffect, useState } from "react";

type TechnicianPerformance = {
    id: number;
    technicianName: string;
    completedJobs: number;
};

function TechnicianPerformance() {

    const [technicians] = useState<TechnicianPerformance[]>([]);

    useEffect(() => {

        // TODO:
        // Fetch technician performance from backend
        //
        // Example:
        //
        // const loadTechnicianPerformance = async () => {
        //     try {
        //         const data = await getTechnicianPerformance();
        //         setTechnicians(data);
        //     } catch (error) {
        //         console.error(error);
        //     }
        // };
        //
        // loadTechnicianPerformance();

    }, []);

    return (

        <div className="report-box">

            <h2>Top Technicians</h2>

            {technicians.length === 0 ? (

                <div className="empty-state">

                    <p>No Technician Performance Data Available</p>

                </div>

            ) : (

                <table>

                    <thead>

                        <tr>

                            <th>Name</th>

                            <th>Completed Jobs</th>

                        </tr>

                    </thead>

                    <tbody>

                        {technicians.map((technician) => (

                            <tr key={technician.id}>

                                <td>{technician.technicianName}</td>

                                <td>{technician.completedJobs}</td>

                            </tr>

                        ))}

                    </tbody>

                </table>

            )}

        </div>

    );

}

export default TechnicianPerformance;