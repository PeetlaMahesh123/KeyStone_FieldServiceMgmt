import API_BASE_URL from "./api";

const TOKEN = localStorage.getItem("token");

export async function createCustomer(customer: any) {

    const response = await fetch(`${API_BASE_URL}/customers`, {

        method: "POST",

        headers: {

            "Content-Type": "application/json",

            Authorization: `Bearer ${TOKEN}`

        },

        body: JSON.stringify(customer)

    });

    if (!response.ok) {

        throw new Error("Failed to create customer");

    }

    return await response.json();

}

export async function getCustomers() {

    const response = await fetch(`${API_BASE_URL}/customers`, {

        headers: {

            Authorization: `Bearer ${TOKEN}`

        }

    });

    return await response.json();

}

export async function getCustomerById(id: number) {

    const response = await fetch(`${API_BASE_URL}/customers/${id}`, {

        headers: {

            Authorization: `Bearer ${TOKEN}`

        }

    });

    return await response.json();

}

export async function updateCustomer(id: number, customer: any) {

    const response = await fetch(`${API_BASE_URL}/customers/${id}`, {

        method: "PUT",

        headers: {

            "Content-Type": "application/json",

            Authorization: `Bearer ${TOKEN}`

        },

        body: JSON.stringify(customer)

    });

    return await response.json();

}

export async function deleteCustomer(id: number) {

    await fetch(`${API_BASE_URL}/customers/${id}`, {

        method: "DELETE",

        headers: {

            Authorization: `Bearer ${TOKEN}`

        }

    });

}