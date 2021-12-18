import Head from "next/head";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";
import Header from "../components/Header";
import Messages from "../components/Messages";
import Image from "next/image";

export default function Home() {
  const { isAuthenticated } = useMoralis();

  if (!isAuthenticated) return <Login />;
  return (
    <div className="bg-[url('/Gif3.gif')] bg-no-repeat bg-cover h-screen overflow-y-scroll overflow-hidden">
      <Head>
        <title>Metalliop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-screen-2xl mx-auto">
        <Header />
        <Messages />
      </div>
      {/* <div className="w-full h-screen">
        <Image src="/moon-36.gif" layout="fill" objectFit="cover" />
      </div> */}
    </div>
  );
}
