import Image from "next/image";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";
import ChangeUsername from "./ChangeUsername";
import Logout from "./Logout";
import { useRouter } from "next/router";

const Header = () => {
  const { user } = useMoralis();
  const router = useRouter();
  return (
    <div className="text-pink-600 sticky top-0 p-5 z-50 bg-black bg-opacity-50 shadow-sm border-b-2 border-pink-700">
      <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
          <Image
            onClick={() => router.push("https://twitter.com/Elliop_Sh")}
            src="/Elliop.jpeg"
            layout="fill"
            className="rounded-full object-cover cursor-pointer"
          />
        </div>
        <div className="col-span-4 text-left lg:text-center">
          <div className="h-32 w-32 relative lg:mx-auto border-pink-800 border-4 rounded-full">
            <Avatar />
          </div>
          <h1 className="text-2xl">Welcome to Metalliop</h1>
          <h2 className="text-3xl font-bold truncate">{user.getUsername()}</h2>
          <ChangeUsername />
          <Logout />
        </div>
      </div>
    </div>
  );
};

export default Header;
