import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./InventoryList.css";

import MainLayout from "../../layouts/MainLayout";

import InventoryTable from "../../components/inventory/InventoryTable";

import PageHeader from "../../components/common/PageHeader/PageHeader";
import SearchBar from "../../components/common/SearchBar/SearchBar";

import { getInventory } from "../../services/inventoryService";

import type { Inventory } from "../../types/inventory";

function InventoryList() {

    const navigate = useNavigate();

    const [inventory, setInventory] = useState<Inventory[]>([]);

    const [search, setSearch] = useState("");

    useEffect(() => {

        loadInventory();

    }, []);

    const loadInventory = async () => {

        try {

            const data = await getInventory();

            setInventory(data);

        } catch (error) {

            console.error(error);

            alert("Failed to load inventory.");

        }

    };

    const filteredInventory = inventory.filter((item) =>

        (item.partCode ?? "")
            .toLowerCase()
            .includes(search.toLowerCase()) ||

        (item.partName ?? "")
            .toLowerCase()
            .includes(search.toLowerCase()) ||

        (item.category ?? "")
            .toLowerCase()
            .includes(search.toLowerCase())

    );

    return (

        <MainLayout>

            <div className="inventory-list">

                <PageHeader
                    title="Inventory Management"
                    subtitle="Manage Spare Parts Inventory"
                    buttonText="+ Add Part"
                    onButtonClick={() => navigate("/inventory/add")}
                />

                <SearchBar
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search Part..."
                />

                <InventoryTable
                    inventory={filteredInventory}
                />

            </div>

        </MainLayout>

    );

}

export default InventoryList;