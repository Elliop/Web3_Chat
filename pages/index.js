import Head from "next/head";
import Login from "../components/Login";
import { useMoralis } from "react-moralis";
import Header from "../components/Header";
import Messages from "../components/Messages";

export default function Home() {
  const { isAuthenticated } = useMoralis();

  if (!isAuthenticated)
    return (
      <>
        <Head>
          <title>Metalliop</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Login />
      </>
    );

  return (
    <div
      className="bg-[url('/Gif3.gif')] bg-no-repeat bg-cover 
      h-screen overflow-y-scroll overflow-hidden"
    >
      <Head>
        <title>Metalliop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-screen-2xl mx-auto">
        <Header />
        <Messages />
      </div>
    </div>
  );
}
