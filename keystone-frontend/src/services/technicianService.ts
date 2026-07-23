import API_BASE_URL from "./api";

const getToken = () => localStorage.getItem("token");

export interface Technician {

    id?: number;

    employeeCode: string;

    firstName: string;

    lastName: string;

    email: string;

    phone: string;

    specialization: string;

    experience: number;

    status: string;

    active: boolean;

    createdAt?: string;

}

/* ---------------- CREATE TECHNICIAN ---------------- */

export async function createTechnician(technician: Technician) {

    const response = await fetch(`${API_BASE_URL}/technicians`, {

        method: "POST",

        headers: {

            "Content-Type": "application/json",

            Authorization: `Bearer ${getToken()}`,

        },

        body: JSON.stringify(technician),

    });

    if (!response.ok) {

        throw new Error("Failed to create technician");

    }

    return await response.json();

}

/* ---------------- GET ALL TECHNICIANS ---------------- */

export async function getTechnicians() {

    const response = await fetch(`${API_BASE_URL}/technicians`, {

        headers: {

            Authorization: `Bearer ${getToken()}`,

        },

    });

    if (!response.ok) {

        throw new Error("Failed to fetch technicians");

    }

    return await response.json();

}

/* ---------------- GET TECHNICIAN BY ID ---------------- */

export async function getTechnicianById(id: number) {

    const response = await fetch(`${API_BASE_URL}/technicians/${id}`, {

        headers: {

            Authorization: `Bearer ${getToken()}`,

        },

    });

    if (!response.ok) {

        throw new Error("Technician not found");

    }

    return await response.json();

}

/* ---------------- UPDATE TECHNICIAN ---------------- */

export async function updateTechnician(id: number, technician: Technician) {

    const response = await fetch(`${API_BASE_URL}/technicians/${id}`, {

        method: "PUT",

        headers: {

            "Content-Type": "application/json",

            Authorization: `Bearer ${getToken()}`,

        },

        body: JSON.stringify(technician),

    });

    if (!response.ok) {

        throw new Error("Failed to update technician");

    }

    return await response.json();

}

/* ---------------- DELETE TECHNICIAN ---------------- */

export async function deleteTechnician(id: number) {

    const response = await fetch(`${API_BASE_URL}/technicians/${id}`, {

        method: "DELETE",

        headers: {

            Authorization: `Bearer ${getToken()}`,

        },

    });

    if (!response.ok) {

        throw new Error("Failed to delete technician");

    }

    return await response.text();

}