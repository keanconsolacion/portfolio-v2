import React from "react";

const About = () => {
	return (
		<div className="flex flex-col md:gap-4 tracking-tighter">
			<h1 className="text-accent text-xl md:text-3xl">👋 Hi, my name is</h1>
			<h1 className="text-primary font-bold text-3xl md:text-5xl">Ke'an Consolacion.</h1>
			<h1 className="text-accent text-xl md:text-3xl">An Aspiring Software Engineer.</h1>
			<p className="text-accent text-xs mt-5 md:text-lg">
				I’m a fresh graduate from iACADEMY in Makati City who took BSCS Major in Software Engineering. I’m a front-end
				and back-end developer based in Pateros, Manila who primarily makes web applications.
			</p>

			<div className="mt-4 flex flex-col gap-2">
				<h1 className="text-primary font-bold">Education</h1>
				<p className="text-accent font-sans text-sm">
					iACADEMY (2018-2022) - BS Computer Science Major in Software Engineering
				</p>
				<h1 className="text-primary font-bold">Experience/s</h1>
				<p className="text-accent font-sans text-sm">QA Engineer Intern at Plastic Bank (Sep 2021 - March 2022)</p>
			</div>
		</div>
	);
};

export default About;
