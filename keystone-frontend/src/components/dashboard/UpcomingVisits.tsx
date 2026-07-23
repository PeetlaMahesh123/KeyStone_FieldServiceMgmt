import "./UpcomingVisits.css";

import { useEffect, useState } from "react";

type Visit = {
    id: number;
    customer: string;
    site: string;
    technician: string;
    date: string;
    time: string;
};

function UpcomingVisits() {

    const [visits] = useState<Visit[]>([]);

    useEffect(() => {

        // TODO:
        // Fetch upcoming visits from backend
        //
        // Example:
        // getUpcomingVisits()
        //     .then(data => setVisits(data))
        //     .catch(error => console.error(error));

    }, []);

    return (

        <div className="upcoming-visits">

            <div className="section-header">

                <h2>Upcoming Visits</h2>

            </div>

            {visits.length === 0 ? (

                <div className="empty-state">

                    <p>No Upcoming Visits</p>

                </div>

            ) : (

                visits.map((visit) => (

                    <div
                        className="visit-card"
                        key={visit.id}
                    >

                        <h4>{visit.customer}</h4>

                        <p>{visit.site}</p>

                        <p>{visit.technician}</p>

                        <span>

                            {visit.date} • {visit.time}

                        </span>

                    </div>

                ))

            )}

        </div>

    );

}

export default UpcomingVisits;