import { render } from "preact";
import { useEffect, useState } from "preact/hooks";
import { useObserver } from "preact-intersection-observer";
import Hero from "./jsx/sections/Hero";
import Us from "./jsx/sections/Us";
// import Services from "./jsx/sections/Services";
// import Contact from "./jsx/sections/Contact";
import DeviceSize from "./jsx/utils/DeviceSize";
import "./scss/index.scss";

export function App() {
  const [currentSection, setCurrentSection] = useState(null);

  const [heroRef, inViewHero] = useObserver();
  const [usRef, inViewUs] = useObserver();
  // const [servicesRef, inViewServices] = useObserver();
  // const [contactRef, inViewContact] = useObserver();

  // Detectar la sección actual
  useEffect(()=> {
    if (inViewHero && currentSection !== "hero") {
      setCurrentSection("hero");
    } else if (inViewUs && currentSection !== "us") {
      setCurrentSection("us");
    // } else if (inViewServices && currentSection !== "services") {
    //   setCurrentSection("services");
    // } else if (inViewContact && currentSection !== "contact") {
    //   setCurrentSection("contact");
    }
  }, [inViewHero, inViewUs])

  return (
    <>
      <section className= "hero" ref={heroRef}>
        <Hero />
      </section>

      <section className= "us" ref={usRef}>
        <Us />
      </section>

      {/* <section ref={servicesRef}>
        <Services />
      </section>

      <section ref={contactRef}>
        <Contact />
      </section> */}

      <DeviceSize />

      <div className="current-section">
        {/* Mostrar la sección activa en pantalla */}
        Sección actual visible: {currentSection}
      </div>
    </>
  );
}

render(<App />, document.getElementById("app"));
