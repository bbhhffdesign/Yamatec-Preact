import { render } from "preact";
import DeviceSize from "./jsx/utils/DeviceSize";
import Hero from "./jsx/sections/Hero";
import Us from "./jsx/sections/Us";
// import "normalize.css";
import "./scss/index.scss";

export function App() {
  return (
    <>
      <Hero />
      <Us />
      <DeviceSize />
    </>
  );
}

render(<App />, document.getElementById("app"));
