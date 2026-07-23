import "./InventoryTable.css";

import { useNavigate } from "react-router-dom";

import type { Inventory } from "../../types/inventory";

import Button from "../common/Button/Button";
import Badge from "../common/Badge/Badge";

type InventoryTableProps = {
    inventory: Inventory[];
};

function InventoryTable({ inventory }: InventoryTableProps) {

    const navigate = useNavigate();

    return (

        <div className="inventory-table-container">

            <table className="inventory-table">

                <thead>

                    <tr>

                        <th>ID</th>
                        <th>Part Code</th>
                        <th>Part Name</th>
                        <th>Category</th>
                        <th>Supplier</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {inventory.map((part) => (

                        <tr key={part.id}>

                            <td>{part.id}</td>

                            <td>{part.partCode}</td>

                            <td>{part.partName}</td>

                            <td>{part.category}</td>

                            <td>{part.supplier}</td>

                            <td>{part.quantity}</td>

                            <td>₹ {part.unitPrice}</td>

                            <td>

                                <Badge
                                    text={part.status}
                                    variant={
                                        part.status === "In Stock"
                                            ? "success"
                                            : part.status === "Low Stock"
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
                                        navigate(`/inventory/details/${part.id}`)
                                    }
                                />

                                <Button
                                    text="Edit"
                                    onClick={() =>
                                        navigate(`/inventory/edit/${part.id}`)
                                    }
                                />

                                <Button
                                    text="Delete"
                                    variant="danger"
                                    onClick={() =>
                                        alert(`Delete ${part.partName}`)
                                    }
                                />

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}

export default InventoryTable;