import "./SiteTable.css";

import { useNavigate } from "react-router-dom";

import type { Site } from "../../types/site";

import Button from "../common/Button/Button";
import Badge from "../common/Badge/Badge";

type SiteTableProps = {
    sites: Site[];
};

function SiteTable({ sites }: SiteTableProps) {

    const navigate = useNavigate();

    return (

        <div className="site-table-container">

            <table className="site-table">

                <thead>

                    <tr>

                        <th>ID</th>
                        <th>Site Code</th>
                        <th>Site Name</th>
                        <th>Customer</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Status</th>
                        <th>Actions</th>

                    </tr>

                </thead>

                <tbody>

                    {sites.map((site) => (

                        <tr key={site.id}>

                            <td>{site.id}</td>

                            <td>{site.siteCode}</td>

                            <td>{site.siteName}</td>

                            <td>{site.customerName}</td>

                            <td>{site.address}</td>

                            <td>{site.city}</td>

                            <td>{site.state}</td>

                            <td>

                                <Badge
                                    text={site.status}
                                    variant={
                                        site.status === "Active"
                                            ? "success"
                                            : "danger"
                                    }
                                />

                            </td>

                            <td className="action-buttons">

                                <Button
                                    text="View"
                                    variant="secondary"
                                    onClick={() =>
                                        navigate(`/sites/details/${site.id}`)
                                    }
                                />

                                <Button
                                    text="Edit"
                                    onClick={() =>
                                        navigate(`/sites/edit/${site.id}`)
                                    }
                                />

                                <Button
                                    text="Delete"
                                    variant="danger"
                                    onClick={() =>
                                        alert(`Delete ${site.siteName}`)
                                    }
                                />

                            </td>

                        </tr>

                    ))}

                </tbody>

            </table>

        </div>

    );

}

export default SiteTable;