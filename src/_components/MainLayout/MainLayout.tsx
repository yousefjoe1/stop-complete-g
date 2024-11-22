import { Outlet } from "react-router-dom";
import { Nav } from "../Nav/Nav";

const MainLayout = () => {
  return (
    <>
      <Nav />
      <div dir="rtl" className="min-h-screen container mx-auto lg:px-4 px-4 overflow-x-hidden py-20 max-w-7xl">
        <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
