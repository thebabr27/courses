class Featurette {
	constructor() {}
	
	help() {
		console.log('featurette.buildrow("", "", "", "", ['+'\n'+
		'\t\t\t'+'featurette.img( "", "", "col12 col-md-6", "", [ "", '+'\n'+
		'\t\t\t\t'+'["", "", "", \'src="src/img/cover2.png"\']'+'\n'+
		'\t\t\t'+']),'+'\n'+
		'\t\t\t'+'featurette.h4( "", "", "col12 col-md-6", "", [ "", '+'\n'+
		'\t\t\t\t'+'["", "testo", "", ""],'+'\n'+
		'\t\t\t'+']),'+'\n'+
		'\t\t'+']),');
		return '';	
	}
	
	build(id, txt, classes, attributes, arr) {
		var items = '';
		for (var i=0; i<arr.length;i++) {
			items+=arr[i];
		}
		return div.open(id, txt, classes, attributes)+
		items+
		div.close();
	}
	
	buildrow(id, txt, classes, attributes, arr) {
		var items = '';
		for (var i=0; i<arr.length;i++) {
			items+=arr[i];
		}
		return row.open(id, txt, classes, attributes)+
		items+
		row.close();
	}
	
	img(id, txt, classes, attributes, arr) {
		return div.open(id, txt, classes, attributes)+
			img.open( arr[1][0], utilities.cleanText(arr[1][1]), "w-100 mb-5 "+arr[1][2], arr[1][3] )+
		div.close();
	}
	
	h4(id, txt, classes, attributes, arr) {
		return div.open(id, txt, classes, attributes)+
			h4.get( arr[1][0], utilities.cleanText(arr[1][1]), "w-100 mb-5 "+arr[1][2], arr[1][3] )+
		div.close();
	}
}

featurette = new Featurette();