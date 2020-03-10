class Swi {
	constructor () {}
	
	iinitialize(name)  {
		var initialization="";
		switch (name) {
			default:
				initialization = build.build(['var mySwiper = new Swiper (',
				"'.swiper-container', {",
				"direction: 'horizontal',",
				"loop: true, ",
				"pagination: {	",
				"el: '.swiper-pagination',",
				"dynamicBullets: true,",
				"}, ",
				"navigation: {",
				"nextEl: '.swiper-button-next', ",
				"prevEl: '.swiper-button-prev',", 
				"}",
			  "});"]);
		}
		return initialization;
	}
	
	initialize(name)  {
		var initialization="";
		switch (name) {
			default:
				initialization = 	'// Initialize Swiper'+'\n'+
				'var mySwiper = new Swiper ('+'\n'+
				'\t'+"'.swiper-container', {"+'\n'+
				'\t'+"direction: 'horizontal',"+'\n'+
				'\t'+"loop: true, "+'\n'+
				'\t'+"pagination: {	"+'\n'+
				'\t'+"el: '.swiper-pagination',"+'\n'+
				'\t'+"dynamicBullets: true,"+'\n'+
				'\t'+"}, "+'\n'+ 
				'\t'+"navigation: {"+'\n'+ 
				'\t'+"nextEl: '.swiper-button-next', "+'\n'+ 
				'\t'+"prevEl: '.swiper-button-prev',"+'\n'+ 
				'\t'+"}"+'\n'+ 
			  "});"+'\n';
		}
		return initialization + "console.log(\"swiper loaded\");";
	}
	
}

swi = new Swi();