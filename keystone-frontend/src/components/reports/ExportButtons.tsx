import "./ExportButtons.css";

import Button from "../common/Button/Button";

function ExportButtons() {

    return (

        <div className="export-buttons">

            <Button
                text="Export PDF"
                onClick={() => alert("Export PDF")}
            />

            <Button
                text="Export Excel"
                variant="success"
                onClick={() => alert("Export Excel")}
            />

            <Button
                text="Print"
                variant="secondary"
                onClick={() => window.print()}
            />

        </div>

    );

}

export default ExportButtons;