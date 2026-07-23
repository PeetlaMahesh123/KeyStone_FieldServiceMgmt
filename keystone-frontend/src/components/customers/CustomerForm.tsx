import { useState, type FormEvent } from "react";
import "./CustomerForm.css";

import Input from "../common/Input/Input";
import Button from "../common/Button/Button";
import Select from "../common/Select/Select";

import { createCustomer } from "../../services/customerService";

function CustomerForm() {

    const [formData, setFormData] = useState({

        customerCode: "",

        customerName: "",

        company: "",

        email: "",

        phone: "",

        address: "",

        city: "",

        state: "",

        pincode: "",

        active: true,

    });

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {

        const { name, value } = event.target;

        setFormData((prev) => ({
            ...prev,
            [name]:
                name === "active"
                    ? value === "true"
                    : value,
        }));

    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        try {

            const response = await createCustomer(formData);

            alert("Customer Added Successfully");

            console.log(response);

            setFormData({

                customerCode: "",

                customerName: "",

                company: "",

                email: "",

                phone: "",

                address: "",

                city: "",

                state: "",

                pincode: "",

                active: true,

            });

        } catch (error) {

            console.error(error);

            alert("Failed to Add Customer");

        }

    };

    return (<form
            className="customer-form"
            onSubmit={handleSubmit}
        >

            <div className="form-row">

                <Input
                    label="Customer Code"
                    name="customerCode"
                    value={formData.customerCode}
                    onChange={handleChange}
                    placeholder="Enter Customer Code"
                />

                <Input
                    label="Customer Name"
                    name="customerName"
                    value={formData.customerName}
                    onChange={handleChange}
                    placeholder="Enter Customer Name"
                />

            </div>

            <div className="form-row">

                <Input
                    label="Company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Enter Company"
                />

                <Input
                    label="Email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Email"
                />

            </div>

            <div className="form-row">

                <Input
                    label="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter Phone Number"
                />

                <Input
                    label="Address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter Address"
                />

            </div>
                        <div className="form-row">

                <Input
                    label="City"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Enter City"
                />

                <Input
                    label="State"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="Enter State"
                />

            </div>

            <div className="form-row">

                <Input
                    label="Pincode"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    placeholder="Enter Pincode"
                />

                <Select
                    label="Status"
                    name="active"
                    value={String(formData.active)}
                    onChange={handleChange}
                    options={[
                        {
                            label: "Active",
                            value: "true",
                        },
                        {
                            label: "Inactive",
                            value: "false",
                        },
                    ]}
                />

            </div>

            <div className="button-container">

                <Button
                    text="Save Customer"
                    type="submit"
                />

            </div>

        </form>

    );

}

export default CustomerForm;
