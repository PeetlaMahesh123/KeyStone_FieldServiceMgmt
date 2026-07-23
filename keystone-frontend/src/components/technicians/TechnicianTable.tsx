import "./TechnicianTable.css";

import { useNavigate } from "react-router-dom";

import type { Technician } from "../../types/technician";

import Button from "../common/Button/Button";
import Badge from "../common/Badge/Badge";

type TechnicianTableProps = {
    technicians: Technician[];
    onDelete: (id: number) => void;
};

function TechnicianTable({
    technicians,
    onDelete,
}: TechnicianTableProps) {

    const navigate = useNavigate();

    return (

        <div className="technician-table-container">

            <table className="technician-table">

                <thead>

                    <tr>

                        <th>ID</th>
                        <th>Employee Code</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Specialization</th>
                        <th>Experience</th>
                        <th>Status</th>
                        <th>Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {technicians.length === 0 ? (

                        <tr>

                            <td
                                colSpan={9}
                                style={{
                                    textAlign: "center",
                                    padding: "20px",
                                }}
                            >
                                No Technicians Found
                            </td>

                        </tr>

                    ) : (

                        technicians.map((technician) => (

                            <tr key={technician.id}>

                                <td>{technician.id}</td>

                                <td>{technician.employeeCode}</td>

                                <td>

                                    {technician.firstName}{" "}
                                    {technician.lastName}

                                </td>

                                <td>{technician.email}</td>

                                <td>{technician.phone}</td>

                                <td>{technician.specialization}</td>

                                <td>

                                    {technician.experience} Years

                                </td>

                                <td>

                                    <Badge
                                        text={technician.status}
                                        variant={
                                            technician.status === "Available"
                                                ? "success"
                                                : technician.status === "Busy"
                                                ? "warning"
                                                : "danger"
                                        }
                                    />

                                </td>

                                <td className="action-buttons">

                                    <Button
                                        text="View"
                                        variant="secondary"
                                        onClick={() =>
                                            navigate(
                                                `/technicians/details/${technician.id}`
                                            )
                                        }
                                    />

                                    <Button
                                        text="Edit"
                                        variant="primary"
                                        onClick={() =>
                                            navigate(
                                                `/technicians/edit/${technician.id}`
                                            )
                                        }
                                    />

                                    <Button
                                        text="Delete"
                                        variant="danger"
                                        onClick={() =>
                                            onDelete(technician.id)
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

export default TechnicianTable;