import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./TechnicianList.css";

import MainLayout from "../../layouts/MainLayout";
import TechnicianTable from "../../components/technicians/TechnicianTable";

import PageHeader from "../../components/common/PageHeader/PageHeader";
import SearchBar from "../../components/common/SearchBar/SearchBar";

import {
    getTechnicians,
    deleteTechnician,
} from "../../services/technicianService";

import type { Technician } from "../../types/technician";

function TechnicianList() {

    const navigate = useNavigate();

    const [technicians, setTechnicians] = useState<Technician[]>([]);
    const [search, setSearch] = useState("");

    useEffect(() => {
        loadTechnicians();
    }, []);

    const loadTechnicians = async () => {

        try {

            const data = await getTechnicians();

            setTechnicians(data);

        } catch (error) {

            console.error("Failed to fetch technicians", error);

        }

    };

    const handleDelete = async (id: number) => {

        const confirmDelete = window.confirm(
            "Are you sure you want to delete this technician?"
        );

        if (!confirmDelete) return;

        try {

            await deleteTechnician(id);

            alert("Technician deleted successfully.");

            loadTechnicians();

        } catch (error) {

            console.error(error);

            alert("Failed to delete technician.");

        }

    };

    const filteredTechnicians = technicians.filter((technician) =>

        (
            technician.firstName +
            " " +
            technician.lastName
        )
            .toLowerCase()
            .includes(search.toLowerCase()) ||

        technician.employeeCode
            .toLowerCase()
            .includes(search.toLowerCase())

    );

    return (

        <MainLayout>

            <div className="technician-list">

                <PageHeader
                    title="Technician Management"
                    subtitle="Manage all technicians"
                    buttonText="+ Add Technician"
                    onButtonClick={() =>
                        navigate("/technicians/add")
                    }
                />

                <SearchBar
                    value={search}
                    onChange={(e) =>
                        setSearch(e.target.value)
                    }
                    placeholder="Search Technician..."
                />

                <TechnicianTable
                    technicians={filteredTechnicians}
                    onDelete={handleDelete}
                />

            </div>

        </MainLayout>

    );

}

export default TechnicianList;