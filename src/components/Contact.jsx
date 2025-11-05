import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" style={{
      padding: "100px 20px",
      textAlign: "center",
      background: "#222",
      color: "white"
    }}>
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{ fontSize: "2.5rem", marginBottom: "10px" }}
      >
        Contact Us
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        style={{ marginTop: "20px", fontSize: "1.25rem" }}
      >
        Email: hello@framerlanding.com
      </motion.p>
    </section>
  );
}
