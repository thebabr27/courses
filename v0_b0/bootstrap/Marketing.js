class Marketing {
  constructor() {
  }
  
  help() {
	 console.log('marketing.standard("","","bg-dark text-light","", ['+'\n'+
			'{layout: "col-12 col-md-4 text-center ", items: ['+'\n'+
				'build.div("","","mx-auto rounded-circle overflow-hidden",\'style="width:200px;height:200px"\',['+'\n'+
					'img.get("","","",\'style="width:200px;height:auto" src="https://images.unsplash.com/photo-1504626113995-a0e5d91f925d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"\'),	'+'\n'+
				']),'+'\n'+
				'h2.get("","Heading","",""),'+'\n'+
				'p.get("","nec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.","",""),'+'\n'+
				'a.get("","Click","btn btn-primary",""),'+'\n'+
				']'+'\n'+
			'},{layout: "col-12 col-md-4 text-center ", items: ['+'\n'+
				'build.div("","","mx-auto rounded-circle overflow-hidden",\'style="width:200px;height:200px"\',['+'\n'+
					'img.get("","","",\'style="height:auto; width:200px;" src="https://images.unsplash.com/photo-1541689592655-f5f52825a3b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=602&q=80"\'),'+'\n'+
				']),'+'\n'+
				'h2.get("","Heading","",""),'+'\n'+
				'p.get("","nec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.","",""),'+'\n'+
				'a.get("","Click","btn btn-primary",""),'+'\n'+
				']'+'\n'+
			'},{layout: "col-12 col-md-4 text-center ", items: ['+'\n'+
				'build.div("","","mx-auto rounded-circle overflow-hidden",\'style="width:200px;height:200px"\',['+'\n'+
					'img.get("","","",\'style="height:200px; width:auto;" src="https://images.unsplash.com/photo-1516924962500-2b4b3b99ea02?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"\'),'+'\n'+
				']),'+'\n'+
				'h2.get("","Heading","",""),'+'\n'+
				'p.get("","nec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.","",""),'+'\n'+
				'a.get("","Click","btn btn-primary",""),'+'\n'+
				']'+'\n'+
			'},'+'\n'+
		']),'); 
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
		return build.row(id, txt, "jumbotron " + classes, attributes, [allayout]);
	}

}

marketing = new Marketing();
