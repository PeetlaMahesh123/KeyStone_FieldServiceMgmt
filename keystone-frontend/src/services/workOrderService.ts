import API_BASE_URL from "./api";

const getToken = () => localStorage.getItem("token");

export interface WorkOrder {
    id?: number;
    workOrderNumber: string;
    title: string;
    description: string;
    priority: string;
    status: string;
    scheduledDate: string;
    completedDate?: string;
    estimatedDuration: number;
    attachment?: string;
    customerId: number;
    siteId: number;
    technicianId: number;
}

/* ---------------- CREATE WORK ORDER ---------------- */

export async function createWorkOrder(workOrder: WorkOrder) {

    const response = await fetch(`${API_BASE_URL}/work-orders`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify(workOrder),
    });

    if (!response.ok) {
        throw new Error("Failed to create work order");
    }

    return await response.json();
}

/* ---------------- GET ALL WORK ORDERS ---------------- */

export async function getWorkOrders() {

    const response = await fetch(`${API_BASE_URL}/work-orders`, {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch work orders");
    }

    return await response.json();
}

/* ---------------- GET WORK ORDER BY ID ---------------- */

export async function getWorkOrderById(id: number) {

    const response = await fetch(`${API_BASE_URL}/work-orders/${id}`, {
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    });

    if (!response.ok) {
        throw new Error("Work Order not found");
    }

    return await response.json();
}

/* ---------------- UPDATE WORK ORDER ---------------- */

export async function updateWorkOrder(
    id: number,
    workOrder: WorkOrder
) {

    const response = await fetch(`${API_BASE_URL}/work-orders/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${getToken()}`,
        },
        body: JSON.stringify(workOrder),
    });

    if (!response.ok) {
        throw new Error("Failed to update work order");
    }

    return await response.json();
}

/* ---------------- DELETE WORK ORDER ---------------- */

export async function deleteWorkOrder(id: number) {

    const response = await fetch(`${API_BASE_URL}/work-orders/${id}`, {
        method: "DELETE",
        headers: {
            Authorization: `Bearer ${getToken()}`,
        },
    });

    if (!response.ok) {
        throw new Error("Failed to delete work order");
    }

    return await response.text();
}