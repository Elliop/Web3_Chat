import Image from "next/image";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";
import Logout from "./Logout";

const Header = () => {
  const { user } = useMoralis();
  return (
    <div className="text-pink-500 sticky top-0 p-5 z-50 bg-black shadow-sm border-b-2 border-pink-700">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
          <Image
            src="/Elliop.jpeg"
            layout="fill"
            className="rounded-full object-cover"
          />
        </div>
        <div className="col-span-4 text-left lg:text-center">
          <div className="h-48 w-48 relative lg:mx-auto border-pink-500 border-8 rounded-full">
            <Avatar />
          </div>
          <h1 className="text-3xl">Welcome to Metalliop</h1>
          <h2 className="text-5xl font-bold truncate">{user.getUsername()}</h2>
          <ChangeUsername />
          <Logout />
        </div>
      </div>
    </div>
  );
};

export default Header;
