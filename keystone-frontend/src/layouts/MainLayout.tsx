import "./MainLayout.css";

import Sidebar from "../components/layout/Sidebar";
import Topbar from "../components/layout/Topbar";
import Footer from "../components/layout/Footer";

type MainLayoutProps = {
    children: React.ReactNode;
};

function MainLayout({ children }: MainLayoutProps) {

    return (

        <div className="main-layout">

            <Sidebar />

            <div className="main-section">

                <Topbar />

                <main className="content">

                    {children}

                </main>

                <Footer />

            </div>

        </div>

    );

}

export default MainLayout;