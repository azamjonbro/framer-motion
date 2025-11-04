import { motion } from "framer-motion";

export default function Features() {
  const features = [
    "Smooth animations",
    "Responsive design",
    "Reusable components",
    "Easy customization"
  ];

  return (
    <section id="features" style={{
      padding: "100px 20px",
      background: "#f5f5f5",
      textAlign: "center"
    }}>
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Features
      </motion.h2>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "20px",
        marginTop: "40px"
      }}>
        {features.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.2 }}
            style={{
              background: "white",
              padding: "30px",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.05)"
            }}
          >
            {f}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
