import "./SearchBar.css";

type SearchBarProps = {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
};

function SearchBar({
    value,
    onChange,
    placeholder = "Search...",
}: SearchBarProps) {

    return (

        <div className="search-bar">

            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
            />

        </div>

    );

}

export default SearchBar;