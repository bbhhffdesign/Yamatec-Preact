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
  useEffect(() => {
    let newSection = null;
    if (inViewHero) {
      newSection = "hero";
    } else if (inViewUs) {
      newSection = "us";
    }
  
    if (newSection !== currentSection) {
      setCurrentSection(newSection);
      console.log("Sección actual visible:", newSection);
    }
  }, [inViewHero, inViewUs]);

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
    </>
  );
}

render(<App />, document.getElementById("app"));
