const particlesConfig = {
	background: {
		color: {
			value: "#00151c",
		},
	},
	fullScreen: {
		zIndex: -1,
	},
	interactivity: {
		events: {
			onClick: {
				mode: "push",
			},
			onHover: {
				enable: true,
				mode: "repulse",
				parallax: {
					enable: true,
					force: 3,
					smooth: 80,
				},
			},
			resize: false,
		},
		modes: {
			slow: {
				factor: 2,
			},
			attract: {
				distance: 200,
				duration: 0.4,
				easing: "ease-out-quad",
				factor: 1,
				maxSpeed: 50,
				speed: 1,
			},
			bounce: {
				distance: 200,
			},
			bubble: {
				distance: 200,
				duration: 0.4,
				mix: false,
				divs: {
					distance: 200,
					duration: 0.4,
					mix: false,
					selectors: [],
				},
			},
			connect: {
				distance: 80,
				links: {
					opacity: 0.5,
				},
				radius: 60,
			},
			grab: {
				distance: 100,
				links: {
					blink: false,
					consent: false,
					opacity: 1,
				},
			},
			push: {
				default: true,
				groups: [],
				quantity: 4,
			},
			remove: {
				quantity: 2,
			},
			repulse: {
				distance: 200,
				duration: 0.4,
				factor: 100,
				speed: 1,
				maxSpeed: 50,
				easing: "ease-out-quad",
				divs: {
					distance: 200,
					duration: 0.4,
					factor: 100,
					speed: 1,
					maxSpeed: 50,
					easing: "ease-out-quad",
					selectors: [],
				},
			},
			trail: {
				delay: 1,
				pauseOnStop: false,
				quantity: 1,
			},
			light: {
				area: {
					gradient: {
						start: {
							value: "#ffffff",
						},
						stop: {
							value: "#000000",
						},
					},
					radius: 1000,
				},
				shadow: {
					color: {
						value: "#000000",
					},
					length: 2000,
				},
			},
		},
	},
	motion: {
		reduce: {
			factor: 100,
		},
	},
	particles: {
		color: {
			value: "#c7c7c7",
			animation: {
				h: {
					enable: true,
					speed: 100,
				},
				s: {
					speed: 100,
				},
				l: {
					speed: 100,
				},
			},
		},
		move: {
			enable: true,
			path: {},
			outModes: {
				bottom: "out",
				left: "out",
				right: "out",
				top: "out",
			},
			speed: 6,
			spin: {},
		},
		number: {
			density: {
				enable: true,
			},
			value: 10,
		},
		opacity: {
			value: 0.5,
			animation: {
				enable: true,
				speed: 100,
			},
		},
		size: {
			value: {
				min: 0.1,
				max: 3,
			},
			animation: {},
		},
		life: {
			count: 0,
			delay: {
				random: {
					enable: false,
					minimumValue: 0,
				},
				value: 0,
				sync: false,
			},
			duration: {
				random: {
					enable: false,
					minimumValue: 0.0001,
				},
				value: 0,
				sync: false,
			},
		},
		roll: {
			darken: {
				enable: false,
				value: 0,
			},
			enable: false,
			enlighten: {
				enable: false,
				value: 0,
			},
			mode: "vertical",
			speed: 25,
		},
		tilt: {
			random: {
				enable: false,
				minimumValue: 0,
			},
			value: 0,
			animation: {
				enable: false,
				speed: 0,
				decay: 0,
				sync: false,
			},
			direction: "clockwise",
			enable: false,
		},
		twinkle: {
			lines: {
				enable: false,
				frequency: 0.05,
				opacity: 1,
			},
			particles: {
				enable: false,
				frequency: 0.05,
				opacity: 1,
			},
		},
		wobble: {
			distance: 5,
			enable: false,
			speed: {
				angle: 50,
				move: 10,
			},
		},
		orbit: {
			animation: {
				count: 0,
				enable: false,
				speed: 1,
				decay: 0,
				sync: false,
			},
			enable: false,
			opacity: 1,
			rotation: {
				random: {
					enable: false,
					minimumValue: 0,
				},
				value: 45,
			},
			width: 1,
		},
		links: {
			blink: false,
			color: {
				value: "#ffffff",
			},
			consent: false,
			distance: 100,
			enable: true,
			frequency: 1,
			opacity: 0.4,
			shadow: {
				blur: 5,
				color: {
					value: "#000",
				},
				enable: false,
			},
			triangles: {
				enable: false,
				frequency: 1,
			},
			width: 1,
			warp: false,
		},
		repulse: {
			random: {
				enable: false,
				minimumValue: 0,
			},
			value: 0,
			enabled: false,
			distance: 1,
			duration: 1,
			factor: 1,
			speed: 1,
		},
	},
};

export default particlesConfig;
