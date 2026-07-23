import "./PartDetails.css";

import { useNavigate } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";

import PageHeader from "../../components/common/PageHeader/PageHeader";
import Badge from "../../components/common/Badge/Badge";
import Button from "../../components/common/Button/Button";

function PartDetails() {

    const navigate = useNavigate();

    return (

        <MainLayout>

            <div className="part-details">

                <PageHeader
                    title="Inventory Part Details"
                    subtitle="View spare part information"
                />

                <div className="details-card">

                    <div className="detail-row">
                        <label>Part Code</label>
                        <span>PRT001</span>
                    </div>

                    <div className="detail-row">
                        <label>Part Name</label>
                        <span>Motor</span>
                    </div>

                    <div className="detail-row">
                        <label>Category</label>
                        <span>Electrical</span>
                    </div>

                    <div className="detail-row">
                        <label>Supplier</label>
                        <span>ABC Suppliers</span>
                    </div>

                    <div className="detail-row">
                        <label>Quantity</label>
                        <span>25</span>
                    </div>

                    <div className="detail-row">
                        <label>Unit Price</label>
                        <span>₹3,500</span>
                    </div>

                    <div className="detail-row">
                        <label>Warehouse</label>
                        <span>Warehouse A</span>
                    </div>

                    <div className="detail-row">
                        <label>Minimum Stock</label>
                        <span>10</span>
                    </div>

                    <div className="detail-row">

                        <label>Status</label>

                        <Badge
                            text="In Stock"
                            variant="success"
                        />

                    </div>

                </div>

                <div className="button-container">

                    <Button
                        text="Back"
                        variant="secondary"
                        onClick={() => navigate("/inventory")}
                    />

                </div>

            </div>

        </MainLayout>

    );

}

export default PartDetails;