import "./Toast.css";

type ToastProps = {
    message: string;
    type?: "success" | "error";
};

function Toast({
    message,
    type = "success",
}: ToastProps) {

    return (

        <div className={`toast ${type}`}>

            {message}

        </div>

    );

}

export default Toast;