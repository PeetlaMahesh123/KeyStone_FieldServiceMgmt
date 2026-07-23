import "./CustomerDetails.css";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";

import Button from "../../components/common/Button/Button";
import PageHeader from "../../components/common/PageHeader/PageHeader";
import Badge from "../../components/common/Badge/Badge";

import { getCustomerById } from "../../services/customerService";

import type { Customer } from "../../types/customer";

function CustomerDetails() {

    const navigate = useNavigate();

    const { id } = useParams();

    const [customer, setCustomer] = useState<Customer | null>(null);

    useEffect(() => {

        loadCustomer();

    }, []);

    const loadCustomer = async () => {

        try {

            if (!id) return;

            const data = await getCustomerById(Number(id));

            setCustomer(data);

        } catch (error) {

            console.error(error);

            alert("Failed to load Customer.");

        }

    };

    if (!customer) {

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

            <div className="customer-details">

                <PageHeader
                    title="Customer Details"
                    subtitle="View Customer Information"
                />

                <div className="details-card">

                    <div className="detail-row">
                        <label>Customer Code</label>
                        <span>{customer.customerCode}</span>
                    </div>

                    <div className="detail-row">
                        <label>Customer Name</label>
                        <span>{customer.customerName}</span>
                    </div>

                    <div className="detail-row">
                        <label>Company</label>
                        <span>{customer.company}</span>
                    </div>

                    <div className="detail-row">
                        <label>Email</label>
                        <span>{customer.email}</span>
                    </div>

                    <div className="detail-row">
                        <label>Phone</label>
                        <span>{customer.phone}</span>
                    </div>

                    <div className="detail-row">
                        <label>Address</label>
                        <span>{customer.address}</span>
                    </div>

                    <div className="detail-row">
                        <label>City</label>
                        <span>{customer.city}</span>
                    </div>

                    <div className="detail-row">
                        <label>State</label>
                        <span>{customer.state}</span>
                    </div>

                    <div className="detail-row">
                        <label>Pincode</label>
                        <span>{customer.pincode}</span>
                    </div>

                    <div className="detail-row">

                        <label>Status</label>

                        <Badge
                            text={customer.active ? "Active" : "Inactive"}
                            variant={customer.active ? "success" : "danger"}
                        />

                    </div>

                </div>

                <div className="button-container">

                    <Button
                        text="Back"
                        variant="secondary"
                        onClick={() => navigate("/customers")}
                    />

                </div>

            </div>

        </MainLayout>

    );

}

export default CustomerDetails;