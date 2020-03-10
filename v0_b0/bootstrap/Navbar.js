class Navbar {
	constructor() {}
	
	help() {
	console.log("//custom navbar example"+'\n'+
		'build.nav("", "", "navbar navbar-expand-md shadow rounded", "", ['+'\n'+
		'\t\t'+'a.get("", "Titolo", "navbar-brand", ""),'+'\n'+
		'\t\t'+'build.button("", "", "navbar-toggler", \'type="button" data-toggle="collapse" data-target="#theNavbar" aria-controls="theNavbar" aria-expanded="false" aria-label="Toggle navigation"\', ['+'\n'+
		'\t\t\t'+'span.get("","","fa fa-bars",""), '+'\n'+
		'\t\t'+']),'+'\n'+
		'\t\t'+'build.div("theNavbar", "", "navbar-collapse collapse", "", ['+'\n'+
		'\t\t\t'+'build.ul("", "", "navbar-nav mr-auto", "", ['+'\n'+
		'\t\t\t\t'+'build.li("", "", "nav-item", "", [ '+'\n'+
		'\t\t\t\t\t'+'a.get("", "Pag1", "nav-link",\'href="#"\')'+'\n'+
		'\t\t\t\t'+']),'+'\n'+
		'\t\t\t\t\t'+'build.li("", "", "nav-item", "", [ '+'\n'+
		'\t\t\t\t\t'+'a.get("", "Pag2", "nav-link",\'href="#"\')'+'\n'+
		'\t\t\t\t'+']),'+'\n'+
		'\t\t\t'+']),'+'\n'+
		'\t\t'+']),'+'\n'+
		'\t'+']),'
		);
	console.log("//standard navbar example"+'\n'+
	'navbar.standard({togglers:[""], layout:["navbar-light","bg-light"],items:['+'\n'+
	'{title:"test", href:"#"},'+'\n'+
	'{title: "page1", href:"#"},'+'\n'+
	'{title: "page2", href:"#"},'+'\n'+
	'{title: "page3", href:"#"}'+'\n'+
	']}),');
	console.log("//centered logo navbar example"+'\n'+
		'build.nav("","","py-2 px-2","",['+'\n'+
		'build.container("","","","",['+'\n'+
		'build.row("","","","",['+'\n'+
		'\t'+'build.div("","","bg-transparent col-4 nav-link d-flex justify-content-center align-items-center","",['+'\n'+
		'\t\t'+'a.get("","","",\'href="#"\'),'+'\n'+
		'\t'+']),'+'\n'+
		'\t'+'build.a("","","col-4 nav-link d-flex justify-content-center align-items-center",\'href=""\',['+'\n'+
		'\t\t\t'+'img.get("","","",\'height=24 width=24 href="#" src="https://getbootstrap.com/docs/4.4/assets/brand/bootstrap-solid.svg"\'),'+'\n'+
		'\t'+']),'+'\n'+
		'build.div("","","col-4 d-flex justify-content-end align-items-center","",[	'+'\n'+
		'\t'+'build.button("toggler1","","navbar-toggler",\' type="button" data-toggle="collapse" data-target="#theNavbar" aria-controls="theNavbar" aria-expanded="false" aria-label="Toggle navigation"\',['+'\n'+
		'\t\t'+'span.get("toggler-icon1","","fa fa-bars",""), '+'\n'+
		'\t'+']),'+'\n'+
		'\t'+'build.button("toggler2","","navbar-toggler d-none",\' type="button" data-toggle="collapse" data-target="#theNavbar" aria-controls="theNavbar" aria-expanded="false" aria-label="Toggle navigation"\',['+'\n'+
		'\t\t'+'span.get("toggler-icon2","","fa fa-times ",""), '+'\n'+
		'\t'+']),'+'\n'+
		']),'+'\n'+		
		'build.div("theNavbar", "", "navbar-collapse collapse", "", ['+'\n'+
		'\t'+'build.ul("", "", "navbar-nav mr-auto", "", ['+'\n'+
		'\t\t'+'build.li("", "", "nav-item", "", [ '+'\n'+
		'\t\t\t'+'a.get("", "Pag1", "nav-link",\'href="#"\')'+'\n'+
		'\t\t'+']),'+'\n'+
		'\t\t'+'build.li("", "", "nav-item", "", [ '+'\n'+
		'\t\t\t'+'a.get("", "Pag2", "nav-link",\'href="#"\')'+'\n'+
		'\t\t'+']),'+'\n'+
		'\t'+']),'+'\n'+
		']),'+'\n'+
		']),'+'\n'+
	']),'+'\n'+
	']),');
	
	return '';
	}	
	
	standard(obj) {
		var allItems = ""; var allclasses = "";
		for (var item in obj.layout) {
			allclasses += " "+obj.layout[item];
		}
		for (var i=1; i<obj.items.length;i++) {
			allItems+= build.li("", "", "", "", [ 
					a.get("", obj.items[i].title, "nav-link", 'href="'+obj.items[i].href+'"')
			]);
		}
		return build.build([
			build.nav("", "navbar navbar-expand-md shadow"+allclasses, "", [
				a.get(obj.items[0].id, obj.items[0].title, "navbar-brand", 'href="'+ obj.items[0].href+'"'),
				but.open(obj.togglers[0], "","navbar-toggler", 'type="button" data-toggle="collapse" data-target="#theNavbar" aria-controls="theNavbar" aria-expanded="false" aria-label="Toggle navigation"'),
					span.get("","","fa fa-bars",""), 
				but.close(),
				build.nav("theNavbar", "navbar-collapse collapse", "", [
					build.ul("", "navbar-nav ml-auto", "", [
						allItems,
					]),
				]),
			]),
		]);
	}
	
	centeredLogo() {
		var allItems1 = ""; var allItems2 = ""; 
		
		for (var i=1; i<items.length;i++) {
			allItems+= build.li("", "", "", "", [ 
					a.get("", items[i].title, "nav-link", 'href="'+items[i].href+'"')
			]);
		}
		return build.nav("","","py-2 px-2","",[
		build.container("","","","",[
		build.row("","","","",[
			build.div("","","bg-transparent col-4 nav-link d-flex justify-content-center align-items-center","",[
				a.get("","","",'href="#"'),
			]),
			build.a("","","col-4 nav-link d-flex justify-content-center align-items-center",'href=""',[
					img.get("","","",'height=24 width=24 href="#" src="https://getbootstrap.com/docs/4.4/assets/brand/bootstrap-solid.svg"'),
			]),
		build.div("","","col-4 d-flex justify-content-end align-items-center","",[	
			build.button("toggler1","","navbar-toggler",' type="button" data-toggle="collapse" data-target="#theNavbar" aria-controls="theNavbar" aria-expanded="false" aria-label="Toggle navigation"',[
				span.get("toggler-icon1","","fa fa-bars",""), 
			]),	
			build.button("toggler2","","navbar-toggler d-none",' type="button" data-toggle="collapse" data-target="#theNavbar" aria-controls="theNavbar" aria-expanded="false" aria-label="Toggle navigation"',[
				span.get("toggler-icon2","","fa fa-times ",""), 
			]),
		]),
		
		build.div("theNavbar", "", "navbar-collapse collapse", "", [
			build.ul("", "", "navbar-nav mr-auto", "", [
				build.li("", "", "nav-item", "", [ 
					a.get("", "Pag1", "nav-link",'href="#"')
				]),
					build.li("", "", "nav-item", "", [ 
					a.get("", "Pag2", "nav-link",'href="#"')
				]),
			]),
		]),
		]),
	]),
	]);
	}
}

var navbar = new Navbar();