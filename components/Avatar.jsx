import Image from "next/image";
import { useMoralis } from "react-moralis";

const Avatar = ({ username }) => {
  const { user } = useMoralis();
  return (
    <div>
      <Image
        className="bg-black rounded-full cursor-pointer hover:opacity-75"
        src={`https://avatars.dicebear.com/api/pixel-art/${
          username || user.get("username")
        }.svg`}
        layout="fill"
      />
      {/*  */}
    </div>
  );
};

export default Avatar;
