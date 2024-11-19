import { Link } from "react-router-dom";

export const logedItems = [
    {
      label: (
        <Link
        title="account"
          to="/account"
          className="block px-4 py-2 text-sm text-gray-700 hover:text-indigo-600"
        >
          حسابي
        </Link>
      ),
      key: "0",
    },
    {
      label: (
        <Link
        title="all-info"

          to="/all-info"
          className="block px-4 py-2 text-sm text-gray-700 hover:text-indigo-600"
        >
          المعلومات
        </Link>
      ),
      key: "1",
    },
  ];
  
 export const notLogedItems = [
    {
      label: (
        <Link
        title="log in"
          to={"/auth?mode=login"}
          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:text-indigo-600"
        >
          دخول
        </Link>
      ),
      key: "0",
    },
  ];