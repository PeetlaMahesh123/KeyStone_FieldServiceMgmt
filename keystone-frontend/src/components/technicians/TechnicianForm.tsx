import {
    useEffect,
    useState,
    type FormEvent,
    type ChangeEvent,
} from "react";

import "./TechnicianForm.css";

import Input from "../common/Input/Input";
import Select from "../common/Select/Select";
import Button from "../common/Button/Button";

import {
    createTechnician,
    updateTechnician,
    getTechnicianById,
} from "../../services/technicianService";

type TechnicianFormProps = {
    technicianId?: number;
};

function TechnicianForm({
    technicianId,
}: TechnicianFormProps) {

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({

        employeeCode: "",

        firstName: "",

        lastName: "",

        email: "",

        phone: "",

        specialization: "",

        experience: "",

        status: "Available",

        active: true,

    });

    useEffect(() => {

        if (technicianId) {

            loadTechnician();

        }

    }, [technicianId]);

    const loadTechnician = async () => {

        try {

            setLoading(true);

            const technician = await getTechnicianById(
                technicianId!
            );

            setFormData({

                employeeCode: technician.employeeCode,

                firstName: technician.firstName,

                lastName: technician.lastName,

                email: technician.email,

                phone: technician.phone,

                specialization: technician.specialization,

                experience:
                    technician.experience.toString(),

                status: technician.status,

                active: technician.active,

            });

        } catch (error) {

            console.error(error);

            alert("Failed to load technician.");

        } finally {

            setLoading(false);

        }

    };

    const handleChange = (

        e: ChangeEvent<
            HTMLInputElement | HTMLSelectElement
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

            const technicianData = {

                employeeCode: formData.employeeCode,

                firstName: formData.firstName,

                lastName: formData.lastName,

                email: formData.email,

                phone: formData.phone,

                specialization: formData.specialization,

                experience: Number(formData.experience),

                status: formData.status,

                active: formData.active,

            };

            if (technicianId) {

                await updateTechnician(
                    technicianId,
                    technicianData
                );

                alert("Technician Updated Successfully!");

            } else {

                await createTechnician(
                    technicianData
                );

                alert("Technician Saved Successfully!");

                setFormData({

                    employeeCode: "",

                    firstName: "",

                    lastName: "",

                    email: "",

                    phone: "",

                    specialization: "",

                    experience: "",

                    status: "Available",

                    active: true,

                });

            }

        } catch (error) {

            console.error(error);

            alert("Failed to save technician.");

        }

    };

    return (

        <form
            className="technician-form"
            onSubmit={handleSubmit}
        >

            <div className="form-row">

                <Input
                    label="Employee Code"
                    name="employeeCode"
                    value={formData.employeeCode}
                    onChange={handleChange}
                    placeholder="EMP001"
                    required
                />

                <Input
                    label="First Name"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Enter First Name"
                    required
                />

            </div>

            <div className="form-row">

                <Input
                    label="Last Name"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Enter Last Name"
                    required
                />

                <Input
                    label="Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Email"
                    required
                />

            </div>

            <div className="form-row">

                <Input
                    label="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter Phone Number"
                    required
                />

                <Input
                    label="Specialization"
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleChange}
                    placeholder="Electrical / HVAC / Mechanical"
                />

            </div>

            <div className="form-row">

                <Input
                    label="Experience (Years)"
                    type="number"
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    placeholder="Years"
                    required
                />

                <Select
                    label="Status"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    options={[
                        {
                            label: "Available",
                            value: "Available",
                        },
                        {
                            label: "Busy",
                            value: "Busy",
                        },
                        {
                            label: "On Leave",
                            value: "On Leave",
                        },
                    ]}
                />

            </div>

            <div className="button-container">

                <Button
                    text={
                        technicianId
                            ? "Update Technician"
                            : "Save Technician"
                    }
                    type="submit"
                    variant="success"
                />

            </div>

        </form>

    );

}

export default TechnicianForm;