class JClass {
		constructor() {}
		
		help() {
			console.log(""+
			'var automezzo = ["Automezzo", ['+'\n'+
			'\t'+'["int","velocita"],'+'\n'+
			'\t'+'["double","altezza"],'+'\n'+
			'\t'+'["String","ciao",\'"Ciao"\'],'+'\n'+
			'],0];'+'\n'+
			"");
			console.log(""+
			'jclass.get(automezzo)+'+'\n'+
			"");
			return '';
		}
		
		build(arr) {
			var all = ""; var i;
			for (i in arr) {
				all += arr[i];
			}
			return all;
		}
		
		repository(obj) {
			
		}
		
		get(obj) {
			var all = "";
			all+=  this.open(obj)+
			"}\n\n";
			return all;
		}
		
		open(obj) {
			return "aaa";
		}
		
		repeatArr(what, times) {
			this.all = "";
			for (var i = 0; i < times; i++) {
				this.all+=this.i(1)+
				this.declareVar(what[i][0], what[i][1], what[i][2]);
			}
			return this.all + "\n";
		}
		
		declareVar(type, name, val,mode) {
			if (val != '' && val != null) {return "private "+type+" "+name+" = "+val+this.s()+"\n";}
			else {return "private "+type+" "+name+this.s()+"\n";}
		}
		
		extGet(obj, obj2, down) {
			var all = "";
			all+=  this.extOpen(obj,obj2)+
			"}\n\n";
			if (down != null) {this.download(obj[0]+".java",all);}
			return all;
		}	
		
		extOpen(obj,obj2) {
			return this.extClassOpen(obj[0],obj2[0])+"\n"+
			this.repeatArr(obj[1], obj[1].length)+"\n"+
			this.generateExtConstructor(obj[0],obj[1],obj2[1])+"\n"+
			this.generateGetterAndSetter(obj[1])+
			"";
		}	
		
		download(filename, text) {
			var element = document.createElement('a');
			element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
			element.setAttribute('download', filename);
			element.style.display = 'none';
			document.body.appendChild(element);
			element.click();
			document.body.removeChild(element);
		}
		
		importLibs(obj) {
			var all = "";
			for (var i in obj) {
				all += "import "+obj[i]+";\n";
			}
			return all;
		}
		
		mainGetHelp() {
			console.log("");
				return '';
		} 
		mainGet(mainobj) {
			var all = "";
			all+=  this.mainOpen(mainobj)+
			this.instance(mainobj[1][0][0],mainobj[1][0][1],mainobj[1][0][2])+this.i(1)+
			"}\n\n}\n\n";
			return all;
			
		}
				
		mainOpen(obj) {
			this.all;
			return this.classOpen(obj[0],[])+"\n"+
			this.i(1)+"public static void main (String[] args) {"+"\n"+this.i(1)+
			"";
		}
		
		instanceHelp() {
			console.log('jclass.instance("Prova","prova",["a","b"])+\n');
				return '';
		} 
		instance(type, name,arr) {
			var all = ""; var i;
			for (i in arr) {
				if (i != 0) {all+=", ";}
				all+=arr[i];
			}
			return this.i(1)+type+" "+name+" = new "+type+"("+all+")"+this.s()+"\n";
		}
				
		classOpen(name,arr) {
			return "public class "+name + " {"+"\n";
		}
				
		extClassOpen(name,name2) {
			return "public class "+name + " extends "+name2+" {"+"\n";
		}
		
		repeat(what, times) {
			var all = "";
			if (times = null) {alert("null");}
			for (var i = 0; i < times; i++) {
				all+=what;
			}
			return all;
		}
		
		generateConstructor(name,arr) {
			var all = ""; var all2 = ""; var i;
			for (i in arr) {
				if (i != 0) {all2+=", ";}
				all2+=arr[i][0]+" "+arr[i][1];
			}
			for (i in arr) {
				all+=this.i(2)+"this."+arr[i][1]+" = "+arr[i][1]+this.s()+"\n";
			}
			return this.i(1)+"public "+name+" ("+all2+") {\n"+
			all+this.i(1)+
			"}\n";
		}
		
		generateExtConstructor(name,arr,arr2) {
			var all = ""; var all2 = ""; var i;
			for (i in arr2) {
				if (i != 0) {all2+=", ";}
				all2+=arr2[i][0]+" "+arr2[i][1];
			}
			for (i in arr) {
				all2+=", ";
				all2+=arr[i][0]+" "+arr[i][1];
			}
			var sup=this.generateSuper(arr2);
			for (i in arr) {
				all+=this.i(2)+"this."+arr[i][1]+" = "+arr[i][1]+this.s()+"\n";
			}
			return this.i(1)+"public "+name+" ("+all2+") {\n"+
			this.i(2)+sup+all+
			"}\n";
		}
		
		generateSuper(arr) {
			var i; var all = ""; 
			for (i in arr) {
				if (i != 0) {all+=", ";}
				all+=arr[i][1];
			}
			return "super("+all+")"+this.s()+"\n";
		}
		
		generateGetterAndSetter(arr) {
			var all = "";
			for (var i in arr) {
				all +=  this.i(1)+
				this.getterOpen(arr[i][1],arr[i][0])+"\n\n"+this.i(1)+
				this.setterOpen(arr[i][1],arr[i][0],)+this.i(1)+"\n\n";
			}
			return all;
		}
		
		setterOpen(name,type) {
			return ""+
			"public void set"+name[0].toUpperCase()+name.slice(1)+" ("+type+" "+name+") {\n"+this.i(2)+
			"this."+name+" = "+name+this.s()+"\n"+
			this.i(1)+"}\n";
		}
		
		getterOpen(name,rtrn) {
			return ""+
			"public "+rtrn+" get"+name[0].toUpperCase()+name.slice(1)+" () {\n"+this.i(2)+
			"return "+name+this.s()+"\n"+
			this.i(1)+"}\n";
		}
		
		i(num) {
			var defstr = "";
			for (var i = 0; i < num; i++) {
				defstr+="\t";
			}
			return defstr;
		}
		
		s() {
			return ";";		
		}
		
		println(what) {
			return 'System.out.println('+what+')'+this.s()+'\n';
		}
}

jclass = new JClass();
