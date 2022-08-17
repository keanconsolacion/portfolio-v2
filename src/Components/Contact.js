import React from "react";
import { contacts } from "../data";

const renderContacts = () => {
	return contacts.map((contact) => {
		return (
			<a href={contact.link} key={contact.source} target="_blank" rel="noreferrer">
				<div className="flex items-center gap-6 rounded-xl bg-links p-6 anim-hover-scale-110">
					<img className="w-[50px]" src={contact.logo} alt={contact.source}/>
					<h1 className="text-xl text-accent">{contact.name}</h1>
				</div>
			</a>
		);
	});
};

const Contact = () => {
	return (
		<div className="flex flex-col items-center gap-8 text-accent">
			<h1 className="text-center text-primary font-bold">
				04. <span className="text-xl tracking-wide text-accent">Contact Information</span>
			</h1>
			<h1 className="font-bold text-5xl font-sans">
				Get In <span className="text-primary">Touch!</span>
			</h1>
			<div className="flex flex-col gap-6">{renderContacts()}</div>
		</div>
	);
};

export default Contact;
