import "./Select.css";

type SelectOption = {
    label: string;
    value: string;
};

type SelectProps = {
    label?: string;
    name: string;
    value?: string;
    options: SelectOption[];
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

function Select({
    label,
    name,
    value,
    options,
    onChange,
}: SelectProps) {

    return (

        <div className="select-group">

            {label && (
                <label htmlFor={name}>
                    {label}
                </label>
            )}

            <select
                id={name}
                name={name}
                value={value}
                onChange={onChange}
            >

                {options.map((option) => (

                    <option
                        key={option.value}
                        value={option.value}
                    >
                        {option.label}
                    </option>

                ))}

            </select>

        </div>

    );

}

export default Select;