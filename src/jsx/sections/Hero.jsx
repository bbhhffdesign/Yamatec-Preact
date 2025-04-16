// import { useAnimate } from "motion/react-mini";
import { motion } from "motion/react";
import NavBar from "../components/NavBar";
import BadgeTag from "../components/BadgeTag";
import GamerGuySgv from "../components/GamerGuySvg";

function Hero() {
  // const [scope, animate] = useAnimate();

  return (
    <section className="hero">
      {/* <div className="separator">10% dispositivos</div> */}
      <NavBar />
      <BadgeTag text={"Potenciamos tu PC de Trabajo o Gaming"} />

      <motion.h1
        className="header-h1"
        initial={{
          opacity: 0,
          transform: "translateY(10vh)",
        }}
        animate={{
          opacity: 1,
          transform: "translateY(0)",
        }}
        transition={{
          duration: .5,
          ease: "easeOut",
          
        }}
      >
        ¿Tu <strong>PC</strong> ya
        <br />
        no rinde al
        <br />
        <strong>Máximo?</strong>
      </motion.h1>

      <GamerGuySgv />
    </section>
  );
}

export default Hero;
