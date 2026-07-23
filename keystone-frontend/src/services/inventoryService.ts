import API_BASE_URL from "./api";

const getToken = () => localStorage.getItem("token");

export interface Inventory {

    id?: number;

    partCode: string;

    partName: string;

    category: string;

    supplier: string;

    quantity: number;

    unitPrice: number;

    location: string;

    minimumStock: number;

    status: "In Stock" | "Low Stock" | "Out Of Stock";

}

/* ---------------- GET ALL PARTS ---------------- */

export async function getInventory() {

    const response = await fetch(`${API_BASE_URL}/inventory`, {

        headers: {

            Authorization: `Bearer ${getToken()}`,

        },

    });

    if (!response.ok) {

        throw new Error("Failed to fetch inventory");

    }

    return await response.json();

}

/* ---------------- GET PART BY ID ---------------- */

export async function getInventoryById(id: number) {

    const response = await fetch(`${API_BASE_URL}/inventory/${id}`, {

        headers: {

            Authorization: `Bearer ${getToken()}`,

        },

    });

    if (!response.ok) {

        throw new Error("Inventory item not found");

    }

    return await response.json();

}

/* ---------------- CREATE PART ---------------- */

export async function createInventory(item: Inventory) {

    const response = await fetch(`${API_BASE_URL}/inventory`, {

        method: "POST",

        headers: {

            "Content-Type": "application/json",

            Authorization: `Bearer ${getToken()}`,

        },

        body: JSON.stringify(item),

    });

    if (!response.ok) {

        throw new Error("Failed to create inventory item");

    }

    return await response.json();

}

/* ---------------- UPDATE PART ---------------- */

export async function updateInventory(
    id: number,
    item: Inventory
) {

    const response = await fetch(`${API_BASE_URL}/inventory/${id}`, {

        method: "PUT",

        headers: {

            "Content-Type": "application/json",

            Authorization: `Bearer ${getToken()}`,

        },

        body: JSON.stringify(item),

    });

    if (!response.ok) {

        throw new Error("Failed to update inventory item");

    }

    return await response.json();

}

/* ---------------- DELETE PART ---------------- */

export async function deleteInventory(id: number) {

    const response = await fetch(`${API_BASE_URL}/inventory/${id}`, {

        method: "DELETE",

        headers: {

            Authorization: `Bearer ${getToken()}`,

        },

    });

    if (!response.ok) {

        throw new Error("Failed to delete inventory item");

    }

    return await response.text();

}