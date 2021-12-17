import Image from "next/image";
import { motion } from "framer-motion";
import { useMoralis } from "react-moralis";

const containerVariants = {
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

const Login = () => {
  const { authenticate } = useMoralis();
  return (
    <div className="bg-black relative text-white">
      <div className="flex flex-col absolute z-50 h-4/5 w-full items-start justify-center space-y-4 space-x-8">
        <div></div>
        <motion.p
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="text-4xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-blue-400 to-pink-500"
        >
          Welcome to <br />
          Metalliop
        </motion.p>
        <motion.div
          initial={{ y: 450 }}
          animate={{ y: 10 }}
          transition={{ delay: 2, type: "spring", stiffness: 40 }}
        >
          <p className="font-bold text-xl text-slate-400">Private and Secure</p>
          <p className="font-bold text-xl text-slate-400">Own Your Data</p>
        </motion.div>
        <motion.button
          initial={{ y: 450 }}
          animate={{ y: 10 }}
          transition={{ delay: 2.4, type: "spring", stiffness: 40 }}
          onClick={authenticate}
          className="py-4 font-bold rounded-lg text-white bg-gradient-to-r from-blue-400 to-pink-500 
          animate-pulse hover:animate-none w-1/4"
        >
          Login
        </motion.button>
      </div>
      <div className="w-full h-screen">
        <Image src="/moon-36.gif" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
};

export default Login;
