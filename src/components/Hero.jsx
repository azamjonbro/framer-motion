import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "linear-gradient(135deg, #667eea, #764ba2)",
      color: "white",
      textAlign: "center",
      padding: "0 20px"
    }}>
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{ fontSize: "3rem", marginBottom: "20px" }}
      >
        Build Beautiful Landing Pages ✨
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        style={{ maxWidth: "600px", fontSize: "1.2rem" }}
      >
        Using React + Framer Motion to create stunning, smooth animations easily.
      </motion.p>
    </section>
  );
}
