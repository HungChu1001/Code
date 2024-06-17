import React from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Routers from "../routes/Routers";
import LeftSidebar from "../components/LeftSideBar";

const Layout = () => {
  const location = useLocation();

  return (
    <>
      {location.pathname.startsWith("/patients") ||
      location.pathname.startsWith("/records") ||
      location.pathname.startsWith("/record") ? (
        <div className="flex">
          <LeftSidebar />
          <main className="ml-64 flex-1 p-4">
            <Routers />
          </main>
        </div>
      ) : (
        <>
          <Header />
          <main>
            <Routers />
          </main>
          <Footer />
        </>
      )}
    </>
  );
};

export default Layout;
