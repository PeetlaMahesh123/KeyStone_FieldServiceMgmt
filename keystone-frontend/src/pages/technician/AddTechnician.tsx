import "./AddTechnician.css";

import MainLayout from "../../layouts/MainLayout";
import TechnicianForm from "../../components/technicians/TechnicianForm";

function AddTechnician() {

    return (

        <MainLayout>

            <div className="add-technician">

                <h1>Add Technician</h1>

                <TechnicianForm />

            </div>

        </MainLayout>

    );

}

export default AddTechnician;