class JClass  {
	constructor() {}
	
	help() {return "";}
	
	open(name,arr) {
		return "public class "+name + " {"+"\n";
	}
	
}

jclass = new JClass();