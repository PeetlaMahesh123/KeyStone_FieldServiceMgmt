import "./DeleteConfirmationModal.css";

import Button from "../common/Button/Button";

type DeleteConfirmationModalProps = {
    isOpen: boolean;
    title: string;
    message: string;
    onCancel: () => void;
    onConfirm: () => void;
};

function DeleteConfirmationModal({
    isOpen,
    title,
    message,
    onCancel,
    onConfirm,
}: DeleteConfirmationModalProps) {

    if (!isOpen) return null;

    return (

        <div className="modal-overlay">

            <div className="modal">

                <h2>{title}</h2>

                <p>{message}</p>

                <div className="modal-buttons">

                    <Button
                        text="Cancel"
                        variant="secondary"
                        onClick={onCancel}
                    />

                    <Button
                        text="Delete"
                        variant="danger"
                        onClick={onConfirm}
                    />

                </div>

            </div>

        </div>

    );

}

export default DeleteConfirmationModal;