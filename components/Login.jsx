import Image from "next/image";
import { motion } from "framer-motion";
import { useMoralis } from "react-moralis";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const welcomeVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 1, duration: 1.5 },
  },
  exit: {
    x: "-100vh",
    transition: { ease: "easeInOut" },
  },
};

const textVariants = {
  hidden: {
    opacity: 0,
    y: 450,
  },
  visible: {
    opacity: 1,
    y: 10,
    transition: { delay: 2, type: "spring", stiffness: 40 },
  },
  exit: {
    x: "-100vh",
    transition: { ease: "easeInOut" },
  },
};

const buttonVariants = {
  hidden: {
    opacity: 0,
    y: 450,
  },
  visible: {
    opacity: 1,
    y: 10,
    transition: { delay: 2.6, type: "spring", stiffness: 40 },
  },
  exit: {
    x: "-100vh",
    transition: { ease: "easeInOut" },
  },
};

const walletVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { delay: 2.8, duration: 1.5 },
  },
  exit: {
    x: "-100vh",
    transition: { ease: "easeInOut" },
  },
};

const Login = () => {
  const { authenticate } = useMoralis();
  const [animate, setAnimate] = useState(false);
  const router = useRouter();

  useEffect(() => {
    let timer = setTimeout(() => {
      setAnimate(true);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="bg-black relative text-white">
      <div className="flex flex-col absolute z-50 h-4/5 w-full items-start justify-center space-y-4 space-x-8">
        <div></div>
        <motion.p
          variants={welcomeVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="text-4xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-pink-700 to-blue-300"
        >
          Welcome to <br />
          Metalliop
        </motion.p>
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <p className="font-bold text-xl text-slate-400">Private and Secure</p>
          <p className="font-bold text-xl text-slate-400">Own Your Data</p>
        </motion.div>
        <motion.button
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={authenticate}
          className={`py-4 font-bold rounded-lg text-white bg-gradient-to-r from-blue-400 to-pink-500 
          ${animate && "animate-pulse"} hover:animate-none w-1/4`}
        >
          Login
        </motion.button>
        <motion.div
          variants={walletVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <p className="text-slate-500">
            Dont have a wallet?
            <span
              onClick={() => router.push("https://metamask.io/")}
              className="cursor-pointer italic"
            >
              {` Create one now!`}
            </span>
          </p>
        </motion.div>
      </div>
      <div className="w-full h-screen">
        <Image src="/moon-36.gif" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
};

export default Login;
