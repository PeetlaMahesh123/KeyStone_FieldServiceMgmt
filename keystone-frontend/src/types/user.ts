export type User = {

    id:number;

    employeeId:string;

    fullName:string;

    email:string;

    phone:string;

    role:"ADMIN"|"MANAGER"|"TECHNICIAN";

    department:string;

    status:"Active"|"Inactive";

};