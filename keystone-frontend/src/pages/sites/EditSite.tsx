import "./EditSite.css";

import MainLayout from "../../layouts/MainLayout";
import SiteForm from "../../components/sites/SiteForm";

function EditSite() {

    return (

        <MainLayout>

            <div className="edit-site">

                <h1>Edit Site</h1>

                <SiteForm />

            </div>

        </MainLayout>

    );

}

export default EditSite;