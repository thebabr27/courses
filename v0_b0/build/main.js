const home = "index.html"; const hometitle = "Il mio nuovo progetto";
const page1 = "theProject.html"; const page1title = "Il progetto";
//.................
const namesocial1 = "Facebook"; const iconsocial1 = "fab fa-facebook-f"; 
const linksocial1 = "https://www.facebook.com/Fogli-Di-Carta-105480417494151/";
//.................
const termseconditions = "#"; const email = "mail@mail.com";
const phone = "123456789";
const download1 = null; //home
const download2 = null; //page1
//.................
const downloadX = null;  //"style.css"
const downloadY = null;  //"script.js"

const cdncss = null; //cdn.baseCss()
const cdnjs =  //cdn.baseJs()
backgroundcss =   //'background-image: url("../img/sfondo.png");'+'\n';

theHtmlOpen = 	html.open([
		cdn.bootstrapCss(),
		cdn.fontawesomeCss(),
		cdncss,
		//cdn.firebase(),
	]);

theHtmlClose = html.close([
		cdn.bootstrapJs(),
		cdnjs
	]);

theNavbar = navbar.build("", "", "", "", [
	nav.open("", "", "navbar navbar-expand-md shadow rounded", ""),
	a.get("", hometitle, "navbar-brand", ""),
		but.open("", "", "navbar-toggler", 'type="button" data-toggle="collapse" data-target="#theNavbar" aria-controls="theNavbar" aria-expanded="false" aria-label="Toggle navigation"'),
			span.get("","","fa fa-bars",""), 
		but.close(),
		navbar.build("theNavbar", "", "navbar-collapse collapse", "", [
			navbar.buildul("", "", "", "", [
					navbar.a("", "", "", "", [ "", 
						["", page1title, "", 'href="'+page1+'"']
					]),
				]),
				
			]),
		nav.close(),
	]);

theFooter = footer.build("", "", "", "", [
		footer.section("","","","", [
			footer.footer("", "", "border-top pt-4", "", [
				footer.container("", "", "", "", [
					footer.build("", "", "row", "", [
						footer.build("", "", "col-6 col-md-4", "", [
							footer.buildul("", "", "list-unstyled text-small", "", [
								footer.a( "", "", "", "", [ "", 
									["", hometitle, "", 'href="'+home+'"']
								]),
								footer.a( "", "", "", "", [ "", 
									["", 'Copyright 2019', "", ""]
								]),
							]),
						]),
						footer.build("", "", "col-6 col-md-4 order-md-3", "", [
							footer.buildul("", "", "list-unstyled text-small", "", [
								footer.a( "", "", "", "", [ "", 
									["", 'Follow us', "", ""]
								]),
								footer.span( "", "", "d-inline", "", [ "", 
									["", "", iconsocial1, 'href="'+linksocial1+'"'],
								]),
							]),
						]),
						footer.build("", "", "col-6 col-md-4 order-md-3", "", [
							footer.buildul("", "", "list-unstyled text-small", "", [
								footer.a( "", "", "", "", [ "", 
									["", page1title, "", 'href="'+page1+'"']
								]),
							]),
						]),
					]),
				]),
			]),
		]),
	]);

css = build.build([
],downloadX
);

js = build.build([""
], downloadY);

homepage = build.build([
	theHtmlOpen,
	theNavbar,

	cover.build("", "", "text-center", "", [
		cover.h1( "", "", "", "", [ "", 
			["cover", "FOGLI DI CARTA", "", ""]
		]),
		cover.img( "", "", "", "", [ "", 
			["", "", "", 'src="src/img/cover.png"'],
		]),
	]),
	
	main.open("", "", "container", ""),
		br,
		jumbotron.buildrow("", "", "my-5", "", [
			jumbotron.h2( "", "", "col-12", "", [ "", 
				["", "Un giorno ho deciso di raccontare la mia storia a qualcuno che avesse voglia di ascoltarla. E quel qualcuno, a quel punto, decise di raccontarmi la sua.", "", '"']
			]),
			jumbotron.a( "", "", "col-12", "", [ "", 
				["", 'Racconta la tua storia', "", 'href="#"']
			]),
		]),
		
		featurette.buildrow("", "", "", "", [
			featurette.img( "", "", "col12 col-md-6", "", [ "", 
				["", "", "", 'src="src/img/cover2.png"']
			]),
			featurette.h4( "", "", "col12 col-md-6", "", [ "", 
				["", 'Grazie al desiderio di una ragazza che ha subito abusi sessuali da quando era bambina e fino alla sua adolescenza, nasce “Fogli di Carta”. L’obiettivo è quello di generare un cambiamento culturale che porti al rispetto e ad una maggior tutela di minori, bambine e bambini. Anche la tua storia è importante... Può aiutare altri a condividere la propria e a non sentirsi "invisibili".', "", ""]
			]),
		]),
		
		jumbotron.buildrow("", "", "my-5", "", [
			jumbotron.a( "", "", "col-12", "", [ "", 
				["", 'Leggi le altre storie', "", 'href="#"']
			]),
			jumbotron.a( "", "", "col-12", "", [ "", 
				["", 'Racconta la tua storia', "", 'href="#"']
			]),
		]),
	main.close(),
	theFooter,
	theHtmlClose,
], download1
);

	html = homepage + "";
	document.getElementsByTagName("textarea")[1].innerHTML = js;
	document.getElementsByTagName("textarea")[0].innerHTML = html;
	document.getElementById("script").innerHTML = js;
	document.getElementsByTagName("style")[0].innerHTML =  css;
	document.getElementsByTagName("div")[0].innerHTML =  homepage;
