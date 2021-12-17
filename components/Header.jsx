import Image from "next/image";
import { useMoralis } from "react-moralis";

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
