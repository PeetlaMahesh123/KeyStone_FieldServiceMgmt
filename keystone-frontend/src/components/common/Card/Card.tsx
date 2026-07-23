import "./Card.css";

type CardProps = {
    title?: string;
    children: React.ReactNode;
};

function Card({ title, children }: CardProps) {
    return (
        <div className="custom-card">

            {title && (
                <div className="card-header">
                    <h3>{title}</h3>
                </div>
            )}

            <div className="card-body">
                {children}
            </div>

        </div>
    );
}

export default Card;