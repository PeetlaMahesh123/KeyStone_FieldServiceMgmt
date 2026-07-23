import "./WorkOrderTable.css";

import { useNavigate } from "react-router-dom";

import type { WorkOrder } from "../../types/workOrder";

import Button from "../common/Button/Button";
import Badge from "../common/Badge/Badge";

type WorkOrderTableProps = {
    workOrders: WorkOrder[];
    onDelete: (id: number) => void;
};

function WorkOrderTable({
    workOrders,
    onDelete,
}: WorkOrderTableProps) {

    const navigate = useNavigate();

    return (

        <div className="workorder-table-container">

            <table className="workorder-table">

                <thead>

                    <tr>

                        <th>ID</th>
                        <th>Work Order No</th>
                        <th>Title</th>
                        <th>Priority</th>
                        <th>Status</th>
                        <th>Due Date</th>
                        <th>Estimated Hours</th>
                        <th>Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {workOrders.length === 0 ? (

                        <tr>

                            <td
                                colSpan={8}
                                style={{
                                    textAlign: "center",
                                    padding: "20px",
                                }}
                            >
                                No Work Orders Found
                            </td>

                        </tr>

                    ) : (

                        workOrders.map((workOrder) => (

                            <tr key={workOrder.id}>

                                <td>{workOrder.id}</td>

                                <td>{workOrder.workOrderNumber}</td>

                                <td>{workOrder.title}</td>

                                <td>

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

                                </td>

                                <td>

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

                                </td>

                                <td>{workOrder.scheduledDate}</td>

                                <td>{workOrder.estimatedDuration} hrs</td>

                                <td className="action-buttons">

                                    <Button
                                        text="View"
                                        variant="secondary"
                                        onClick={() =>
                                            navigate(
                                                `/work-orders/details/${workOrder.id}`
                                            )
                                        }
                                    />

                                    <Button
                                        text="Edit"
                                        variant="primary"
                                        onClick={() =>
                                            navigate(
                                                `/work-orders/edit/${workOrder.id}`
                                            )
                                        }
                                    />

                                    <Button
                                        text="Delete"
                                        variant="danger"
                                        onClick={() =>
                                            onDelete(workOrder.id)
                                        }
                                    />

                                </td>

                            </tr>

                        ))

                    )}

                </tbody>

            </table>

        </div>

    );

}

export default WorkOrderTable;