import API_BASE_URL from "./api";

export interface RegisterRequest {

    firstName: string;
    lastName: string;
    username: string;
    employeeId: string;
    email: string;
    phone: string;
    department: string;
    password: string;
    roleName: string;

}

export interface LoginRequest {

    email: string;
    password: string;

}

export async function register(user: RegisterRequest) {

    const response = await fetch(`${API_BASE_URL}/auth/register`, {

        method: "POST",

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify(user)

    });

    return response.json();

}

export async function login(user: LoginRequest) {

    const response = await fetch(`${API_BASE_URL}/auth/login`, {

        method: "POST",

        headers: {

            "Content-Type": "application/json"

        },

        body: JSON.stringify(user)

    });

    return response.json();

}