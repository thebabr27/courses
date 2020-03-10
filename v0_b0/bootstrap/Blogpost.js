class Blogpost {
	constructor() {}
	
	blogpost() {
		return '';
	}
	
	p(id, txt, classes, attributes) {
		
		return p.get(id, utilities.cleanText(txt), classes, attributes);
	}
}

blogpost = new Blogpost();