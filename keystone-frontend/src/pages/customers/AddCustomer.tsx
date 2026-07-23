import "./AddCustomer.css";

import MainLayout from "../../layouts/MainLayout";

import CustomerForm from "../../components/customers/CustomerForm";

function AddCustomer(){

    return(

        <MainLayout>

            <div className="add-customer">

                <h1>Add Customer</h1>

                <CustomerForm/>

            </div>

        </MainLayout>

    );

}

export default AddCustomer;