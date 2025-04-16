import { render } from 'preact';
import DeviceSize from './jsx/utils/DeviceSize';
import Hero from './jsx/sections/Hero';
// import "normalize.css";
import './index.css';

export function App() {
	return (
		<>
		  <Hero />
		  <DeviceSize />
		</>
	  );
}


render(<App />, document.getElementById('app'));
