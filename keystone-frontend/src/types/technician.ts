export type Technician = {

    id: number;

    employeeCode: string;

    firstName: string;

    lastName: string;

    email: string;

    phone: string;

    specialization: string;

    experience: number;

    status: "Available" | "Busy" | "On Leave";

    active: boolean;

    createdAt?: string;

};