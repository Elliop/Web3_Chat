import { useMoralis } from "react-moralis";

const Logout = () => {
  const { logout } = useMoralis();

  return (
    <div className="text-sm absolute top-12 right-5 hover:text-pink-700">
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Logout;
