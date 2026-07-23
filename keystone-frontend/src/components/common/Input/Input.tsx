import "./Input.css";

type InputProps = {
    label?: string;
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name?: string;
    required?: boolean;
};

function Input({
    label,
    type = "text",
    placeholder,
    value,
    onChange,
    name,
    required = false,
}: InputProps) {
    return (
        <div className="input-group">

            {label && <label>{label}</label>}

            <input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                name={name}
                required={required}
            />

        </div>
    );
}

export default Input;