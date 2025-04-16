// import { motion } from "framer-motion";
// import { useAnimate } from "motion/react-mini";
import { motion } from "motion/react";
import tick from "../../assets/img/tick.webp";
import corner from "../../assets/img/corner2.webp";

const BadgeTag = ({ text }) => {
  return (
    <motion.div
      className="badge"
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 1.6}}
    >
      <aside className="tick">
        <img src={tick} alt="tick" />
      </aside>
      <div className="content-wrapper">
        <motion.div
          className="content"
          initial={{ x: "-150%" }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1.9 }}
        >
          <small>{text}</small>
          <img className="corner" src={corner} alt="corner-box" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BadgeTag;
