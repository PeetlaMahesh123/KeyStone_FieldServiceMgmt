import "./SiteDetails.css";

import { useNavigate } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";

import PageHeader from "../../components/common/PageHeader/PageHeader";
import Badge from "../../components/common/Badge/Badge";
import Button from "../../components/common/Button/Button";

function SiteDetails() {

    const navigate = useNavigate();

    return (

        <MainLayout>

            <div className="site-details">

                <PageHeader
                    title="Site Details"
                    subtitle="View site information"
                />

                <div className="details-card">

                    <div className="detail-row">
                        <label>Site Code</label>
                        <span>SITE001</span>
                    </div>

                    <div className="detail-row">
                        <label>Site Name</label>
                        <span>Hyderabad Plant</span>
                    </div>

                    <div className="detail-row">
                        <label>Customer</label>
                        <span>ABC Industries</span>
                    </div>

                    <div className="detail-row">
                        <label>Address</label>
                        <span>Madhapur, Hyderabad</span>
                    </div>

                    <div className="detail-row">
                        <label>City</label>
                        <span>Hyderabad</span>
                    </div>

                    <div className="detail-row">
                        <label>State</label>
                        <span>Telangana</span>
                    </div>

                    <div className="detail-row">

                        <label>Status</label>

                        <Badge
                            text="Active"
                            variant="success"
                        />

                    </div>

                </div>

                <div className="button-container">

                    <Button
                        text="Back"
                        variant="secondary"
                        onClick={() => navigate("/sites")}
                    />

                </div>

            </div>

        </MainLayout>

    );

}

export default SiteDetails;