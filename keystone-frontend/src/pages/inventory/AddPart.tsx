import "./AddPart.css";

import MainLayout from "../../layouts/MainLayout";
import InventoryForm from "../../components/inventory/InventoryForm";

function AddPart() {

    return (

        <MainLayout>

            <div className="add-part">

                <h1>Add Inventory Part</h1>

                <InventoryForm />

            </div>

        </MainLayout>

    );

}

export default AddPart;