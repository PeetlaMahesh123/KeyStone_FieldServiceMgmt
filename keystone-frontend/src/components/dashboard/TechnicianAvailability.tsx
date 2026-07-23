import "./TechnicianAvailability.css";

import { useEffect, useState } from "react";

type TechnicianAvailability = {
    id: number;
    name: string;
    status: "Available" | "Busy" | "On Leave";
};

function TechnicianAvailability() {

    const [technicians] = useState<TechnicianAvailability[]>([]);

    useEffect(() => {

        // TODO:
        // Fetch technician availability from backend
        //
        // Example:
        // getTechnicians()
        //     .then(data => setTechnicians(data))
        //     .catch(error => console.error(error));

    }, []);

    return (

        <div className="technician-availability">

            <h2>Technician Availability</h2>

            {technicians.length === 0 ? (

                <div className="empty-state">

                    <p>No Technician Data Available</p>

                </div>

            ) : (

                technicians.map((tech) => (

                    <div
                        key={tech.id}
                        className="tech-card"
                    >

                        <span>{tech.name}</span>

                        <span
                            className={
                                tech.status === "Available"
                                    ? "available"
                                    : tech.status === "Busy"
                                    ? "busy"
                                    : "leave"
                            }
                        >
                            {tech.status}
                        </span>

                    </div>

                ))

            )}

        </div>

    );

}

export default TechnicianAvailability;