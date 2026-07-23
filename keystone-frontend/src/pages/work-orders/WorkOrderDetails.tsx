import "./WorkOrderDetails.css";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";

import PageHeader from "../../components/common/PageHeader/PageHeader";
import Badge from "../../components/common/Badge/Badge";
import Button from "../../components/common/Button/Button";

import { getWorkOrderById } from "../../services/workOrderService";

import type { WorkOrder } from "../../types/workOrder";

function WorkOrderDetails() {

    const navigate = useNavigate();

    const { id } = useParams();

    const [workOrder, setWorkOrder] = useState<WorkOrder | null>(null);

    useEffect(() => {

        loadWorkOrder();

    }, []);

    const loadWorkOrder = async () => {

        try {

            if (!id) return;

            const data = await getWorkOrderById(Number(id));

            setWorkOrder(data);

        } catch (error) {

            console.error(error);

            alert("Failed to load Work Order.");

        }

    };

    if (!workOrder) {

        return (

            <MainLayout>

                <h2 style={{ padding: "30px" }}>
                    Loading...
                </h2>

            </MainLayout>

        );

    }

    return (

        <MainLayout>

            <div className="workorder-details">

                <PageHeader
                    title="Work Order Details"
                    subtitle="View Work Order Information"
                />

                <div className="details-card">

                    <div className="detail-row">
                        <label>Work Order Number</label>
                        <span>{workOrder.workOrderNumber}</span>
                    </div>

                    <div className="detail-row">
                        <label>Title</label>
                        <span>{workOrder.title}</span>
                    </div>

                    <div className="detail-row">
                        <label>Description</label>
                        <span>{workOrder.description}</span>
                    </div>

                    <div className="detail-row">
                        <label>Priority</label>

                        <Badge
                            text={workOrder.priority}
                            variant={
                                workOrder.priority === "Critical"
                                    ? "danger"
                                    : workOrder.priority === "High"
                                    ? "warning"
                                    : workOrder.priority === "Medium"
                                    ? "secondary"
                                    : "success"
                            }
                        />

                    </div>

                    <div className="detail-row">
                        <label>Status</label>

                        <Badge
    text={workOrder.status}
    variant={
        workOrder.status === "Completed"
            ? "success"
            : workOrder.status === "In Progress"
            ? "warning"
            : workOrder.status === "Closed"
            ? "secondary"
            : "info"
    }
/>

                    </div>

                    <div className="detail-row">
                        <label>Due Date</label>
                        <span>{workOrder.scheduledDate}</span>
                    </div>

                    <div className="detail-row">
                        <label>Estimated Duration</label>
                        <span>{workOrder.estimatedDuration} Hours</span>
                    </div>

                    <div className="detail-row">
                        <label>Attachment</label>
                        <span>{workOrder.attachment || "N/A"}</span>
                    </div>

                </div>

                <div className="button-container">

                    <Button
                        text="Back"
                        variant="secondary"
                        onClick={() => navigate("/work-orders")}
                    />

                </div>

            </div>

        </MainLayout>

    );

}

export default WorkOrderDetails;