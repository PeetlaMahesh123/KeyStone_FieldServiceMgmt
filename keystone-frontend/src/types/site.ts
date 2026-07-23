export type Site = {
    id: number;
    siteCode: string;
    siteName: string;
    customerName: string;
    address: string;
    city: string;
    state: string;
    status: "Active" | "Inactive";
};