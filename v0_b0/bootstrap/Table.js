class Table {
	constructor () {}
	
	help() {
		console.log();
		return '';	
	}

	standard(id, txt, classes, attributes, items) {
		var allitems = []; var allayout = '';
		for (var j=0; j<items.length;j++) {
			for (var i=0; i<items[j].items.length;i++) {
				allitems += build.li("","","","", items[j].items[i]);
			}
			allayout += build.div("","",items[j].layout,"", [build.ul("","","list-unstyled text-small ","", [allitems])]);
			allitems = '';
		}
		return build.section(id, txt, classes, attributes, [
			build.div("", "", "container pt-4 my-md-5 pt-md-5", "", [
				build.row("","","","", [allayout])
			])
		]);
	}
}

table = new Table();