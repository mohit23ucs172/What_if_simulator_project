import { motion } from "framer-motion";
import InputBox from "../components/simulation/InputBox";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center px-6">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Welcome to <span className="text-indigo-500">What-If Simulator</span>
      </motion.h1>
      <motion.p
        className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Type in a “what-if” scenario and see an alternative future timeline
        unfold before your eyes.
      </motion.p>
      <InputBox />
    </section>
  );
}
