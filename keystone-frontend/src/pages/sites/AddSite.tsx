import "./AddSite.css";

import MainLayout from "../../layouts/MainLayout";
import SiteForm from "../../components/sites/SiteForm";

function AddSite() {

    return (

        <MainLayout>

            <div className="add-site">

                <h1>Add Site</h1>

                <SiteForm />

            </div>

        </MainLayout>

    );

}

export default AddSite;