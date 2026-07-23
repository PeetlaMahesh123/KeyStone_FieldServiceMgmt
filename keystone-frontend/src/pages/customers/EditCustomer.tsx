import "./EditCustomer.css";

import MainLayout from "../../layouts/MainLayout";
import CustomerForm from "../../components/customers/CustomerForm";

function EditCustomer() {

    return (

        <MainLayout>

            <div className="edit-customer">

                <h1>Edit Customer</h1>

                <CustomerForm />

            </div>

        </MainLayout>

    );

}

export default EditCustomer;