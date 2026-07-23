import type { FormEvent } from "react";

import "./InventoryForm.css";

import Input from "../common/Input/Input";
import Select from "../common/Select/Select";
import Button from "../common/Button/Button";

function InventoryForm() {

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        alert("Part Saved Successfully!");

    };

    return (

        <form
            className="inventory-form"
            onSubmit={handleSubmit}
        >

            <div className="form-row">

                <Input
                    label="Part Code"
                    placeholder="PRT001"
                />

                <Input
                    label="Part Name"
                    placeholder="Motor"
                />

            </div>

            <div className="form-row">

                <Input
                    label="Category"
                    placeholder="Electrical"
                />

                <Input
                    label="Supplier"
                    placeholder="ABC Suppliers"
                />

            </div>

            <div className="form-row">

                <Input
                    label="Quantity"
                    type="number"
                    placeholder="100"
                />

                <Input
                    label="Unit Price"
                    type="number"
                    placeholder="250"
                />

            </div>

            <div className="form-row">

                <Input
                    label="Warehouse Location"
                    placeholder="Warehouse A"
                />

                <Input
                    label="Minimum Stock"
                    type="number"
                    placeholder="20"
                />

            </div>

            <div className="form-row">

                <Select
                    label="Status"
                    name="status"
                    options={[
                        {
                            label: "In Stock",
                            value: "In Stock",
                        },
                        {
                            label: "Low Stock",
                            value: "Low Stock",
                        },
                        {
                            label: "Out Of Stock",
                            value: "Out Of Stock",
                        },
                    ]}
                />

            </div>

            <div className="button-container">

                <Button
                    text="Save Part"
                    type="submit"
                />

            </div>

        </form>

    );

}

export default InventoryForm;