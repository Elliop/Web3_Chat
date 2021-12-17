import Head from "next/head";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";
import Header from "../components/Header";

export default function Home() {
  const { isAuthenticated, logout } = useMoralis();

  if (!isAuthenticated) return <Login />;
  return (
    <div className="h-screen">
      <Head>
        <title>Metalliop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <div className="max-w-screen-2xl mx-auto">
          <Header />
          {/* msgs */}
        </div>
      </div>
      <button
        className="py-2 px-6 font-bold rounded-lg text-white bg-cyan-700 animate-pulse"
        onClick={logout}
      >
        Logout
      </button>
    </div>
  );
}
