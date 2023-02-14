import { motion } from "framer-motion";
import "./App.css";
import Envelope from "./components/Envelope";

function App() {
  return (
    <motion.div
      initial={{
        y: 100,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      className="flex justify-center mt-20"
    >
      <Envelope />
    </motion.div>
  );
}

export default App;
