import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Gallery() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Har bir rasm uchun transform qiymatlari
  const translateY1 = useTransform(scrollYProgress, [0, 0.25], ["0%", "-100%"]);
  const translateY2 = useTransform(scrollYProgress, [0.25, 0.5], ["100%", "0%"]);
  const translateY3 = useTransform(scrollYProgress, [0.5, 0.75], ["100%", "0%"]);
  const translateY4 = useTransform(scrollYProgress, [0.75, 1], ["100%", "0%"]);

  return (
    <div
      ref={containerRef}
      style={{
        height: "400vh", // har bir rasm uchun bitta ekran
        position: "relative",
      }}
    >
      {/* Sticky konteyner */}
      <div
        style={{
          position: "sticky",
          top: 0,
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        {/* 1-rasm */}
        <motion.img
          src="https://picsum.photos/id/1018/1000/600/"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            y: translateY1,
            zIndex: 1,
          }}
        />

        {/* 2-rasm */}
        <motion.img
          src="https://picsum.photos/id/1015/1000/600/"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            y: translateY2,
            zIndex: 2,
          }}
        />

        {/* 3-rasm */}
        <motion.img
          src="https://picsum.photos/id/1016/1000/600/"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            y: translateY3,
            zIndex: 3,
          }}
        />

        {/* 4-rasm */}
        <motion.img
          src="https://picsum.photos/id/1019/1000/600/"
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            y: translateY4,
            zIndex: 4,
          }}
        />
      </div>
    </div>
  );
}
