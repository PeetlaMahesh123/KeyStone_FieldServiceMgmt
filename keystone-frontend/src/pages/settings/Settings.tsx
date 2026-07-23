import "./Settings.css";

import MainLayout from "../../layouts/MainLayout";
import PageHeader from "../../components/common/PageHeader/PageHeader";

import ProfileSettings from "../../components/settings/ProfileSettings";
import CompanySettings from "../../components/settings/CompanySettings";
import NotificationSettings from "../../components/settings/NotificationSettings";
import SecuritySettings from "../../components/settings/SecuritySettings";
import UserRoleSettings from "../../components/settings/UserRoleSettings";
import SystemSettings from "../../components/settings/SystemSettings";

function Settings() {

    return (

        <MainLayout>

            <div className="settings-page">

                <PageHeader
                    title="Settings"
                    subtitle="Manage application settings"
                />

                <div className="settings-grid">

                    <ProfileSettings />

                    <CompanySettings />

                    <NotificationSettings />

                    <SecuritySettings />

                    <UserRoleSettings />

                    <SystemSettings />

                </div>

            </div>

        </MainLayout>

    );

}

export default Settings;