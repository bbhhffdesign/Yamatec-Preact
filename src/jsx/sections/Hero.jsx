import { useAnimate } from "motion/react-mini";
import NavBar from "../components/NavBar";
import BadgeTag from "../components/BadgeTag";

function Hero() {
  return (
    <section className="hero">
      <div className="separator">10% dispositivos</div>
      <NavBar />
      <BadgeTag text={"Potenciamos tu PC de Trabajo o Gaming"} />
      <h1>¿Tu PC ya no rinde al Máximo?</h1>
    </section>
  );
}

export default Hero;
