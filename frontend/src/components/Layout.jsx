import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";

// created a Layout component that includes the Navbar and an Outlet component from react-router-dom. 
// The Outlet is where child routes will be rendered.

export const Layout = () => {
    return (
    <>
        <Navbar />
        <div className="content">
            <Outlet />
        </div>
    </>
    );
};