import "./EditPart.css";

import MainLayout from "../../layouts/MainLayout";
import InventoryForm from "../../components/inventory/InventoryForm";

function EditPart() {

    return (

        <MainLayout>

            <div className="edit-part">

                <h1>Edit Inventory Part</h1>

                <InventoryForm />

            </div>

        </MainLayout>

    );

}

export default EditPart;