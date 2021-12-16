import Head from "next/head";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login />;
  return (
    <div className="h-screen">
      <Head>
        <title>Metaverse</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col justify-center items-center w-full h-screen space-y-4">
        <h1>Welcome to Metaverse!</h1>
        <button
          className="py-2 px-6 font-bold rounded-lg text-white bg-cyan-700 animate-pulse"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
