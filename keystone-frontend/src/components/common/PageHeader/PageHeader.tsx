import "./PageHeader.css";

import Button from "../Button/Button";

type PageHeaderProps = {
    title: string;
    subtitle?: string;
    buttonText?: string;
    onButtonClick?: () => void;
};

function PageHeader({
    title,
    subtitle,
    buttonText,
    onButtonClick,
}: PageHeaderProps) {
    return (
        <div className="page-header">

            <div className="page-header-text">

                <h1>{title}</h1>

                {subtitle && <p>{subtitle}</p>}

            </div>

            {buttonText && (
                <Button
                    text={buttonText}
                    onClick={onButtonClick}
                />
            )}

        </div>
    );
}

export default PageHeader;