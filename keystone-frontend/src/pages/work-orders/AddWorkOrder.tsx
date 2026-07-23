import "./AddWorkOrder.css";

import MainLayout from "../../layouts/MainLayout";
import WorkOrderForm from "../../components/work-orders/WorkOrderForm";

function AddWorkOrder() {

    return (

        <MainLayout>

            <div className="add-workorder">

                <h1>Create Work Order</h1>

                <WorkOrderForm />

            </div>

        </MainLayout>

    );

}

export default AddWorkOrder;