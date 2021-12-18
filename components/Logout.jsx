import { useMoralis } from "react-moralis";
import { LogoutIcon } from "@heroicons/react/outline";

const Logout = () => {
  const { logout } = useMoralis();

  return (
    <div className="text-sm absolute top-12 right-5 hover:text-pink-700 cursor-pointer">
      <div
        className="flex justify-center items-center space-x-2 py-2 px-4 border-2 rounded-full 
      bg-black bg-opacity-60 border-pink-500 shadow-md hover:shadow-fuchsia-600"
      >
        <LogoutIcon className="w-4 h-4" />
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
};

export default Logout;
