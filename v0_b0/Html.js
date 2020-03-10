class Html {
  constructor() {
  }
  
  help() {
	  console.log(
	  'html.open(cdn.bootstrapCss()),'+'\n'+
	  'html.close(cdn.bootstrapJs())'
	  ); return '';
  }
  
  bootstrapProjectOpen() {
	return this.open([
		cdn.bootstrapCss(),
		cdn.fontawesomeCss(),
		cdn.normalize(),
		cdn.baseCss("./src/css/style.css"),
	]);
  }
  
  bootstrapProjectClose() {
	return this.close([
		cdn.firebase(),
		cdn.bootstrapJs(),
		cdn.baseJs("./src/js/script.js")
	]);
  }
  
  open(title, cdns) {
	  var items = '';
	  if (cdns) { for (var i=0;i<cdns.length;i++) {
			items += cdns[i];
		}
	  }
	    return htm.open( "", "", "", "" )+
		hea.open( "", "", "", "" )+
		tit.get( "", title, "", "" )+
		items+
		hea.close()+
		bod.open( "", "", "", "" )+
	  '';
  }
  
  close(scripts) {
		var items = '';
		if (scripts) { for (var i=0;i<scripts.length;i++) {
				items += scripts[i];
			}
		}
		return items+
		bod.close()+
		htm.close();
  }

}

html = new Html();
