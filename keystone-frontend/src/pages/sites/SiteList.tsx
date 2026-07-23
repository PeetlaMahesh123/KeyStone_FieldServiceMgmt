import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./SiteList.css";

import MainLayout from "../../layouts/MainLayout";

import SiteTable from "../../components/sites/SiteTable";

import PageHeader from "../../components/common/PageHeader/PageHeader";
import SearchBar from "../../components/common/SearchBar/SearchBar";

import { getSites } from "../../services/siteService";

import type { Site } from "../../types/site";

function SiteList() {

    const navigate = useNavigate();

    const [sites, setSites] = useState<Site[]>([]);

    const [search, setSearch] = useState("");

    useEffect(() => {

        loadSites();

    }, []);

    const loadSites = async () => {

        try {

            const data = await getSites();

            setSites(data);

        } catch (error) {

            console.error(error);

            alert("Failed to load Sites.");

        }

    };

    const filteredSites = sites.filter((site) =>

        (site.siteCode ?? "")
            .toLowerCase()
            .includes(search.toLowerCase()) ||

        (site.siteName ?? "")
            .toLowerCase()
            .includes(search.toLowerCase()) ||

        (site.city ?? "")
            .toLowerCase()
            .includes(search.toLowerCase())

    );

    return (

        <MainLayout>

            <div className="site-list">

                <PageHeader
                    title="Site Management"
                    subtitle="Manage customer sites"
                    buttonText="+ Add Site"
                    onButtonClick={() => navigate("/sites/add")}
                />

                <SearchBar
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search Site..."
                />

                <SiteTable
                    sites={filteredSites}
                />

            </div>

        </MainLayout>

    );

}

export default SiteList;