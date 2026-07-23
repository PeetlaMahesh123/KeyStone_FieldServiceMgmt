export type WorkOrder = {

    id: number;

    workOrderNumber: string;

    title: string;

    description: string;

    priority: "Low" | "Medium" | "High" | "Critical";

    status:
        | "New"
        | "Assigned"
        | "In Progress"
        | "Completed"
        | "Closed";

    scheduledDate: string;

    completedDate?: string;

    estimatedDuration: number;

    attachment?: string;

    customerId: number;

    siteId: number;

    technicianId: number;

};