import { LogIn, LogOut, User } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../../../_context/conexts";
import { Dropdown, MenuProps } from "antd";
import { logedItems, notLogedItems } from "./NavData";

const ProfileMenu = () => {
  const context = useContext(MyContext)!; // The `!` asserts that context is not undefined
  const { contextValue, setContextValue } = context;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const redirect = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("playerToken");
    redirect("/");
    setContextValue(!contextValue);
  };

  useEffect(() => {
    const token = localStorage.getItem("playerToken");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [contextValue]);

  const items: MenuProps["items"] = isLoggedIn
    ? [
        ...logedItems,
        {
          label: (
            <button type="button" title="logout">
              خروج
            </button>
          ),
          key: "3",
          onClick: () => {
            handleLogout();
          },
          icon: <LogOut size={16} />,
        },
      ]
    : notLogedItems;

  const menuProps = {
    items,
  };
  return (
    <>
      <Dropdown menu={menuProps} trigger={["click"]}>
        <button
          type="button"
          className="relative flex items-center justify-center lg:w-8 lg:h-8 h-10 w-10 rounded-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 hover:bg-indigo-100 transition duration-150 ease-in-out"
        >
          {isLoggedIn ? (
            <User className="lg:h-6 lg:w-6 w-6 h-6 text-gray-600" />
          ) : (
            <LogIn className="lg:h-6 lg:w-6 w-6 h-6 text-gray-600" />
          )}
          <span className="absolute -left-1.5 top-0 z-20 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-85"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-green-700"></span>
          </span>
        </button>
      </Dropdown>
    </>
  );
};

export default ProfileMenu;
