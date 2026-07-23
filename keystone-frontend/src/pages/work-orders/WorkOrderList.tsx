import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./WorkOrderList.css";

import MainLayout from "../../layouts/MainLayout";

import WorkOrderTable from "../../components/work-orders/WorkOrderTable";

import PageHeader from "../../components/common/PageHeader/PageHeader";
import SearchBar from "../../components/common/SearchBar/SearchBar";

import {
    getWorkOrders,
    deleteWorkOrder,
} from "../../services/workOrderService";

import type { WorkOrder } from "../../types/workOrder";

function WorkOrderList() {

    const navigate = useNavigate();

    const [workOrders, setWorkOrders] = useState<WorkOrder[]>([]);

    const [search, setSearch] = useState("");

    useEffect(() => {

        loadWorkOrders();

    }, []);

    const loadWorkOrders = async () => {

        try {

            const data = await getWorkOrders();

            setWorkOrders(data);

        } catch (error) {

            console.error(error);

            alert("Failed to load Work Orders");

        }

    };

    const handleDelete = async (id: number) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this Work Order?"
        );

        if (!confirmDelete) return;

        try {

            await deleteWorkOrder(id);

            alert("Work Order Deleted Successfully!");

            loadWorkOrders();

        } catch (error) {

            console.error(error);

            alert("Failed to delete Work Order");

        }

    };

    const filteredWorkOrders = workOrders.filter((workOrder) =>

        workOrder.workOrderNumber
            .toLowerCase()
            .includes(search.toLowerCase())

        ||

        workOrder.title
            .toLowerCase()
            .includes(search.toLowerCase())

    );

    return (

        <MainLayout>

            <div className="workorder-list">

                <PageHeader
                    title="Work Order Management"
                    subtitle="Manage all Work Orders"
                    buttonText="+ Create Work Order"
                    onButtonClick={() =>
                        navigate("/work-orders/add")
                    }
                />

                <SearchBar
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search Work Order..."
                />

                <WorkOrderTable
                    workOrders={filteredWorkOrders}
                    onDelete={handleDelete}
                />

            </div>

        </MainLayout>

    );

}

export default WorkOrderList;