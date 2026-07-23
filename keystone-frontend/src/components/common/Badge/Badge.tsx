import "./Badge.css";

type BadgeProps = {
    text: string;
    variant?: "success" | "danger" | "warning" | "info" | "secondary";
};

function Badge({
    text,
    variant = "info",
}: BadgeProps) {

    return (

        <span className={`badge ${variant}`}>

            {text}

        </span>

    );

}

export default Badge;