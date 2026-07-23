import "./EditTechnician.css";

import { useParams } from "react-router-dom";

import MainLayout from "../../layouts/MainLayout";

import TechnicianForm from "../../components/technicians/TechnicianForm";

function EditTechnician() {

    const { id } = useParams();

    return (

        <MainLayout>

            <div className="edit-technician">

                <h1>Edit Technician</h1>

                <TechnicianForm technicianId={Number(id)} />

            </div>

        </MainLayout>

    );

}

export default EditTechnician;