import React, { useRef } from "react";
import "./Possibility.scss";
import possibility from "../../assets/possibility.png";
import { motion, inView } from "framer-motion";

const Possibility = () => {
  const ref = useRef(null);
  const isInView = inView(ref, { once: true });

  return (
    <div className="gpt3__possibility section__padding" id="Possibility">
      <motion.div
        className="gpt3__possibility-image"
        ref={ref}
        whileInView={
          isInView
            ? {
                scale: [1,  1, 1],
                rotate: [0, 0, 270, 270, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              }
            : {}
        }
        viewport={true}
      >
        <img src={possibility} alt="possibility" />
      </motion.div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to Get Started</h4>
        <h1 className="gradient-text">
          The possibilities are beyond your imagination
        </h1>
        <p>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};

export default Possibility;
