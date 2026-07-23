import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./CustomerList.css";

import MainLayout from "../../layouts/MainLayout";

import CustomerTable from "../../components/customers/CustomerTable";

import PageHeader from "../../components/common/PageHeader/PageHeader";
import SearchBar from "../../components/common/SearchBar/SearchBar";

import { getCustomers } from "../../services/customerService";

import type { Customer } from "../../types/customer";

function CustomerList() {

    const navigate = useNavigate();

    const [customers, setCustomers] = useState<Customer[]>([]);

    const [search, setSearch] = useState("");

    useEffect(() => {

        loadCustomers();

    }, []);

    const loadCustomers = async () => {

        try {

            const data = await getCustomers();

            setCustomers(data);

        } catch (error) {

            console.error(error);

            alert("Failed to load customers.");
        }

    };

    const filteredCustomers = customers.filter((customer) =>

        (customer.customerCode ?? "")
            .toLowerCase()
            .includes(search.toLowerCase()) ||

        (customer.customerName ?? "")
            .toLowerCase()
            .includes(search.toLowerCase()) ||

        (customer.company ?? "")
            .toLowerCase()
            .includes(search.toLowerCase())

    );

    return (

        <MainLayout>

            <div className="customer-list">

                <PageHeader
                    title="Customer Management"
                    subtitle="Manage customer information"
                    buttonText="+ Add Customer"
                    onButtonClick={() => navigate("/customers/add")}
                />

                <SearchBar
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search customer..."
                />

                <CustomerTable
                    customers={filteredCustomers}
                />

            </div>

        </MainLayout>

    );

}

export default CustomerList;