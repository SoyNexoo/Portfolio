import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Reveal = ({ children, width = "fit-content", noOverflow }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const overflow = !noOverflow ? "hidden" : "";

  const mainControlls = useAnimation();
  const slideControlls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControlls.start("visible");
      slideControlls.start("visible");
    }
  }, [isInView]);
  return (
    <div ref={ref} style={{ position: "relative", width, overflow }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControlls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{ hidden: { left: 0 }, visible: { left: "100%" } }}
        initial="hidden"
        animate={slideControlls}
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "#7a38d0",
          zIndex: 20,
        }}
      />
    </div>
  );
};

export default Reveal;