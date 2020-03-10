class Footer {
	constructor () {}
	
	help() {
		console.log("Footer.js loaded - insert footer.help() for help");
		console.log('footer.standard("","","bg-primary","", ['+'\n'+
		'\t'+'{layout: "col-12 col-sm-6 text-center text-sm-left", items: ['+'\n'+
		'\t\t'+'img.get("",""," mb-2",\'height=24 width=24 href="#" src="https://getbootstrap.com/docs/4.4/assets/brand/bootstrap-solid.svg"\'),'+'\n'+
		'\t\t'+'small.get("","2019","d-block mb-3 text-light ",\'href="#"\'),'+'\n'+
		'\t\t'+']'+'\n'+
		'\t'+'},'+'\n'+
		'\t'+'{layout: "col-12 col-sm-6 text-center text-sm-left", items: ['+'\n'+
		'\t\t'+'a.get("","page1","text-light ",\'href="#"\'),'+'\n'+
		'\t\t'+'a.get("","page2","text-light ",\'href="#"\'),'+'\n'+
		'\t\t'+'a.get("","page3","text-light ",\'href="#"\'),'+'\n'+
		'\t\t'+']'+'\n'+
		'\t'+'},'+'\n'+
	']),'
	);
	console.log( 'build.section("","bg-light shadow-lg","",['+'\n'+
	'\t'+'build.footer("","container py-4 border-top","",['+'\n'+
	'\t\t'+'build.layout([ { mainlayout: "col-md-3", layout: ["col-12","col-6","col-6","col-6"], items: ['+'\n'+
	'\t\t'+'build.ul("","list-unstyled","",['+'\n'+
	'\t\t'+'build.li("","","",[ img.open("","","mb-2",\'width="24" src="https://getbootstrap.com/docs/4.4/assets/brand/bootstrap-solid.svg"\') ]),'+'\n'+
	'\t\t'+'build.li("","","",[ small.get("","2017-2019","d-block mb-3 text-muted","") ]),'+'\n'+
	'\t\t'+']),'+'\n'+
	'\t\t'+'build.ul("","list-unstyled text-small","",['+'\n'+
	'\t\t'+'h6.get("","Features","",""),'+'\n'+
	'\t\t'+'build.li("","","",[ a.get("","a","text-muted",\'href=""\') ]),'+'\n'+
	'\t\t'+'build.li("","","",[ a.get("","a","text-muted",\'href=""\') ]),'+'\n'+
	'\t\t'+'build.li("","","",[ a.get("","a","text-muted",\'href=""\') ]),'+'\n'+
	'\t\t'+']),'+'\n'+
	'\t\t'+'build.ul("","list-unstyled text-small","",['+'\n'+
	'\t\t'+'h6.get("","Resources","",""),'+'\n'+
	'\t\t'+'build.li("","","",[ a.get("","a","text-muted",\'href=""\') ]),'+'\n'+
	'\t\t'+'build.li("","","",[ a.get("","a","text-muted",\'href=""\') ]),'+'\n'+
	'\t\t'+'build.li("","","",[ a.get("","a","text-muted",\'href=""\') ]),'+'\n'+
	'\t\t'+']),'+'\n'+
	'\t\t'+'build.ul("","list-unstyled text-small","",['+'\n'+
	'\t\t'+'h6.get("","About","",""),'+'\n'+
	'\t\t'+'build.li("","","",[ a.get("","a","text-muted",\'href=""\') ]),'+'\n'+
	'\t\t'+'build.li("","","",[ a.get("","a","text-muted",\'href=""\') ]),'+'\n'+
	'\t\t'+'build.li("","","",[ a.get("","a","text-muted",\'href=""\') ]),'+'\n'+
	'\t\t'+']),'+'\n'+
	'\t\t'+']},'+'\n'+
	'\t\t'+']),'+'\n'+
	'\t'+']),'+'\n'+
	']),'
	);
		return '';	
	}

	standard(id, classes, attributes, items) {
		var allitems = []; var allayout = '';
		for (var j=0; j<items.length;j++) {
			for (var i=0; i<items[j].items.length;i++) {
				allitems += build.li("","","","", items[j].items[i]);
			}
			allayout += build.div("","",items[j].layout,"", [build.ul("","","list-unstyled text-small ","", [allitems])]);
			allitems = '';
		}
		return build.section(id, classes, attributes, [
			build.footer("", "container pt-4 pt-md-5", "", [
				build.row("","","", [allayout])
			])
		]);
	}
}

footer = new Footer();