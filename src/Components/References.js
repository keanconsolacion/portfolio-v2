import React from "react";
import { references } from "../data";

const renderReferences = () => {
	return references.map((ref) => (
		<div className="flex flex-col gap-2 w-1/2 md:w-1/3 p-4 anim-hover-scale-110" key={ref.title}>
			<a href={ref.link} target="_blank" rel="noreferrer">
				<img src={ref.imgSrc} alt={ref.title} />
			</a>
			<h1 className="text-lg md:text-xl text-accent text-center">{ref.title}</h1>
		</div>
	));
};

const References = () => {
	return (
		<div className="flex flex-col gap-10 ">
			<h1 className="text-center text-primary font-bold">
				03. <span className="text-accent text-xl tracking-wide">My Certifications & Self Learning References</span>
			</h1>
			<div className="flex flex-col gap-2 font-sans text-center text-accent">
				<p className="font-bold">
					“ My favorite go to place during free time,
					<br />
					weekends, and term breaks,
					<span className="text-udemy text-lg"> Udemy!</span> “
				</p>
				<p className="text-sm">(Not that I'm endorsing)</p>
			</div>
			<div className="flex flex-wrap">{renderReferences()}</div>
		</div>
	);
};

export default References;
