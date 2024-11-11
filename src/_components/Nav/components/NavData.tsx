import { Link } from "react-router-dom";

export const logedItems = [
    {
      label: (
        <Link
          to="/account"
          className="block px-4 py-2 text-sm text-gray-700 hover:text-indigo-600"
        >
          حسابي
        </Link>
      ),
      key: "0",
    },
  ];
  
 export const notLogedItems = [
    {
      label: (
        <Link
          to={"/auth?mode=login"}
          className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:text-indigo-600"
        >
          دخول
        </Link>
      ),
      key: "0",
    },
    // {
    //   label: (
    //     <Link
    //       to={`/auth?mode=register`}
    //       className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:text-indigo-600"
    //     >
    //       Register
    //     </Link>
    //   ),
    //   key: "1",
    // },
  ];