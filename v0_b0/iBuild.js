
class IBuild {
		constructor() {}
		
		help() {
			console.log('build.container("","","","",['+'\n'+
			'build.layout(['+'\n'+
			'\t'+'{layout:["col-6 bg-primary","col-3 bg-danger"], items:['+'\n'+
			'\t\t'+'p.get("","2","",""),'+'\n'+
			'\t\t'+'p.get("","3","",""),'+'\n'+
			'\t'+']}'+'\n'+
			']),'+'\n'+
			'build.layout(['+'\n'+
			'\t'+'{layout:["col-2 bg-info","col-8 bg-warning"], items:['+'\n'+
			'\t\t'+'p.get("","2","",""),'+'\n'+
			'\t\t'+'p.get("","3","",""),'+'\n'+
			'\t'+']}'+'\n'+
			']),'+'\n'+
		']),');
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
				ibuild.build(items)+'\n'+
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
			return "function "+name+"("+parameters+") { \n\t"+allactions+"\n}\n";
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
		
		a(id, classes, attributes, arr) {
			var items = '';
			for (var i=0; i<arr.length;i++) {
				items+=arr[i];
			}
			return a.iopen(id, "", classes, attributes)+
			items+
			a.close();
		}
		
		form(id, txt, classes, attributes, arr) {
			var items = '';
			for (var i=0; i<arr.length;i++) {
				items+=arr[i];
			}
			return form.iopen(id, txt, classes, attributes)+
			items+
			form.close();
		}
		
		nav(id, classes, attributes, arr) {
			var items = '';
			for (var i=0; i<arr.length;i++) {
				items+=arr[i];
			}
			return nav.iopen(id, "", classes, attributes)+
			items+
			nav.close();
		}
		
		button(id, classes, attributes, arr) {
			var items = '';
			for (var i=0; i<arr.length;i++) {
				items+=arr[i];
			}
			return but.iopen(id, "", classes, attributes)+
			items+
			but.close();
		}
		
		container(id, classes, attributes, arr) {
			var items = '';
			for (var i=0; i<arr.length;i++) {
				items+=arr[i];
			}
			return container.iopen(id, "", classes, attributes)+
			items+
			container.close();
		}
		
		h1(id, txt, classes, attributes, arr) {
			var items = '';
			for (var i=0; i<arr.length;i++) {
				items+=arr[i];
			}
			return h1.iopen(id, txt, classes, attributes)+
			items+
			h1.close();
		}
		
		h2(id, txt, classes, attributes, arr) {
			var items = '';
			for (var i=0; i<arr.length;i++) {
				items+=arr[i];
			}
			return h2.iopen(id, txt, classes, attributes)+
			items+
			h2.close();
		}
		
		h3(id, txt, classes, attributes, arr) {
			var items = '';
			for (var i=0; i<arr.length;i++) {
				items+=arr[i];
			}
			return h3.iopen(id, txt, classes, attributes)+
			items+
			h3.close();
		}
		
		h4(id, txt, classes, attributes, arr) {
			var items = '';
			for (var i=0; i<arr.length;i++) {
				items+=arr[i];
			}
			return h4.iopen(id, txt, classes, attributes)+
			items+
			h4.close();
		}
		
		h5(id, txt, classes, attributes, arr) {
			var items = '';
			for (var i=0; i<arr.length;i++) {
				items+=arr[i];
			}
			return h5.iopen(id, txt, classes, attributes)+
			items+
			h5.close();
		}
		
		h6(id, txt, classes, attributes, arr) {
			var items = '';
			for (var i=0; i<arr.length;i++) {
				items+=arr[i];
			}
			return h6.iopen(id, txt, classes, attributes)+
			items+
			h6.close();
		}
		
		main(id, classes, attributes, arr) {
			var items = '';
			for (var i=0; i<arr.length;i++) {
				items+=arr[i];
			}
			return main.iopen(id, "", "container "+classes, attributes)+
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
			return div.iopen(id, "", classes, attributes)+
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
			return foot.iopen(id, "", classes, attributes)+
			items+
			foot.close();
		}
		
		row(id, classes, attributes, arr) {
			var items = '';
			for (var i=0; i<arr.length;i++) {
				items+=arr[i];
			}
			return row.iopen(id, "", classes, attributes)+
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
	
		standardLayout(layout, arr) {
			var items = []; var allitems  = '';
			console.log(arr[0].title)
			for (var i=0; i<arr.length;i++) {
				items.push(this.col("","",layout[i]+" overflow-hidden","", [arr[i]]));
			}
			return build.container("","","","",[build.row("","","","",items)]);
		}	
		
		col(id, classes, attributes, arr) {
			var items = '';
			for (var i=0; i<arr.length;i++) {
				items+=div.iopen(id, "", "col"+classes, attributes)+arr[i]+div.close();
			}
			return items;
			
		}
	
	section(id, classes, attributes, arr) {
		var items = '';
		for (var i=0; i<arr.length;i++) {
			items+=arr[i];
		}
		return section.iopen(id, "", classes, attributes)+
		items+
		section.close();
	}	
	
	h1(id, txt, classes, attributes, arr) {
		var items = '';
		for (var i=0; i<arr.length;i++) {
			items+=arr[i];
		}
		return h1.iopen(id, txt, classes, attributes)+
		items+
		h1.close();
	}	
		
	span(id, txt, classes, attributes, arr) {
		var items = '';
		for (var i=0; i<arr.length;i++) {
			items+=arr[i];
		}
		return span.iopen(id, txt, classes, attributes)+
		items+
		span.close();
	}
		
		li(id, classes, attributes, arr) {
			var items = '';
			for (var i=0; i<arr.length;i++) {
				items+=arr[i];
			}
			return li.iopen(id, "", classes, attributes)+
			items+
			li.close();
		}
		
		list(id, txt, classes, attributes, arr, commonclass) {
			var items = ''; if (!commonclass){commonclass = ""};
			for (var i=0; i<arr.length;i++) {
				items+=li.iopen("","",commonclass,"")+arr[i]+li.close();
			}
			return ul.iopen(id, txt, classes, attributes)+
			items+
			ul.close();
		}
		
		ul(id, classes, attributes, arr) {
			var items = '';
			for (var i=0; i<arr.length;i++) {
				items+=arr[i];
			}
			return ul.iopen(id, "", classes, attributes)+
			items+
			ul.close();
		}
		
		containerfluid(id, classes, attributes, arr) {
			var items = '';
			for (var i=0; i<arr.length;i++) {
				items+=arr[i];
			}
			return containerfluid.iopen(id, "", classes, attributes)+
			items+
			containerfluid.close();
		}
		
		table(id, txt, classes, attributes, arr) {
			var items = '';
			for (var i=0; i<arr.length;i++) {
				items+=arr[i];
			}
			return table.iopen(id, txt, classes, attributes)+
			items+
			table.close();
		}
		
		thead(id, txt, classes, attributes, arr) {
			var items = '';
			for (var i=0; i<arr.length;i++) {
				items+=arr[i];
			}
			return thead.iopen(id, txt, classes, attributes)+
			items+
			thead.close();
		}
		
		tbody(id, txt, classes, attributes, arr) {
			var items = '';
			for (var i=0; i<arr.length;i++) {
				items+=arr[i];
			}
			return tbody.iopen(id, txt, classes, attributes)+
			items+
			tbody.close();
		}
		
		tr(id, txt, classes, attributes, arr) {
			var items = '';
			for (var i=0; i<arr.length;i++) {
				items+=arr[i];
			}
			return tr.iopen(id, txt, classes, attributes)+
			items+
			tr.close();
		}
		
		td(id, txt, classes, attributes, arr) {
			var items = '';
			for (var i=0; i<arr.length;i++) {
				items+=arr[i];
			}
			return td.iopen(id, txt, classes, attributes)+
			items+
			td.close();
		}
		
		th(id, txt, classes, attributes, arr) {
			var items = '';
			for (var i=0; i<arr.length;i++) {
				items+=arr[i];
			}
			return th.iopen(id, txt, classes, attributes)+
			items+
			th.close();
		}
		
		standardTable(id, txt, classes, attributes, obj) {
			var arr = obj.items;
			var allitems = [];var items = [];var titles = [];
			for (var i=0; i<arr[0].length;i++) {
				titles.push(ibuild.th("",arr[0][i],"","",[]));
			}
			for (var j=1; j<arr.length;j++) {
				for (var i=0; i<arr[j].length;i++) {
				items.push(ibuild.td("",arr[j][i],"","",[]));
				}
				allitems.push(ibuild.tr("","","","",items));
				items=[];
			}
			return ibuild.table("","",classes+" "+obj.textalign,"",[
			ibuild.thead("","","","",[
				ibuild.tr("","","","",titles)
			]),
			ibuild.tbody("","","","",
					allitems
			),
			]);
		}
}

ibuild = new IBuild();