// import { motion } from "framer-motion";
import { useAnimate } from "motion/react-mini";
import { motion } from "motion/react";
import tick from "../../assets/img/tick.webp";
import corner from "../../assets/corner-yamatek.webp";

const BadgeTag = ({text}) => {
  return (
    <div className="badge">
    <aside className="tick">
      <img src={tick} alt="tick" />
    </aside>
    <div className="content-wrapper">
    <motion.div
      className="content"
      initial={{x: "-150%" }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
    >
      <small>{text}</small>
      <img className="corner" src={corner} alt="corner-box" />
    </motion.div>
    </div>
  </div>
  );
};

export default BadgeTag;
