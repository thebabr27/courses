class Jumbotron {
	constructor () {}
	
	help() {
		console.log('jumbotron.standard("","","bg-light","", ['+'\n'+
			'{layout: "col", items: ['+'\n'+
			'\t'+'display4.get("","Prova","",""),'+'\n'+
			'\t'+'p.get("","This is a simple hero unit, a simple jumbotron-style component","",""),'+'\n'+
			'\t'+'hr.get("","","my-4	",""),'+'\n'+
			'\t'+'p.get("","It uses utility classes for typography and spacing to space content out within","",""),'+'\n'+
			'\t'+'a.get("","Learn more","btn btn-primary text-light",""),'+'\n'+
			'\t'+']'+'\n'+
			'},'+'\n'+
			']),');
		return '';	
	}
	
	standard(id, txt, classes, attributes, items) {
		var allitems = []; var allayout = '';
		for (var j=0; j<items.length;j++) {
			for (var i=0; i<items[j].items.length;i++) {
				allitems += build.li("","","","", items[j].items[i]);
			}
			allayout += build.div("","",items[j].layout,"", [build.ul("","","list-unstyled","", [allitems])]);
			allitems = '';
		}
		return build.row(id, txt, "jumbotron p-0 " + classes, attributes, [allayout]);
	}
}

jumbotron = new Jumbotron();