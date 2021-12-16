import Image from "next/image";

const Login = () => {
  return (
    <div className="bg-black relative text-white">
      <div className="flex flex-col absolute z-50 h-4/5 w-full items-center justify-center space-y-4">
        <Image
          className="object-cover rounded-full animate-pulse"
          src="/LOGO.jpg"
          width={200}
          height={200}
        />
        <button className="p-5 font-bold rounded-lg text-white bg-teal-600 animate-pulse">
          Login to the Metaverse
        </button>
      </div>
      <div className="w-full h-screen">
        <Image src="/BG.jpg" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
};

export default Login;
