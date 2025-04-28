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

  return (
    <>
        <Hero />

        <Us />


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
