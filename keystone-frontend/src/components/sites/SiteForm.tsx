import { useEffect, useState, type FormEvent } from "react";

import "./SiteForm.css";

import Input from "../common/Input/Input";
import Select from "../common/Select/Select";
import Button from "../common/Button/Button";

import { createSite } from "../../services/siteService";
import { getCustomers } from "../../services/customerService";

function SiteForm() {

    const [customers, setCustomers] = useState<any[]>([]);

    const [formData, setFormData] = useState({

        siteCode: "",

        siteName: "",

        customerId: "",

        email: "",

        contactPerson: "",

        contactNumber: "",

        address: "",

        city: "",

        state: "",

        pincode: "",

        active: true,

    });

    useEffect(() => {

        loadCustomers();

    }, []);

    const loadCustomers = async () => {

        try {

            const data = await getCustomers();

            setCustomers(data);

        } catch (error) {

            console.error(error);

        }

    };

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

    const handleSubmit = async (

        event: FormEvent<HTMLFormElement>

    ) => {

        event.preventDefault();

        try {

            const response = await createSite(formData);

            console.log(response);

            alert("Site Added Successfully");

            setFormData({

                siteCode: "",

                siteName: "",

                customerId: "",

                email: "",

                contactPerson: "",

                contactNumber: "",

                address: "",

                city: "",

                state: "",

                pincode: "",

                active: true,

            });

        } catch (error) {

            console.error(error);

            alert("Failed To Add Site");

        }

    };

    return (

        <form
            className="site-form"
            onSubmit={handleSubmit}
        >

            <div className="form-row">

                <Input
                    label="Site Code"
                    name="siteCode"
                    value={formData.siteCode}
                    onChange={handleChange}
                    placeholder="Enter Site Code"
                />

                <Input
                    label="Site Name"
                    name="siteName"
                    value={formData.siteName}
                    onChange={handleChange}
                    placeholder="Enter Site Name"
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

                            value: customer.id,

                        })),

                    ]}
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
                    label="Contact Person"
                    name="contactPerson"
                    value={formData.contactPerson}
                    onChange={handleChange}
                    placeholder="Enter Contact Person"
                />

                <Input
                    label="Contact Number"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    placeholder="Enter Contact Number"
                />

            </div>
                        <div className="form-row">

                <Input
                    label="Address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter Address"
                />

                <Input
                    label="City"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    placeholder="Enter City"
                />

            </div>

            <div className="form-row">

                <Input
                    label="State"
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    placeholder="Enter State"
                />

                <Input
                    label="Pincode"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    placeholder="Enter Pincode"
                />

            </div>

            <div className="form-row">

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
                    text="Save Site"
                    type="submit"
                />

            </div>

        </form>

    );

}

export default SiteForm;