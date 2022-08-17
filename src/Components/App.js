import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import particlesConfig from "./config/particles-config";
import { loadFull } from "tsparticles";

import Navbar from "./Navbar";
import About from "./About";
import Works from "./Works";
import References from "./References";
import Contact from "./Contact";
import Footer from "./Footer";

const App = () => {
	const contentWidthClass = "w-11/12 md:w-5/6 lg:w-[1000px]";

	const particlesInit = useCallback(async (engine) => {
		console.log(engine);
		await loadFull(engine);
	}, []);

	const particlesLoaded = useCallback(async (container) => {
		await console.log(container);
	}, []);

	return (
		<React.Fragment>
			<Particles options={particlesConfig} id="tsparticles" init={particlesInit} loaded={particlesLoaded}>
			</Particles>
			<div className="w-full">
				<Navbar />
				<div className="flex flex-col items-center gap-20 md:gap-40 mt-10 md:mt-20" id="about">
					<div className={contentWidthClass}>
						<About />
					</div>
					<div className={contentWidthClass} id="works">
						<Works />
					</div>
					<div className={contentWidthClass} id="references">
						<References />
					</div>
					<div className={contentWidthClass} id="contact">
						<Contact />
					</div>
				</div>
				<Footer />
			</div>
		</React.Fragment>
	);
};

export default App;
