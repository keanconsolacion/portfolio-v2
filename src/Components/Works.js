import React from "react";
import { workList } from "../data";
import { externalLink } from "./Icons";

const renderWorks = () => {
	return workList.map((work, index) => {
		const isLeft = index % 2 === 0;
		const itemsDirection = index % 2 === 0 ? "items-start" : "items-end";
		const mainDivStyle = `flex flex-col gap-6 text-accent lg:items-center ${
			isLeft ? "lg:flex-row text-start" : "lg:flex-row-reverse text-end"
		}`;

		const hasLink = work.status === "Deployed" || work.status === "Demo";
		const deployedStatusWithLink = (
			<a className="flex items-end gap-1" href={work.link} target="_blank" rel="noreferrer">
				{externalLink}
				{work.status}
			</a>
		);

		const techDivStyle = `flex flex-wrap gap-3 mt-5 md:justify-start md:gap-4 md:w-5/6 md:mt-10`;

		return (
			<div className={mainDivStyle} key={index}>
				{/* Image */}
				<img className="lg:w-2/3 drop-shadow-image anim-hover-scale" src={work.imgSrc} alt={work.title} />
				{/* Image End */}
				{/* Content */}
				<div className={`flex flex-col gap-2 ${itemsDirection}`}>
					<h1 className={`text-sm font-bold ${hasLink ? "anim-hover-scale-110" : ""}`}>
						{hasLink ? deployedStatusWithLink : work.status}
					</h1>
					<h1 className="text-lg font-bold text-primary">{work.title}</h1>
					<p className="text-sm">{work.description}</p>
					<div className={techDivStyle}>
						{work.technologies.map((tech) => (
							<h1 className="text-xs" key={tech}>
								{tech}
							</h1>
						))}
					</div>
				</div>
				{/* Content End */}
			</div>
		);
	});
};

const Works = () => {
	return (
		<>
			<h1 className="w-full text-center text-primary">
				02. <span className="text-accent text-xl tracking-wide">Some Things I've Worked On</span>
			</h1>
			<div className="flex flex-col gap-20 mt-10">{renderWorks()}</div>
		</>
	);
};

export default Works;
