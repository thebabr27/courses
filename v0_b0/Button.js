class Button {
	constructor () {}
	
	button(id, txt, classes, attributes) {
		return but.get(id, txt, classes, attributes);
	}
	
	span(id, txt, classes, attributes, arr) {
		var items=''; 
		for (var i=1;i<arr.length;i++) {
			items += ''+
				span.get( arr[i][0] ,  arr[i][1] , arr[0]+ " "+arr[i][2] , arr[i][3]  )+
			'';
		}
		var all = ''+
				but.open(id, txt, classes, attributes)+
					items+
				but.close();
		return all;
	}
}

button = new Button();