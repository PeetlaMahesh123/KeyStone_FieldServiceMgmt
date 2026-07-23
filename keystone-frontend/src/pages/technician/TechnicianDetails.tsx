import "./TechnicianDetails.css";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";

import PageHeader from "../../components/common/PageHeader/PageHeader";
import Badge from "../../components/common/Badge/Badge";
import Button from "../../components/common/Button/Button";

import { getTechnicianById } from "../../services/technicianService";

import type { Technician } from "../../types/technician";

function TechnicianDetails() {

    const navigate = useNavigate();

    const { id } = useParams();

    const [technician, setTechnician] = useState<Technician | null>(null);

    useEffect(() => {

        loadTechnician();

    }, []);

    const loadTechnician = async () => {

        try {

            if (!id) return;

            const data = await getTechnicianById(Number(id));

            setTechnician(data);

        } catch (error) {

            console.error(error);

            alert("Failed to load technician.");

        }

    };

    if (!technician) {

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

            <div className="technician-details">

                <PageHeader
                    title="Technician Details"
                    subtitle="View technician information"
                />

                <div className="details-card">

                    <div className="detail-row">
                        <label>Employee Code</label>
                        <span>{technician.employeeCode}</span>
                    </div>

                    <div className="detail-row">
                        <label>Name</label>
                        <span>
                            {technician.firstName} {technician.lastName}
                        </span>
                    </div>

                    <div className="detail-row">
                        <label>Email</label>
                        <span>{technician.email}</span>
                    </div>

                    <div className="detail-row">
                        <label>Phone</label>
                        <span>{technician.phone}</span>
                    </div>

                    <div className="detail-row">
                        <label>Specialization</label>
                        <span>{technician.specialization}</span>
                    </div>

                    <div className="detail-row">
                        <label>Experience</label>
                        <span>{technician.experience} Years</span>
                    </div>

                    <div className="detail-row">

                        <label>Status</label>

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

                    </div>

                </div>

                <div className="button-container">

                    <Button
                        text="Back"
                        variant="secondary"
                        onClick={() => navigate("/technicians")}
                    />

                </div>

            </div>

        </MainLayout>

    );

}

export default TechnicianDetails;