import "./CustomerTable.css";

import { useNavigate } from "react-router-dom";

import type { Customer } from "../../types/customer";

import Button from "../common/Button/Button";
import Badge from "../common/Badge/Badge";

type CustomerTableProps = {
    customers: Customer[];
};

function CustomerTable({ customers }: CustomerTableProps) {

    const navigate = useNavigate();

    return (

        <div className="customer-table-container">

            <table className="customer-table">

                <thead>

                    <tr>

                        <th>ID</th>
                        <th>Customer Code</th>
                        <th>Customer Name</th>
                        <th>Company</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>City</th>
                        <th>Status</th>
                        <th>Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {customers.map((customer) => (

                        <tr key={customer.id}>

                            <td>{customer.id}</td>

                            <td>{customer.customerCode}</td>

                            <td>{customer.customerName}</td>

                            <td>{customer.company}</td>

                            <td>{customer.email}</td>

                            <td>{customer.phone}</td>

                            <td>{customer.city}</td>

                            <td>

                                <Badge
                                    text={customer.active ? "Active" : "Inactive"}
                                    variant={customer.active ? "success" : "danger"}
                                />

                            </td>

                            <td className="action-buttons">

                                <Button
                                    text="View"
                                    variant="secondary"
                                    onClick={() =>
                                        navigate(`/customers/details/${customer.id}`)
                                    }
                                />

                                <Button
                                    text="Edit"
                                    onClick={() =>
                                        navigate(`/customers/edit/${customer.id}`)
                                    }
                                />

                                <Button
                                    text="Delete"
                                    variant="danger"
                                    onClick={() =>
                                        alert(`Delete ${customer.customerName}`)
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

export default CustomerTable;