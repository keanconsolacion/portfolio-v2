import React from "react";
import { logo } from "./Icons";
import { linkIDs } from "../data";

const renderLinks = () => {
	return linkIDs.map((link, index) => {
		return (
			<a className="flex gap-2 tracking-tighter anim-hover-scale" href={`#${link}`} key={link}>
				<p className="text-primary">0{++index}</p>
				<p className="text-accent">{link}</p>
			</a>
		);
	});
};

const Navbar = () => {
	return (
		<div className="flex justify-between p-6 flex-wrap">
			{/* Logo */}
			<button className="flex gap-2 anim-hover-scale">
				{logo}
				<h1 className="text-accent font-bold ">KMC</h1>
			</button>
			{/* Links */}
			<div className="hidden md:flex gap-4">{renderLinks()}</div>
		</div>
	);
};

export default Navbar;
