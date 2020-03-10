
class JSBuild {
		constructor() {}
		
		help() {
			return "";
		}
		
		class(name, attr,arr,ind) {
			var items = ''; var all = ''; 
			var indent = (ind[0]).repeat(ind[1]);
			var indent1 = (ind[0]).repeat(ind[1]-1);
			if (arr) {
				for (var i=0; i<arr.length;i++) {
					items+="\n"+indent+arr[i] + ";\n";
				}
			}
			if (items) {
			all = jsclass.classOpen(name, attr, arr)+" {"+
			items +
			"\n"+indent1+jsclass.iclose();
			} else {
			all = jsclass.classOpen(name, attr, arr);
			};
			return all;
		}
		
		div(id, txt, classes, attributes, arr,ind) {
			var items = ''; var all = ''; 
			var indent = (ind[0]).repeat(ind[1]);
			var indent1 = (ind[0]).repeat(ind[1]-1);
			if (arr) {
				for (var i=0; i<arr.length;i++) {
					items+="\n"+indent+arr[i] + ";\n";
				}
			}
			if (items) {
			all = div.open(id, txt, classes, attributes)+
			items +
			"\n"+indent1+div.close();
			} else {
			all = div.open(id, txt, classes, attributes)+div.close();
			};
			return all;
		}
		
		assign(name, content) {
			return name + " = "+content;
		}
		
		const(name, content) {
			return "const "+name + " = "+content;
		}
		
		return(content) {
			return "return "+content;
		}
		
		var(name, content) {
			return "var "+name + " = "+content;
		}
		
		let(name, content) {
			return "let "+name + " = "+content;
		}
		
		attributes(arr,ind) {
			var items = ''; var all = ''; 
			var indent = (ind[0]).repeat(ind[1]);
			var indent1 = (ind[0]).repeat(ind[1]-1);
			if (arr) {
				for (var i=0; i<arr.length;i++) {
					if(i!=arr.length-1){items+=indent+arr[i] + ",\n";}
					else {items+=indent+arr[i] + "\n";}
				}
			}
			if (items) {
			all = "("+
			"\n"+items +
			indent1+")";
			} else {
			all = "(";
			};
			return all;
		}
		
		json(arr,ind) {
			var items = ''; var all = ''; 
			var indent = (ind[0]).repeat(ind[1]);
			var indent1 = (ind[0]).repeat(ind[1]-1);
			if (arr) {
				for (var i=0; i<arr.length;i++) {
					if(i!=arr.length-1){items+=indent+arr[i] + ",\n";}
					else {items+=indent+arr[i] + "\n";}
				}
			}
			if (items) {
			all = "{"+
			"\n"+items +
			indent1+jsclass.iclose();
			} else {
			all = "{";
			};
			return all;
		}
		
		ijson(arr,ind) {
			var items = ''; var all = ''; 
			var indent = (ind[0]).repeat(ind[1]);
			var indent1 = (ind[0]).repeat(ind[1]-1);
			if (arr) {
				for (var i=0; i<arr.length;i++) {
					if(i!=arr.length-1){items+=arr[i] + ",";}
					else {items+=arr[i];}
				}
			}
			if (items) {
			all = "{"+
			items +
			jsclass.iclose();
			} else {
			all = "{";
			};
			return all;
		}
		
		method(name, attr,arr,ind) {
			var items1 = ''; var items2 = ''; var all = ''; 
			var indent = (ind[0]).repeat(ind[1]);
			var indent1 = (ind[0]).repeat(ind[1]-1);
			if (arr) {
				for (var i=0; i<arr.length;i++) {
					items1+="\n"+indent+arr[i] + ";";
				}
			}
			if (items1) {
			all = jsclass.open(name, attr, arr)+" {"+
			items1 +
			"\n"+indent1+jsclass.iclose();
			} else {
			all = jsclass.open(name, attr, arr);
			};
			return all;
		}
		
		method2(name, attr,arr,ind) {
			var items1 = ''; var items2 = ''; var all = ''; 
			var indent = (ind[0]).repeat(ind[1]);
			var indent1 = (ind[0]).repeat(ind[1]-1);
			if (attr) {
				for (var i=0; i<attr.length;i++) {
					items1+="\n"+indent+attr[i] + ";";
				}
			}
			if	(arr) {
				for (var i=0; i<arr.length;i++) {
					items2+="\n"+indent+arr[i] + ";";
				}
			}
			if (items2) {
			all = "";
			} else {
			all = jsclass.open(name, attr, arr);
			};
			return all;
		}
		
		test(obj) {
			var allitems = '', all = '', name = '',
			indent = (obj.ind[0]).repeat(obj.ind[1]),
			indent1 = (obj.ind[0]).repeat(obj.ind[1]-1);
			if (!obj.items) {obj.items=[]};
			if (!obj.inl) {
				for (var i=0; i<obj.items.length;i++) {
						if(i==0){allitems+=indent+obj.items[i];}
						else if (i==obj.items.length) {allitems+=obj.sep[0]+indent+obj.items[i];}
						else {allitems+=obj.sep[0]+"\n"+indent+obj.items[i];}
				}
				if (obj.name){name=obj.name+" ";};
				if (obj.items.length>0) {
					all += name+obj.open+"\n"+allitems+"\n"+indent1+obj.close;
				} else {
					all += name;
				}
			} else {
				for (var i=0; i<obj.items.length;i++) {
						if(i==0){allitems+=obj.items[i];}
						else if (i==obj.items.length) {allitems+=obj.sep[0]+obj.items[i]}
						else {allitems+=obj.sep[0]+obj.items[i];}
				}
				if (obj.name){name=obj.name+" ";};
				if (obj.items.length>0) {
					all += name+obj.open+allitems+obj.close+" ";
				} else {
					all += name;
				}
			}
				return all;
		}
		
		test2(arr) {
			var all = '';
			for (var i=0; i<arr.length;i++) {
				all += jsbuild.test(arr[i]);
			}
			return all+"\n";
		}
		
}
jsbuild = new JSBuild();