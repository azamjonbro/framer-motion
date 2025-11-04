import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" style={{ padding: "100px 20px", textAlign: "center" }}>
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Us
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        style={{ maxWidth: "600px", margin: "20px auto" }}
      >
        We create modern web experiences with delightful motion design.
      </motion.p>
    </section>
  );
}
