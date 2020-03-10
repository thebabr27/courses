class Build {
		constructor() {
			console.log("build.js loaded");
			}
		
		help() {
			console.log(
			'build.layout([ { mainlayout: "col-md-3", rowlayout: "", layout: ["col-12","col-6","col-6","col-6"], items: [] } ])');
			console.log('build.standardTable("","","", [{'+
					'titles:["a","b","c"],'+
					'items:['+
						'["0","1","2"],'+
						'["4","5","6"],'+
						'["7","8","9"],'+
						'["0","1","2"],'+
					']'+
			'}])'
			);
			return '';
		}
		
		obj(label,items) {
			return label+" {"+'\n'+
				items+'\n'+
			'};'+'\n'
		}
		
		timeout(obj) {
			var items = '';
			for (var i=0; i<obj.actions.length;i++) {
				items+='setTimeout(function(){'+obj.actions[i]+'},'+obj.milliseconds+');\n';
			}
			return items;
		}
		
		notation(label,items) {
			return "@"+label+" "+'\n'+
				items+
			';'+'\n'
		}
		
		objNotation(label,items) {
			return "@"+label+" {"+'\n'+
				build.build(items)+'\n'+
			'}'+'\n';
		}
		
		project(id,type,arr,arr2,attr) {
			if (arr) {for (var i in arr) {
				document.head.appendChild(arr[i]);
			}}
			if (arr2) {for (var j in arr2) {
				document.body.appendChild(arr2[j]);
			}}
			var tag = document.createElement(type);
			if (id) {tag.setAttribute("id", id);}
			if (attr) {tag.setAttribute("type", attr);}
			return tag;
		}
		
		script(txt) {
			var tag = document.createElement('script');
			tag.innerHTML = txt;
			return tag;
		}
		
		scriptList(list) {
			for (var item in list) {
				document.head.appendChild(list[item]);
			}
		}
		
		move(arr, download) {
			return this.build([
			'md "'+arr[0]+'"'+'\n',
			'md "'+arr[0]+arr[2]+'"'+'\n',
			'md "'+arr[0]+arr[4]+'"'+'\n',
			'move "'+arr[1]+'" "'+arr[0]+arr[1]+'"'+'\n',
			'move "'+arr[3]+'" "'+arr[0]+arr[2]+arr[3]+'"'+'\n',
			'move "'+arr[5]+'" "'+arr[0]+arr[4]+arr[5]+'"'+'\n',
			'del '+download
			], download);
		}
		
		html(title, cdns, arr, filename) {
			var all = ""; var allcdns=""; var allbody = "";
			for (var i in arr) {
				allbody += arr[i];
			}
			for (var i in cdns) {
				allcdns+=cdns[i];
			}
			all =  "<!DOCTYPE html>\n"+
			htm.open( "", "", "", "" )+
				hea.open( "", "", "", "" )+
				meta.get( "", "", "",'charset="utf-8" name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"')+
				tit.get( "", title, "", "" )+
				allcdns +
				hea.close()+
				bod.open( "", "", "", "" )+
				allbody +
				bod.close()+
				htm.close();
			if (filename != null) {this.download(filename,all);}
			return all;
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
		
		downloadComp(filename, arr) {
			this.download(filename+".html", arr[0]);
			this.download(filename+".css", arr[1]);
			this.download(filename+".js", arr[2]);
			this.download("move"+filename+".bat", 
			'md "'+filename+'"'+'\n'+
			'move "'+filename+'" "'+filename+"/"+filename+'.html"'+'\n'+
			'move "'+filename+'" "'+filename+"/"+filename+'.css"'+'\n'+
			'move "'+filename+'" "'+filename+"/"+filename+'.js"'+'\n'
			);
		}
		
		func(name, parameters, actions) {
			var allactions = "";
			for (var action in actions) {
				allactions+=actions[action]+'\n';
			}
			return "function "+name+"("+parameters+") { \n\t"+allactions+"\n};\n";
		}
		
		ifunc(name, actions) {
			var allactions = "";
			for (var action in actions) {
				allactions+=actions[action];
			}
			return "function "+name+"() {"+allactions+"}";
		}
		
		mybuild(arr, filename) {
			var all = ""; var i; var plus;
			for (i in arr) {
				if(i==0){plus = ""} else {plus = "\n+"};
				all += plus+'"'+arr[i]+'"';
			}
			if (filename != null) {this.download(filename,all);}
			return all;
		}
		
		ibuild(arr, filename) {
			var all = ""; var i;
			for (i in arr) {
				all += arr[i];
			}
			if (filename != null) {this.download(filename,all);}
			return all;
		}
		
		build(arr, filename) {
			var all = ""; var i;
			for (i in arr) {
				all += arr[i];
			}
			if (filename != null) {this.download(filename,all);}
			return all;
		}
		
		strbuild(arr, filename) {
			var all = ""; var i;
			for (i in arr) {
				all += arr[i];
			}
			if (filename != null) {this.download(filename,all);}
			return all;
		}
		
		component(arr,name) {
			if (name)  {this.build(arr.html,name+".html")} else {this.build(arr.html)}; 
			if (name)  {this.build(arr.style,name+".css")} else {this.build(arr.style)}; 
			if (name)  {this.build(arr.script,name+".js")} else {this.build(arr.script)}; 
			if (name)  {this.build(
			'md "'+name+'"'+'\n'+
			'move "'+name+'.html" '+name+"/"+name+'.html"'+'\n'+
			'move "'+name+'.css" '+name+"/"+name+'.css"'+'\n'+
			'move "'+name+'.js" '+name+"/"+name+'.js"'+'\n'+
			'del "'+name+'.bat"'+'\n',
			name+".bat")};
			return '';
		}
		
		a(id, classes, attributes, arr) {
			var items = '';
			for (var i=0; i<arr.length;i++) {
				items+=arr[i];
			}
			return a.open(id, "", classes, attributes)+
			items+
			a.close();
		}
		
		input(id, classes, attributes, arr) {
			var items = '';
			for (var i=0; i<arr.length;i++) {
				items+=arr[i];
			}
			return a.open(id, "", classes, attributes)+
			items;
		}
		
		p(id, classes, attributes, arr) {
			var items = '';
			for (var i=0; i<arr.length;i++) {
				items+=arr[i];
			}
			return p.open(id, "", classes, attributes)+
			items+
			p.close();
		}
		
		form(id, txt, classes, attributes, arr) {
			var items = '';
			for (var i=0; i<arr.length;i++) {
				items+=arr[i];
			}
			return form.open(id, txt, classes, attributes)+
			items+
			form.close();
		}
		
		nav(id, classes, attributes, arr) {
			var items = '';
			for (var i=0; i<arr.length;i++) {
				items+=arr[i];
			}
			return nav.open(id, "", classes, attributes)+
			items+
			nav.close();
		}
		
		button(id, classes, attributes, arr) {
			var items = '';
			for (var i=0; i<arr.length;i++) {
				items+=arr[i];
			}
			return but.open(id, "", classes, attributes)+
			items+
			but.close();
		}
		
		container(id, classes, attributes, arr) {
			var items = '';
			for (var i=0; i<arr.length;i++) {
				items+=arr[i];
			}
			return container.open(id, "", classes, attributes)+
			items+
			container.close();
		}
		
		h1(id, txt, classes, attributes, arr) {
			var items = '';
			for (var i=0; i<arr.length;i++) {
				items+=arr[i];
			}
			return h1.open(id, txt, classes, attributes)+
			items+
			h1.close();
		}
		
		h2(id, txt, classes, attributes, arr) {
			var items = '';
			for (var i=0; i<arr.length;i++) {
				items+=arr[i];
			}
			return h2.open(id, txt, classes, attributes)+
			items+
			h2.close();
		}
		
		h3(id, txt, classes, attributes, arr) {
			var items = '';
			for (var i=0; i<arr.length;i++) {
				items+=arr[i];
			}
			return h3.open(id, txt, classes, attributes)+
			items+
			h3.close();
		}
		
		h4(id, txt, classes, attributes, arr) {
			var items = '';
			for (var i=0; i<arr.length;i++) {
				items+=arr[i];
			}
			return h4.open(id, txt, classes, attributes)+
			items+
			h4.close();
		}
		
		h5(id, txt, classes, attributes, arr) {
			var items = '';
			for (var i=0; i<arr.length;i++) {
				items+=arr[i];
			}
			return h5.open(id, txt, classes, attributes)+
			items+
			h5.close();
		}
		
		h6(id, txt, classes, attributes, arr) {
			var items = '';
			for (var i=0; i<arr.length;i++) {
				items+=arr[i];
			}
			return h6.open(id, txt, classes, attributes)+
			items+
			h6.close();
		}
		
		main(id, classes, attributes, arr) {
			var items = '';
			for (var i=0; i<arr.length;i++) {
				items+=arr[i];
			}
			return main.open(id, "", "container "+classes, attributes)+
			items+
			main.close();
		}
		
		icontainer(id, txt, classes, attributes, arr) {
			var items = '';
			for (var i=0; i<arr.length;i++) {
				items+=arr[i];
			}
			return container.iopen(id, txt, classes, attributes)+
			items+
			container.close();
		}
		
		div(id, classes, attributes, arr) {
			var items = '';
			for (var i=0; i<arr.length;i++) {
				items+=arr[i];
			}
			return div.open(id, "", classes, attributes)+
			items+
			div.close();
		}
		
		nVar(name,val) {
			return build.build(["var "+name+" = ",
				val,
				";"
			]);
		}
		
		strVar(name,val) {
			return build.build(["var "+name+" = '",
				val,
				"';"
			]);
		}
		
		assign(name,val) {
			return build.build([name+" = '",
				val,
				"';"
			]);
		}
		
		sum(name,val) {
			return build.build([name+" += '",
				val,
				"';"
			]);
		}
		
		arr(name,val) {
			return build.build(["var "+name+" = [",
				val,
				"];"
			]);
		}
		
		forCycle(cond, actions) {
			return "for ("+cond+") {"+build.build(actions)+"}";
		}
		
		idiv(id, txt, classes, attributes, arr) {
			var items = '';
			for (var i=0; i<arr.length;i++) {
				items+=arr[i];
			}
			return div.iopen(id, txt, classes, attributes)+
			items+
			div.close();
		}
	
		footer(id, classes, attributes, arr) {
			var items = '';
			for (var i=0; i<arr.length;i++) {
				items+=arr[i];
			}
			return foot.open(id, "", classes, attributes)+
			items+
			foot.close();
		}
		
		row(id, classes, attributes, arr) {
			var items = '';
			for (var i=0; i<arr.length;i++) {
				items+=arr[i];
			}
			return row.open(id, "", classes, attributes)+
			items+
			row.close();
		}
		
		irow(id, txt, classes, attributes, arr) {
			var items = '';
			for (var i=0; i<arr.length;i++) {
				items+=arr[i];
			}
			return row.iopen(id, txt, classes, attributes)+
			items+
			row.close();
		}
	
		layout(obj) {
			var items = []; var allitems = ""; var all = "";
			for (var j=0; j<obj.length;j++) {
				for (var i=0; i<obj[j].items.length;i++) {
					allitems+=build.div("",obj[j].mainlayout+" "+obj[j].layout[i],"",[
						obj[j].items[i]
					]);
				}
				all+= build.row("",obj[j].rowlayout,"",[allitems]);
				allitems = "";
			}
			return all;
		}	
	
		ilayout(obj) {
			var items = []; var allitems = "";
			for (var j=0; j<obj.length;j++) {
				for (var i=0; i<obj[j].items.length;i++) {
					allitems+=build.idiv("","",obj[j].layout[i],"",[obj[j].items[i]]);
				}
			}
			return build.irow("","","","",[allitems]);
		}	
		
		col(id, classes, attributes, arr) {
			var items = '';
			for (var i=0; i<arr.length;i++) {
				items+=div.open(id, "", "col"+classes, attributes)+arr[i]+div.close();
			}
			return items;
			
		}
	
	section(id, classes, attributes, arr) {
		var items = '';
		for (var i=0; i<arr.length;i++) {
			items+=arr[i];
		}
		return section.open(id, "", classes, attributes)+
		items+
		section.close();
	}	
	
	h1(id, txt, classes, attributes, arr) {
		var items = '';
		for (var i=0; i<arr.length;i++) {
			items+=arr[i];
		}
		return h1.open(id, txt, classes, attributes)+
		items+
		h1.close();
	}	
		
	span(id, txt, classes, attributes, arr) {
		var items = '';
		for (var i=0; i<arr.length;i++) {
			items+=arr[i];
		}
		return span.open(id, txt, classes, attributes)+
		items+
		span.close();
	}
		
		li(id, classes, attributes, arr) {
			var items = '';
			for (var i=0; i<arr.length;i++) {
				items+=arr[i];
			}
			return li.open(id, "", classes, attributes)+
			items+
			li.close();
		}
		
		list(id, txt, classes, attributes, arr, commonclass) {
			var items = ''; if (!commonclass){commonclass = ""};
			for (var i=0; i<arr.length;i++) {
				items+=li.open("","",commonclass,"")+arr[i]+li.close();
			}
			return ul.open(id, txt, classes, attributes)+
			items+
			ul.close();
		}
		
		ul(id, classes, attributes, arr) {
			var items = '';
			for (var i=0; i<arr.length;i++) {
				items+=arr[i];
			}
			return ul.open(id, "", classes, attributes)+
			items+
			ul.close();
		}
		
		containerfluid(id, classes, attributes, arr) {
			var items = '';
			for (var i=0; i<arr.length;i++) {
				items+=arr[i];
			}
			return containerfluid.open(id, "", classes, attributes)+
			items+
			containerfluid.close();
		}
		
		table(id, classes, attributes, arr) {
			var items = '';
			for (var i=0; i<arr.length;i++) {
				items+=arr[i];
			}
			return table.open(id, "", classes, attributes)+
			items+
			table.close();
		}
		
		thead(id, classes, attributes, arr) {
			var items = '';
			for (var i=0; i<arr.length;i++) {
				items+=arr[i];
			}
			return thead.open(id, "", classes, attributes)+
			items+
			thead.close();
		}
		
		tbody(id, classes, attributes, arr) {
			var items = '';
			for (var i=0; i<arr.length;i++) {
				items+=arr[i];
			}
			return tbody.open(id, "", classes, attributes)+
			items+
			tbody.close();
		}
		
		tr(id, classes, attributes, arr) {
			var items = '';
			for (var i=0; i<arr.length;i++) {
				items+=arr[i];
			}
			return tr.open(id, "", classes, attributes)+
			items+
			tr.close();
		}
		
		td(id, classes, attributes, arr) {
			var items = '';
			for (var i=0; i<arr.length;i++) {
				items+=arr[i];
			}
			return td.open(id, "", classes, attributes)+
			items+
			td.close();
		}
		
		th(id, classes, attributes, arr) {
			var items = '';
			for (var i=0; i<arr.length;i++) {
				items+=arr[i];
			}
			return th.open(id, "", classes, attributes)+
			items+
			th.close();
		}
		
		standardTable(id, classes, attributes, obj) {
			var titlesarr = obj[0].titles;
			var arr = obj[0].items;
			var allitems = [];var items = [];var titles = [];
			for (var i=0; i<titlesarr.length;i++) {
				titles.push(build.th("","","",[titlesarr[i]]));
			}
			for (var j=0; j<arr.length;j++) {
				for (var i=0; i<arr[j].length;i++) {
				items.push(build.td("","","",[arr[j][i]]));
				}
				allitems.push(build.tr("","","",items));
				items=[];
			}
			return build.table("",classes+" "+obj.textalign,"",[
			build.thead("","","",[
				build.tr("","","",titles)
			]),
			build.tbody("","","",
					allitems
			),
			]);
		}
}

build = new Build();