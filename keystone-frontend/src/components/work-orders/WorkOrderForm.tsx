import {
    useEffect,
    useState,
    type ChangeEvent,
    type FormEvent,
} from "react";

import "./WorkOrderForm.css";

import Input from "../common/Input/Input";
import Select from "../common/Select/Select";
import Button from "../common/Button/Button";

import {
    createWorkOrder,
    updateWorkOrder,
    getWorkOrderById,
} from "../../services/workOrderService";

import { getCustomers } from "../../services/customerService";
import { getSites } from "../../services/siteService";
import { getTechnicians } from "../../services/technicianService";

type WorkOrderFormProps = {
    workOrderId?: number;
};

function WorkOrderForm({
    workOrderId,
}: WorkOrderFormProps) {

    const [customers, setCustomers] = useState<any[]>([]);
    const [sites, setSites] = useState<any[]>([]);
    const [technicians, setTechnicians] = useState<any[]>([]);

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({

        workOrderNumber: "",

        title: "",

        description: "",

        priority: "Low",

        status: "New",

        scheduledDate: "",

        completedDate: "",

        estimatedDuration: "",

        attachment: "",

        customerId: "",

        siteId: "",

        technicianId: "",

    });

    useEffect(() => {

        loadDropdowns();

        if (workOrderId) {

            loadWorkOrder();

        }

    }, []);

    const loadDropdowns = async () => {

        try {

            const customerData = await getCustomers();

            const siteData = await getSites();

            const technicianData = await getTechnicians();

            setCustomers(customerData);

            setSites(siteData);

            setTechnicians(technicianData);

        } catch (error) {

            console.error(error);

        }

    };

    const loadWorkOrder = async () => {

        try {

            setLoading(true);

            const workOrder = await getWorkOrderById(workOrderId!);

            setFormData({

                workOrderNumber: workOrder.workOrderNumber,

                title: workOrder.title,

                description: workOrder.description,

                priority: workOrder.priority,

                status: workOrder.status,

                scheduledDate: workOrder.scheduledDate,

                completedDate: workOrder.completedDate ?? "",

                estimatedDuration:
                    workOrder.estimatedDuration.toString(),

                attachment: workOrder.attachment ?? "",

                customerId:
                    workOrder.customerId.toString(),

                siteId:
                    workOrder.siteId.toString(),

                technicianId:
                    workOrder.technicianId.toString(),

            });

        } catch (error) {

            console.error(error);

        } finally {

            setLoading(false);

        }

    };

    const handleChange = (
        e: ChangeEvent<
            HTMLInputElement |
            HTMLSelectElement |
            HTMLTextAreaElement
        >
    ) => {

        const { name, value } = e.target;

        setFormData((prev) => ({

            ...prev,

            [name]: value,

        }));

    };

    if (loading) {

        return <h2>Loading...</h2>;

    }

    const handleSubmit = async (
        event: FormEvent<HTMLFormElement>
    ) => {

        event.preventDefault();

        try {

            const workOrder = {

                workOrderNumber: formData.workOrderNumber,

                title: formData.title,

                description: formData.description,

                priority: formData.priority,

                status: formData.status,

                scheduledDate: formData.scheduledDate,

                completedDate:
                    formData.completedDate || undefined,

                estimatedDuration:
                    Number(formData.estimatedDuration),

                attachment:
                    formData.attachment || undefined,

                customerId:
                    Number(formData.customerId),

                siteId:
                    Number(formData.siteId),

                technicianId:
                    Number(formData.technicianId),

            };

            if (workOrderId) {

                await updateWorkOrder(
                    workOrderId,
                    workOrder
                );

                alert("Work Order Updated Successfully!");

            } else {

                await createWorkOrder(workOrder);

                alert("Work Order Created Successfully!");

            }

            setFormData({

                workOrderNumber: "",

                title: "",

                description: "",

                priority: "Low",

                status: "New",

                scheduledDate: "",

                completedDate: "",

                estimatedDuration: "",

                attachment: "",

                customerId: "",

                siteId: "",

                technicianId: "",

            });

        } catch (error) {

            console.error(error);

            alert("Failed to save Work Order.");

        }

    };
        return (

        <form
            className="workorder-form"
            onSubmit={handleSubmit}
        >

            <div className="form-row">

                <Input
                    label="Work Order Number"
                    name="workOrderNumber"
                    value={formData.workOrderNumber}
                    onChange={handleChange}
                    placeholder="WO-1001"
                    required
                />

                <Input
                    label="Title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Enter Work Order Title"
                    required
                />

            </div>

            <div className="form-row">

                <Select
                    label="Customer"
                    name="customerId"
                    value={formData.customerId}
                    onChange={handleChange}
                    options={[
                        {
                            label: "Select Customer",
                            value: "",
                        },
                        ...customers.map((customer) => ({
                            label: customer.customerName,
                            value: customer.id.toString(),
                        })),
                    ]}
                />

                <Select
                    label="Site"
                    name="siteId"
                    value={formData.siteId}
                    onChange={handleChange}
                    options={[
                        {
                            label: "Select Site",
                            value: "",
                        },
                        ...sites.map((site) => ({
                            label: site.siteName,
                            value: site.id.toString(),
                        })),
                    ]}
                />

            </div>

            <div className="form-row">

                <Select
                    label="Technician"
                    name="technicianId"
                    value={formData.technicianId}
                    onChange={handleChange}
                    options={[
                        {
                            label: "Select Technician",
                            value: "",
                        },
                        ...technicians.map((technician) => ({
                            label:
                                `${technician.firstName} ${technician.lastName}`,
                            value: technician.id.toString(),
                        })),
                    ]}
                />

                <Select
                    label="Priority"
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                    options={[
                        { label: "Low", value: "Low" },
                        { label: "Medium", value: "Medium" },
                        { label: "High", value: "High" },
                        { label: "Critical", value: "Critical" },
                    ]}
                />

            </div>

            <div className="form-row">

                <Select
                    label="Status"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    options={[
                        { label: "New", value: "New" },
                        { label: "Assigned", value: "Assigned" },
                        { label: "In Progress", value: "In Progress" },
                        { label: "Completed", value: "Completed" },
                        { label: "Closed", value: "Closed" },
                    ]}
                />

                <Input
                    label="Scheduled Date"
                    type="date"
                    name="scheduledDate"
                    value={formData.scheduledDate}
                    onChange={handleChange}
                    required
                />

            </div>

            <div className="form-row">

                <Input
                    label="Completed Date"
                    type="date"
                    name="completedDate"
                    value={formData.completedDate}
                    onChange={handleChange}
                />

                <Input
                    label="Estimated Duration (Hours)"
                    type="number"
                    name="estimatedDuration"
                    value={formData.estimatedDuration}
                    onChange={handleChange}
                    placeholder="8"
                    required
                />

            </div>

            <div className="form-row">

                <Input
                    label="Attachment"
                    name="attachment"
                    value={formData.attachment}
                    onChange={handleChange}
                    placeholder="invoice.pdf"
                />

            </div>

            <div className="form-group">

                <label>Description</label>

                <textarea
                    name="description"
                    rows={5}
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Enter work order description..."
                />

            </div>

            <div className="button-container">

                <Button
                    text={
                        workOrderId
                            ? "Update Work Order"
                            : "Save Work Order"
                    }
                    type="submit"
                    variant="success"
                />

            </div>

        </form>

    );

}

export default WorkOrderForm;