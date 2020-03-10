class Carddeck {
	constructor() {}
	
	help() {
		console.log('carddeck.custom("","","","",['+'\n'+
	'{layout:"col-12 col-md-4", items: [build.div("","","text-center card mb-4 shadow-sm","",['+'\n'+
	'\t'+'build.div("","","card-header","",['+'\n'+
	'\t\t'+'h4.get("","Free","my-0 font-weight-normal","")'+'\n'+
	'\t'+']),'+'\n'+
	'\t'+'build.div("","","card-body","",['+'\n'+
	'\t\t'+'build.h1("","$0","","",[small.get(""," / mo","text-muted","")]),'+'\n'+
	'\t\t'+'build.list("","","list-unstyled mt-3 mb-4","",['+'\n'+
	'\t\t\t'+'p.get("","10 users included","m-0",""),'+'\n'+
	'\t\t\t'+'p.get("","2 GB of storage","m-0",""),'+'\n'+
	'\t\t\t'+'p.get("","Email support","m-0",""),'+'\n'+
	'\t\t\t'+'p.get("","Help center access","m-0",""),'+'\n'+
	'\t\t'+']),'+'\n'+
	'\t'+'button.get("","Sign up for free","btn btn-lg btn-block btn-outline-primary",""),'+'\n'+
	'\t'+']),'+'\n'+
	']),'+'\n'+
']},'+'\n'+	
'{layout:"col-12 col-md-4", items: [build.div("","","text-center card mb-4 shadow-sm","",['+'\n'+
	'\t'+'build.div("","","card-header","",['+'\n'+
	'\t\t'+'h4.get("","Free","my-0 font-weight-normal","")'+'\n'+
	'\t'+']),'+'\n'+
	'\t'+'build.div("","","card-body","",['+'\n'+
	'\t\t'+'build.h1("","$0","","",[small.get(""," / mo","text-muted","")]),'+'\n'+
	'\t\t'+'build.list("","","list-unstyled mt-3 mb-4","",['+'\n'+
	'\t\t\t'+'p.get("","10 users included","m-0",""),'+'\n'+
	'\t\t\t'+'p.get("","2 GB of storage","m-0",""),'+'\n'+
	'\t\t\t'+'p.get("","Email support","m-0",""),'+'\n'+
	'\t\t\t'+'p.get("","Help center access","m-0",""),'+'\n'+
	'\t\t'+']),'+'\n'+
	'\t'+'button.get("","Sign up for free","btn btn-lg btn-block btn-outline-primary",""),'+'\n'+
	'\t'+']),'+'\n'+
	']),'+'\n'+
']},'+'\n'+	
'{layout:"col-12 col-md-4", items: [build.div("","","text-center card mb-4 shadow-sm","",['+'\n'+
	'\t'+'build.div("","","card-header","",['+'\n'+
	'\t\t'+'h4.get("","Free","my-0 font-weight-normal","")'+'\n'+
	'\t'+']),'+'\n'+
	'\t'+'build.div("","","card-body","",['+'\n'+
	'\t\t'+'build.h1("","$0","","",[small.get(""," / mo","text-muted","")]),'+'\n'+
	'\t\t'+'build.list("","","list-unstyled mt-3 mb-4","",['+'\n'+
	'\t\t\t'+'p.get("","10 users included","m-0",""),'+'\n'+
	'\t\t\t'+'p.get("","2 GB of storage","m-0",""),'+'\n'+
	'\t\t\t'+'p.get("","Email support","m-0",""),'+'\n'+
	'\t\t\t'+'p.get("","Help center access","m-0",""),'+'\n'+
	'\t\t'+']),'+'\n'+
	'\t'+'button.get("","Sign up for free","btn btn-lg btn-block btn-outline-primary",""),'+'\n'+
	'\t'+']),'+'\n'+
	']),'+'\n'+
']},'+'\n'+
']),');
		console.log('carddeck.standard(['+'\n'+
	'{header: "Titolo1", title: "Prova1", items: ['+'\n'+
	'\t'+'build.h1("","$0 ","","", [small.get("","/ mo","text-muted","")]),'+'\n'+
	'\t'+'p.get("","10 users included","my-0",""),'+'\n'+
	'\t'+'p.get("","2 GB of storage","my-0",""),'+'\n'+
	'\t'+'p.get("","Email support","my-0",""),'+'\n'+
	'\t'+'p.get("","Help center access","my-0",""),'+'\n'+
	'\t'+'button.get("","Join for free"," mt-3 btn btn-outline-primary btn-block",""),'+'\n'+
	']},'+'\n'+
	'{header: "Titolo2", title: "Prova2", items: ['+'\n'+
	'\t'+'build.h1("","$15 ","","", [small.get("","/ mo","text-muted","")]),'+'\n'+
	'\t'+'p.get("","100 users included","my-0",""),'+'\n'+
	'\t'+'p.get("","2 GB of storage","my-0",""),'+'\n'+
	'\t'+'p.get("","Email support","my-0",""),'+'\n'+
	'\t'+'p.get("","Help center access","my-0",""),'+'\n'+
	'\t'+'button.get("","Get started"," mt-3 btn btn-primary btn-block",""),'+'\n'+
	']},'+'\n'+
	'{header: "Titolo3", title: "Prova3", items: ['+'\n'+
	'\t'+'build.h1("","$29 ","","", [small.get("","/ mo","text-muted","")]),'+'\n'+
	'\t'+'p.get("","150 users included","my-0",""),'+'\n'+
	'\t'+'p.get("","2 GB of storage","my-0",""),'+'\n'+
	'\t'+'p.get("","Email support","my-0",""),'+'\n'+
	'\t'+'p.get("","Help center access","my-0",""),'+'\n'+
	'\t'+'button.get("","Contact us"," mt-3 btn btn-outline-success btn-block",""),'+'\n'+
	']},'+'\n'+
'])');
	}
	
	custom(id, txt, classes, attributes, items) {
		var allitems = []; var allayout = '';
		for (var j=0; j<items.length;j++) {
			for (var i=0; i<items[j].items.length;i++) {
				allitems += build.li("","","","", items[j].items[i]);
			}
			allayout += build.div("","",items[j].layout,"", [build.ul("","","list-unstyled text-small ","", [allitems])]);
			allitems = '';
		}
		return build.section(id, txt, classes, attributes, [
			build.div("", "", "container", "", [
				build.row("","","","", [allayout])
			])
		]);
	}
	
	standard(items) {
		var specitems = []; var allitems = []; var allayout = [];
		
		for (var j=0; j<items.length;j++) {
			for (var i=0; i<items[j].items.length;i++) {
				specitems.push(items[j].items[i]);
			}
		allitems.push(
						build.div("","","card mb-4 shadow-sm", "", [	
							build.div("","","card-header", "", [
								h4.get("",items[j].header,"my-0 font-weight-normal","")
							]),
							build.div("","","card-body", "", specitems),
						]),
					); specitems = [];
		
			allayout.push({layout: "col-12 col-md-6 col-lg-4", items: [
					build.div("","","card-deck mb-3 text-center", "", allitems), 
			]});
			allitems = [];
		
		}	
		return this.custom("","","","",allayout);
	}
	
}

carddeck = new Carddeck();