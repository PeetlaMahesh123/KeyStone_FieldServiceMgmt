import "./MiniCalendar.css";

function MiniCalendar() {

    const today = new Date();

    return (

        <div className="mini-calendar">

            <h2>Calendar</h2>

            <div className="calendar-card">

                <h1>{today.getDate()}</h1>

                <h3>
                    {today.toLocaleString("default", {
                        month: "long",
                    })}
                </h3>

                <p>{today.getFullYear()}</p>

                <span>
                    {today.toLocaleDateString("default", {
                        weekday: "long",
                    })}
                </span>

            </div>

        </div>

    );

}

export default MiniCalendar;