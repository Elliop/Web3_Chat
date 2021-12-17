import Image from "next/image";
import { useMoralis } from "react-moralis";
import Avatar from "./Avatar";

const Header = () => {
  const { user } = useMoralis();
  return (
    <div>
      <div className="">
        <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
          <Image
            src="/Elliop.jpeg"
            layout="fill"
            className="rounded-full object-cover"
          />
        </div>
        <div>
          <div className="h-48 w-48 relative lg:mx-auto border-pink-500 border-8 rounded-full">
            <Avatar />
          </div>
          {/* Avatar */}
          {/* Welcome Message */}
          {/* Username */}
          {/* Change username */}
        </div>
      </div>
    </div>
  );
};

export default Header;
