import "./DashboardCard.css";

type DashboardCardProps = {
    title: string;
    value: number | string;
    variant: "blue" | "green" | "orange" | "red";
};

function DashboardCard({
    title,
    value,
    variant,
}: DashboardCardProps) {

    return (

        <div className={`dashboard-card ${variant}`}>

            <h4>{title}</h4>

            <h2>{value}</h2>

        </div>

    );

}

export default DashboardCard;