import { Outlet } from "react-router-dom";
import { Nav } from "../Nav/Nav";

const MainLayout = () => {
  return (
    <>
      <Nav />
      <div dir="rtl" className="min-h-screen container mx-auto lg:px-0 px-4 overflow-x-hidden py-20">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
