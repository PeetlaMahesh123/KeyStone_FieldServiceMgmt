import "./ActivityTimeline.css";

import { useEffect, useState } from "react";

type Activity = {
    id: number;
    title: string;
    description: string;
    time: string;
};

function ActivityTimeline() {

    const [activities] = useState<Activity[]>([]);

    useEffect(() => {

        // TODO:
        // Fetch activity timeline from backend
        //
        // Example:
        //
        // const loadActivities = async () => {
        //     try {
        //         const data = await getActivityTimeline();
        //         setActivities(data);
        //     } catch (error) {
        //         console.error(error);
        //     }
        // };
        //
        // loadActivities();

    }, []);

    return (

        <div className="activity-timeline">

            <h2>Activity Timeline</h2>

            {activities.length === 0 ? (

                <div className="empty-state">

                    <p>No Recent Activity</p>

                </div>

            ) : (

                activities.map((activity) => (

                    <div
                        key={activity.id}
                        className="timeline-item"
                    >

                        <div className="timeline-dot"></div>

                        <div className="timeline-content">

                            <h4>{activity.title}</h4>

                            <p>{activity.description}</p>

                            <span>{activity.time}</span>

                        </div>

                    </div>

                ))

            )}

        </div>

    );

}

export default ActivityTimeline;