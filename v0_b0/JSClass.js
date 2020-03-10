class JSClass  {
	constructor() {}
	
	help() {return "";}
	
	get(name, attr, arr) {
		this.all = "";
		this.open(name, attr, arr);
		this.close1();
		return this.all;
	}			
	getMethod(name, attr, arr) {
		this.all = "";
		this.openMethod(name, attr, arr);
		return this.all;
	}		
	iget(name, attr, arr) {
		this.all = "";
		this.iopen(name, attr, arr);
		this.iclose1();
		return this.all;
	}	
	igetMethod(name, attr, arr) {
		this.all = "";
		this.iopenMethod(name, attr, arr);
		return this.all;
	}	
	classOpen(name, attr, arr) {
		this.all = "";
		this.open1(name, attr, arr);
		return this.all;
	}	
	build(name, attr, arr) {
		this.all = "";
		this.ilist(attr, "(",")",",")
		this.list(arr, "{","}",";")
		return this.all;
	}	
	ibuild(name, attr, arr) {
		this.all = "";
		this.ilist(attr, "(",")",",")
		this.ilist(arr, "{","}",";")
		return this.all;
	}	
	iclassOpen(name, attr, arr) {
		this.all = "";
		this.iopen1(name, attr, arr);
		return this.all;
	}	
	iopen(name, attr, arr) {
		this.all = "";
		this.iopen1Method(name, attr, arr);
		return this.all;
	}	
	close() {
	this.all = "";
	this.close1();
	return this.all;
	}
	iclose() {
	this.all = "";
	this.iclose1();
	return this.all;
	}
	open1(name, attr, arr) {
		var items = '';
		for (var i=0; i<attr.length;i++) {
			items+="("+attr[i]+")";
		}
		this.all += "class "+name + items;
	}	
	list(arr, open,close,sep) {
		var items = '';
		for (var i=0; i<arr.length;i++) {
			if(i==0){items+=arr[i];}
			else {items+=sep+"\n"+arr[i];}
		}
		this.all += name + open+"\n"+items+"\n"+close;
	}	
	ilist(arr, open,close,sep) {
		var items = '';
		for (var i=0; i<arr.length;i++) {
			if(i==0){items+=arr[i];}
			else {items+=sep+arr[i];}
		}
		this.all += name + open+items+close;
	}
	iopen1(name, attr, arr) {
		var items = '';
		for (var i=0; i<attr.length;i++) {
			items+="("+attr[i]+")";
		}
		this.all += "class "+name + items;
	}	
	iopen1Method(name, attr, arr) {
		var items = '';
		for (var i=0; i<attr.length;i++) {
			items+="("+attr[i]+")";
		}
		this.all += name + items;
	}	
	close1() {
		this.all +=  "}\n";
	}
	iclose1() {
		this.all +=  "}";
	}
	assign(name, val) {
		this.all +=  "}";
	}
	
}

jsclass = new JSClass();