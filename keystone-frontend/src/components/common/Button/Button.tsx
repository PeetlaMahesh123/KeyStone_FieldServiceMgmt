import "./Button.css";

type ButtonProps = {
    text: string;
    onClick?: () => void;
    type?: "button" | "submit" | "reset";
    variant?:
        | "primary"
        | "secondary"
        | "success"
        | "warning"
        | "danger";
};

function Button({
    text,
    onClick,
    type = "button",
    variant = "primary",
}: ButtonProps) {

    return (
        <button
            type={type}
            className={`btn ${variant}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
}

export default Button;