class Cover {
	constructor () {}
	
	help() {
		console.log('cover.build("", "", "text-center", "", ['+'\n'+
		'\t\t'+'cover.h1( "", "", "", "", [ "", '+'\n'+
		'\t\t\t'+'["cover", "FOGLI DI CARTA", "", ""]'+'\n'+
		'\t\t'+']),'+'\n'+
		'\t\t'+'cover.img( "", "", "", "", [ "", '+'\n'+
		'\t\t\t'+'["", "", "", \'src="src/img/cover.png"\'],'+'\n'+
		'\t\t'+']),'+'\n'+
		'\t'+']),');
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
	
	cover(id, txt, classes, attributes, arr) {
		return div.open( id, txt, "text-center " + classes, attributes)+'\n'+
			h1.get(arr[0][0], arr[0][1], "position-absolute text-light w-100 "+arr[0][2], 'style="margin-top:30%"'+arr[0][3])+'\n'+
			img.open(arr[1][0], arr[1][1], "w-100 "+arr[1][2], arr[1][3])+'\n'+
		div.close();
	}

	h1(id, txt, classes, attributes, arr) {
		return div.open(id, txt, classes, attributes)+
			h1.get( arr[1][0], utilities.cleanText(arr[1][1]), "position-absolute text-light w-100 "+arr[1][2], 'style="margin-top:30%"'+arr[1][3] )+
		div.close();
	}

	img(id, txt, classes, attributes, arr) {
		return div.open(id, txt, classes, attributes)+
			img.open( arr[1][0], utilities.cleanText(arr[1][1]), "w-100 "+arr[1][2], arr[1][3] )+
		div.close();
	}
}

cover = new Cover();