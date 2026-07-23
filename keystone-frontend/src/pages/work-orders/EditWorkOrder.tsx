import "./EditWorkOrder.css";

import { useParams } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";

import WorkOrderForm from "../../components/work-orders/WorkOrderForm";

function EditWorkOrder() {

    const { id } = useParams();

    return (

        <MainLayout>

            <div className="edit-workorder">

                <h1>Edit Work Order</h1>

                <WorkOrderForm workOrderId={Number(id)} />

            </div>

        </MainLayout>

    );

}

export default EditWorkOrder;