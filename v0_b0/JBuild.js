
class JBuild {
		constructor() {}
		
		help() {
			return "";
		}
		
		build(arr, filename) {
			var all = ""; var i;
			for (i in arr) {
				all += arr[i];
			}
			if (filename != null) {this.download(filename,all);}
			return all;
		}
		
		main(obj, arr, filename) {
			var all = ""; var i;
			for (i in arr) {
				all += arr[i];
			}
			if (filename != null) {this.download(filename,all);}
			return jclass.mainOpen(obj)+
			all+
		"\n}";
		}
		
		
}
jbuild = new JBuild();