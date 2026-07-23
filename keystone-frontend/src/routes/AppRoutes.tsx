import { Navigate, Route, Routes } from "react-router-dom";

import Login from "../pages/auth/Login";
import ForgotPassword from "../pages/auth/ForgotPassword";
import Unauthorized from "../pages/auth/Unauthorized";
import Dashboard from "../pages/dashboard/Dashboard";
import CustomerList from "../pages/customers/CustomerList";
import AddCustomer from "../pages/customers/AddCustomer";
import EditCustomer from "../pages/customers/EditCustomer";
import CustomerDetails from "../pages/customers/CustomerDetails"; 
import SiteList from "../pages/sites/SiteList";
import AddSite from "../pages/sites/AddSite";
import EditSite from "../pages/sites/EditSite";
import SiteDetails from "../pages/sites/SiteDetails";
import WorkOrderList from "../pages/work-orders/WorkOrderList";
import AddWorkOrder from "../pages/work-orders/AddWorkOrder";
import EditWorkOrder from "../pages/work-orders/EditWorkOrder";
import WorkOrderDetails from "../pages/work-orders/WorkOrderDetails";
import TechnicianList from "../pages/technician/TechnicianList";
import AddTechnician from "../pages/technician/AddTechnician";
import EditTechnician from "../pages/technician/EditTechnician";
import TechnicianDetails from "../pages/technician/TechnicianDetails";
import InventoryList from "../pages/inventory/InventoryList";
import AddPart from "../pages/inventory/AddPart";
import EditPart from "../pages/inventory/EditPart";
import PartDetails from "../pages/inventory/PartDetails";
import Register from "../pages/auth/Register";
import Reports from "../pages/reports/Reports";
import Settings from "../pages/settings/Settings";

function AppRoutes() {
  return (
    <Routes>

      {/* Redirect Default URL */}

      <Route path="/" element={<Navigate to="/login" replace />} />

      {/* Authentication */}

      <Route path="/login" element={<Login />} />

      <Route
        path="/forgot-password"
        element={<ForgotPassword />}
      />

      <Route
        path="/unauthorized"
        element={<Unauthorized />}
      />

      {/* Dashboard */}

      <Route
        path="/dashboard"
        element={<Dashboard />}
      />

      {/* Page Not Found */}

      <Route
        path="*"
        element={<h1>404 - Page Not Found</h1>}
      />

      <Route
    path="/customers"
    element={<CustomerList />}
/>

<Route
    path="/customers/add"
    element={<AddCustomer />}
/>
<Route
    path="/customers/edit/:id"
    element={<EditCustomer />}
/>

<Route
    path="/customers/details/:id"
    element={<CustomerDetails />}
/>

<Route path="/sites" element={<SiteList />} />

<Route path="/sites/add" element={<AddSite />} />

<Route path="/sites/edit/:id" element={<EditSite />} />

<Route path="/sites/details/:id" element={<SiteDetails />} />

<Route path="/work-orders" element={<WorkOrderList />} />

<Route path="/work-orders/add" element={<AddWorkOrder />} />

<Route path="/work-orders/edit/:id" element={<EditWorkOrder />} />

<Route path="/work-orders/details/:id" element={<WorkOrderDetails />} />

<Route path="/technicians" element={<TechnicianList />} />

<Route path="/technicians/add" element={<AddTechnician />} />

<Route path="/technicians/edit/:id" element={<EditTechnician />} />

<Route path="/technicians/details/:id" element={<TechnicianDetails />} />

<Route path="/inventory" element={<InventoryList />} />

<Route path="/inventory/add" element={<AddPart />} />

<Route path="/inventory/edit/:id" element={<EditPart />} />

<Route path="/inventory/details/:id" element={<PartDetails />} />

<Route
    path="/register"
    element={<Register />}
/>

<Route
    path="/reports"
    element={<Reports />}
/>

<Route
    path="/settings"
    element={<Settings />}
/>
    </Routes>
  );
}

export default AppRoutes;