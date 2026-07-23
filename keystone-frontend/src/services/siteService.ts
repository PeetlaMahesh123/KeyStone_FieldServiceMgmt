import API_BASE_URL from "./api";

const getToken = () => localStorage.getItem("token");

/* ------------------ CREATE SITE ------------------ */

export async function createSite(site: any) {

    const response = await fetch(`${API_BASE_URL}/sites`, {

        method: "POST",

        headers: {

            "Content-Type": "application/json",

            Authorization: `Bearer ${getToken()}`,

        },

        body: JSON.stringify(site),

    });

    if (!response.ok) {

        throw new Error("Failed to create site");

    }

    return await response.json();

}

/* ------------------ GET ALL SITES ------------------ */

export async function getSites() {

    const response = await fetch(`${API_BASE_URL}/sites`, {

        headers: {

            Authorization: `Bearer ${getToken()}`,

        },

    });

    if (!response.ok) {

        throw new Error("Failed to fetch sites");

    }

    return await response.json();

}

/* ------------------ GET SITE BY ID ------------------ */

export async function getSiteById(id: number) {

    const response = await fetch(`${API_BASE_URL}/sites/${id}`, {

        headers: {

            Authorization: `Bearer ${getToken()}`,

        },

    });

    if (!response.ok) {

        throw new Error("Site not found");

    }

    return await response.json();

}

/* ------------------ UPDATE SITE ------------------ */

export async function updateSite(id: number, site: any) {

    const response = await fetch(`${API_BASE_URL}/sites/${id}`, {

        method: "PUT",

        headers: {

            "Content-Type": "application/json",

            Authorization: `Bearer ${getToken()}`,

        },

        body: JSON.stringify(site),

    });

    if (!response.ok) {

        throw new Error("Failed to update site");

    }

    return await response.json();

}

/* ------------------ DELETE SITE ------------------ */

export async function deleteSite(id: number) {

    const response = await fetch(`${API_BASE_URL}/sites/${id}`, {

        method: "DELETE",

        headers: {

            Authorization: `Bearer ${getToken()}`,

        },

    });

    if (!response.ok) {

        throw new Error("Failed to delete site");

    }

    return await response.text();

}