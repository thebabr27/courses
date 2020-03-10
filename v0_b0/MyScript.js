class MyScript {

	constructor() {	}
  
	help() {console.log('//replace content example'+'\n'+
	"myscript.toggleClasses(["+'\n'+
		'{op:"replace", id:"maincontainer",classes:["aaa"]},'+'\n'+
	']),'+'\n');
		console.log('//create a link event and assign it to an html element by his id'+'\n'+
		'myscript.newlink({id:"submit", name:"prova", ev:"click", '+'\n'+
		'actions:['+'\n'+
		'\t'+'"console.log(1);"'+'\n'+
		']'+'\n'+
	'})');
	console.log('//custom toggle example '+'\n'+
		'myscript.newlink({id:"submit", name:"prova", ev:"click", '+'\n'+
		'actions:['+'\n'+
			'myscript.toggleClasses(['+'\n'+
				'{op:"add",id:"testo3", classes:["fadeOutLeft", "fast","animated"]},'+'\n'+
			']),'+'\n'+
			'myscript.toggleClasses(['+'\n'+
				'{op:"add",id:"testo", classes:["fadeOutLeft", "fast","animated"]},'+'\n'+
				'{op:"add50",id:"testo", classes:["d-none"]},'+'\n'+
				'{op:"remove50", id:"testo2", classes:["d-none"]},'+'\n'+
				'{op:"add",id:"testo2", classes:["fadeInRight", "fast","animated"]}'+'\n'+
			']),'+'\n'+
			'myscript.replaceContent("testo3", h1.iget("","Ciao","","")),'+'\n'+
		']'+'\n'+
	'})');
	console.log('//animated pages example'+'\n'+
	'myscript.toggleClasses(['+'\n'+
				'\t'+'{op:"add",id:"maincontainer", classes:["fadeInDown", "fast","animated"]},'+'\n'+
				'\t'+'{op:"replace",id:"maincontainer", classes:[homebody]},'+'\n'+
				']),'+'\n'+
	
	'myscript.newlink({id:"homepage", name:"gotoHomepage", ev:"click", '+'\n'+
			'actions:['+'\n'+
			'\t'+'myscript.toggleClasses(['+'\n'+
				'\t\t'+'{op:"add",id:"maincontainer", classes:["fadeOutUp", "fast","animated"]},'+'\n'+
				'\t\t'+'{op:"replace50",id:"maincontainer", classes:[homebody]},'+'\n'+
				'\t\t'+'{op:"remove50",id:"maincontainer", classes:["fadeOutUp", "fast","animated"]},'+'\n'+
				'\t\t'+'{op:"add50",id:"maincontainer", classes:["fadeInDown", "fast","animated"]},'+'\n'+
			'\t'+']),'+'\n'+
			']'+'\n'+
	'}),'+'\n'+
	'myscript.newlink({id:"page1", name:"gotoPage1", ev:"click", '+'\n'+
				'actions:['+'\n'+
				'\t'+'myscript.toggleClasses(['+'\n'+
				'\t\t'+'{op:"add",id:"maincontainer", classes:["fadeOutUp", "fast","animated"]},'+'\n'+
				'\t\t'+'{op:"replace50",id:"maincontainer", classes:[page1body]},'+'\n'+
				'\t\t'+'{op:"remove50",id:"maincontainer", classes:["fadeOutUp", "fast","animated"]},'+'\n'+
				'\t\t'+'{op:"add50",id:"maincontainer", classes:["fadeInDown", "fast","animated"]},'+'\n'+
				'\t'+']),'+'\n'+
			']'+'\n'+
	'}),');
	return '';
	}
	
	test() {
		return build.project("newScript","script",[]);
	}
  
	link(link) {
		var allactions = [];
		for (var action in link.actions) {
			allactions.push(link.actions[action]);
		}
		return this.ieListOpen(link.id, link.ev)+
			'\tthis.'+link.name+'();\n'+
		this.ieListClose()+
		build.func(link.name, allactions);
	}
	
	newlink(link) {
		console.log(link.attributes);
		console.log(link.actions);
		var allactions = [];var allattributes = "";
		for (var action in link.actions) {
			allactions.push(link.actions[action]);
		}
		for (var attribute in link.attributes) {
			allattributes+=(link.attributes[attribute]);
		}
		return 'const '+link.id+' = document.getElementById("'+link.id+'");'+'\n'+
		this.ieListOpen(link.id, link.ev)+
			'\n'+link.name+'('+allattributes+');\n'+
		this.ieListClose()+'\n'+
		build.func(link.name, allattributes, allactions);
	}
	
	inewlink(link) {
		var allactions = [];
		for (var action in link.actions) {
			allactions.push(link.actions[action]);
		}
		return 'const '+link.id+' = document.getElementById('+link.id+');'+
		this.ieListOpen(link.id, link.ev)+
			'\tthis.'+link.name+'();'+
		this.ieListClose()+
		build.ifunc(link.name, allactions);
	}
	
	onloadlink(link) {
		var allactions = [];
		for (var action in link.actions) {
			allactions.push(link.actions[action]);
		}
		return '\tthis.'+link.name+'();\n'+
		build.func(link.name, allactions);
	}
	
	appendNewlink(link) {
		var allactions = [];
		for (var action in link.actions) {
			allactions.push(link.actions[action]);
		}
		return 'const '+link.id+' = document.getElementById("'+link.id+'");'+'\n'+
		this.ieListOpen(link.id, link.ev)+
			'\tthis.'+link.name+'();\n'+
		this.ieListClose();
	}
	
	appendLink(link) {
		var allactions = [];
		for (var action in link.actions) {
			allactions.push(link.actions[action]);
		}
		return this.ieListOpen(link.id, link.ev)+
			'\tthis.'+link.name+'();\n'+
		this.ieListClose()+
		build.func(link.name, allactions);
	}
		
	requestPerform (type, path) {
		/*
		var obj;
		var xhttp = new XMLHttpRequest();
		xhttp.onreadystatechange = function() {
			if (this.readyState == 4 && this.status == 200) {
			obj = (JSON.parse(xhttp.responseText));
				console.log(obj);
			}
		};
		xhttp.open(type, path, true);
		xhttp.send();
		*/
		return build.build([
		'requestPerform("'+type+'", "'+path+'");'+'\n',
		'function requestPerform(type,path) {'+'\n',
		'var obj'+'\n',
		'var xhttp = new XMLHttpRequest()'+'\n',
		'xhttp.onreadystatechange = function() {'+'\n',
			'if (this.readyState == 4 && this.status == 200) {'+'\n',
			'obj = (JSON.parse(xhttp.responseText));'+'\n',
				'document.getElementById("test").innerHTML = obj[0];'+'\n',
			'}'+'\n',
		'}'+'\n',
		'xhttp.open(type,path,true)'+'\n',
		'xhttp.send()'+'\n'+
		'}'+'\n'
		]);
	}	
	
	assign(id) {
		return 'const '+id+' = document.getElementById("'+id+'");'+'\n';
	}
	
	mouseover(id, classes) {
	return this.link(id, "mouseover", [this.toggleClasses([
				['add',id,classes] ])
		])+
		this.link(id, "mouseout", [this.toggleClasses([
				['remove',id,classes] ])
		]);
	}
	
	toggleClasses(arr) {
		var id = ""; var classes = ""; var allitems=""; var operation ='';
		for (var j=0;j<arr.length;j++) {
			id = arr[j].id;
			classes = arr[j].classes;
			operation = arr[j].op;
			for (var i=0;i<classes.length;i++) {
				switch (operation) {
					case 'remove3':
						allitems+= build.timeout({milliseconds:3000, actions:[this.removeClass(id, classes[i])]});
					break;
					case 'add3':
						allitems+= build.timeout({milliseconds:3000, actions:[this.addClass(id, classes[i])]});
					break;
					case 'remove2':
						allitems+= build.timeout({milliseconds:2000, actions:[this.removeClass(id, classes[i])]});
					break;
					case 'add2':
						allitems+= build.timeout({milliseconds:2000, actions:[this.addClass(id, classes[i])]});
					break;
					case 'remove1':
						allitems+= build.timeout({milliseconds:1000, actions:[this.removeClass(id, classes[i])]});
					break;
					case 'add1':
						allitems+= build.timeout({milliseconds:1000, actions:[this.addClass(id, classes[i])]});
					break;
					case 'remove50':
						allitems+= build.timeout({milliseconds:500, actions:[this.removeClass(id, classes[i])]});
					break;
					case 'add50':
						allitems+= build.timeout({milliseconds:500, actions:[this.addClass(id, classes[i])]});
					break;
					case 'remove25':
						allitems+= build.timeout({milliseconds:250, actions:[this.removeClass(id, classes[i])]});
					break;
					case 'add25':
						allitems+= build.timeout({milliseconds:250, actions:[this.addClass(id, classes[i])]});
					break;
					case 'remove':
						allitems+= this.removeClass(id, classes[i]);
					break;
					case 'replace':
						allitems+= this.replaceContent(id, classes[i]);
					break;
					case 'replace50':
						allitems+= build.timeout({milliseconds:500, actions:[this.replaceContent(id, classes[i])]});
					break;
					case 'replace25':
						allitems+= build.timeout({milliseconds:250, actions:[this.replaceContent(id, classes[i])]});
					break;
					case 'replace1':
						allitems+= build.timeout({milliseconds:1000, actions:[this.replaceContent(id, classes[i])]});
					break;
					case 'replace2':
						allitems+= build.timeout({milliseconds:2000, actions:[this.replaceContent(id, classes[i])]});
					break;
					case 'replace3':
						allitems+= build.timeout({milliseconds:3000, actions:[this.replaceContent(id, classes[i])]});
					break;
					default:
						allitems+= this.addClass(id, classes[i]);
				}
			}
		}
		return allitems;
	}
	
	addClass(id, oneclass) {
		return  '\tdocument.getElementById("'+id+'").classList.add("'+oneclass+'");\n';
	}
	
	addAttribute(id, oneattr, onevalue) {
		return  '\tdocument.getElementById("'+id+'").setAttribute("'+oneattr+'", "'+onevalue+'");\n';
	}
	
	replaceContent(id, content) {
		return  "\tdocument.getElementById('"+id+"').innerHTML = "+content+";\n";
	}
	
	ireplaceContent(id, content) {
		return  "\tdocument.getElementById('"+id+"').innerHTML = '"+build.build(content)+"';\n";
	}
	
	sreplaceContent(id, content) {
		return  "document.getElementById('"+id+"').innerHTML = "+content+'"";\n';
	}
	
	removeClass(id, oneclass) {
		return  '\tdocument.getElementById("'+id+'").classList.remove("'+oneclass+'");\n';
	}
	
	alert(what) {
		return '\t'+'alert("'+what+'");'+'\n';
	}
		
	varialize(text) {
		return "'+"+text+"+'" ;
	}
		
	log(text) {
		return "console.log("+text+");" ;
	}
		
	count(num) {
		return num;
	}
	
	output(xarr, type) {
		var all = "";
		switch (type) {
			case "totable":
			var items = build.build(["var titles = ''; ",
			'for (var i=0;i<'+xarr+'.length;i++) {',
				'titles+="<th>"+'+xarr+'[i]+"</th>";',
			'}',
			"var row1 = ''; ",
			'for (var i=0;i<'+xarr+'.length;i++) {',
				'row1+="<td>"+'+xarr+'[i]+"</td>";',
			'}',
			"document.getElementById('table').innerHTML = ",
			"'","<table class=\"table table-striped\">",
			"<thead>",
				"<tr>",
					"'+titles+'",
				"</tr>",
			"</thead>",
			"<tbody>",
				"<tr>",
					"'+row1+'",
				"</tr>",
				"<tr>",
					"<td>3</td><td>4</td>",
				"</tr>",
			"</tbody>",
			"</table>","'"]);
				all = items;
			break;
			default:
				all = "console.log("+xarr+");";
		}
		return all;
	}
		
	forcycle(len,actions) {
		var allactions = [];
		for (var action in actions) {
			allactions.push(actions[action]);
		}
		return "for (var i=0; i<"+len+";i++) {"+"\n"+
		"\t"+build.build(allactions)+"\n"+
		"}";
	}
		
	iforcycle(len,actions) {
		var allactions = [];
		for (var action in actions) {
			allactions.push(actions[action]);
		}
		return "for (var i=0; i<"+len+";i++) {"+""+
		build.build(allactions)+""+
		"}";
	}

  addGlobal(variable, value) {
    this.allvariables = "";
    this.allvariables += variable+ ' = "'+value+'";\n'
    this.globalvariables += this.allvariables;
  }
  
  fbLoad(path, toggle, array) {
    this.allvariables = ""; this.allscript = ""; this.all = "";

    for (var i = 0; i < array[0].length; i++) {
      this.all += '\t\tdocument.getElementById("'+array[1][i]+'").'+array[2][i]+' = path1.'+array[0][i]+';\n';
    }
    this.allscript += toggle + '.addEventListener("click", e => {\n'+
    '\tref.once("value").then(function(snapshot) {\n'+
    '\t\tvar path1 = (snapshot.val().'+path+');\n'+
    '\t\tvar pathcontent = (Object.keys(path1));\n'+
    this.all+
    '\t});\n'+
    '});\n\r';
    this.globalscript += this.allscript;
    return '';
  }

  fbRemove(target,toggle,array) {
    this.allvariables = ""; this.allscript = ""; this.all = "";
    for (var i = 0; i < array[0].length; i++) {
      this.all += '\tdatabase.ref("'+target+'/'+array[0][i]+'").remove();\n';
    }
    this.allvariables += '';
    this.allscript += toggle + '.addEventListener("click", e => {\n'+
      this.all+
    '});\n\r';
    this.globalscript += this.allscript;
    return '';
  }

  fbSave(target,toggle,arr) {
    this.allvariables = ""; this.allscript = ""; this.all = "";
    for (var i = 0; i < arr[0].length; i++) {
    this.all += '\t\t'+arr[0][i]+': '+arr[1][i]+',\n';
    }
    this.globalvariables += this.allvariables;
    this.allvariables += '';
    this.allscript += toggle + '.addEventListener("click", e => {\n'+
      '\tdatabase.ref("'+target+'").set({\n'+
      this.all+
    '\t});\n'+
    '});\n\r';
    return this.allscript;
    
  }

  draggable(input) {
    this.allvariables = ""; this.allscript = "";
      this.allscript += 'function allowDrop(ev) {\r'+
    '\tev.preventDefault();\r'+
    '}\r\r'+
    'function drag(ev) {\r'+
    '\tev.dataTransfer.setData("Text", ev.target.'+input+');\r'+
    '}\r\r'+
    'function drop(ev) {\r'+
    '\tvar data = ev.dataTransfer.getData("Text");\r'+
    '\tev.target.appendChild(document.getElementById(data));\r'+
    '\tev.preventDefault();\r'+
    '}\r\r';
    this.globalscript += this.allscript;
    return '';
  }

  fbInit() {
    return "// Your web app's Firebase configuration\n"+
      'var firebaseConfig = {\n'+
      '\tapiKey: "AIzaSyArrRzKTRgXkLeVb1PIf09tNesAfB7PCL8",\n'+
      '\tauthDomain: "draggable-9f92b.firebaseapp.com",\n'+
      '\tdatabaseURL: "https://draggable-9f92b.firebaseio.com",\n'+
      '\tprojectId: "draggable-9f92b",\n'+
      '\tstorageBucket: "draggable-9f92b.appspot.com",\n'+
      '\tmessagingSenderId: "1010593277055",\n'+
      '\tappId: "1:1010593277055:web:1b729dc7368b8f6f"\n'+
      '};\n\r'+
      '// Initialize Firebase\n'+
      'firebase.initializeApp(firebaseConfig);\n'+
      '// database declaration\n'+
      'database = firebase.database();\n'+
      'const auth = firebase.auth();\n\r'+
      'const ref = database.ref();\n\r';
      '';
    }

  fbAuthStateChangedClose() {
    this.allvariables = ""; this.allscript = "";
    this.allscript += '\t}\n'+
    '});\n\r';
    this.globalscript += this.allscript;
    return '';
  }

  fbAuthStateChangedElse() {
    this.allvariables = ""; this.allscript = "";
    this.allscript += '\t} else {\n'+
    '\t\tconsole.log("not logged in");\n';
    this.globalscript += this.allscript;
    return '';
  }

  fbAuthStateChangedOpen() {
    this.allvariables = ""; this.allscript = "";
    this.allscript += 'firebase.auth().onAuthStateChanged(firebaseUser => {\n'+
    '\tif (firebaseUser) {\n'+
    '\t\tconsole.log(firebaseUser);\n';
    this.globalscript += this.allscript;
    return '';
  }

  fbLogout(toggle) {
    this.allvariables = ""; this.allscript = "";
    this.allscript += toggle + '.addEventListener("click", e => {\n'+
      '\tfirebase.auth().signOut();\n'+
      '});\n\r';
      this.globalscript += this.allscript;
      return '';
  }

  fbLogin(source1,source2,toggle) {
    this.allvariables = ""; this.allscript = "";
    this.allscript += toggle + '.addEventListener("click", e => {\n'+
                      '\tconst email = '+source1+'.value;\n'+
                      '\tconst pass = '+source2+'.value;\n'+
                      '\tconst promise = auth.signInWithEmailAndPassword(email,pass);\n'+
                      '\tpromise.catch(e => console.log("err"));\n'+
                      '});\n\r';
    this.globalscript += this.allscript;
    return '';
  }

  fbSignIn(source1,source2,toggle) {
    this.allvariables = ""; this.allscript = "";
    this.allscript += toggle + '.addEventListener("click", e => {\n'+
                      '\tconst email = '+source1+'.value;\n'+
                      '\tconst pass = '+source2+'.value;\n'+
                      '\tconst promise = auth.createUserWithEmailAndPassword(email,pass);\n'+
                      '\tpromise.catch(e => console.log("err"));\n'+
                      '});\n\r';
    this.globalscript += this.allscript;
    return '';
  }

  get(source,input,output,target,toggle) {
    this.allvariables = ""; this.allscript = "";
    switch (output) {
        // '','','location','index.html','homeButton'
        case 'toarray':
          this.allvariables += 'var '+target+' = [];\n';
          this.globalvariables += this.allvariables;
          this.allscript += toggle + '.addEventListener("click", e => {\n'+
                            '\t'+target+' = '+source+'.'+input+';\n'+
                            '\talert('+target+');\n'+
                            '});\n\r';
        break;

        // '','','location','prova.html','provaButton'
        case 'location':
          this.allvariables += '';
          this.globalvariables += this.allvariables;
          if (source != 'auto') {
            this.allscript += toggle + '.addEventListener("click", e => {\n'+
            '\twindow.location = "'+target+'";\n'+
            '});\n\r';
          } else {
            this.allscript += '\twindow.location = "'+target+'";\n';
          }
        break;

        // 'inputTitle','value','innerHTML','title','submitButton'
        case 'innerHTML':
        this.allvariables += 'var '+toggle+' = document.getElementById("'+toggle+'");\n'+
                             'var '+target+' = document.getElementById("'+target+'");\n\r';
        this.globalvariables += this.allvariables;
        this.allscript += toggle + '.addEventListener("click", e => {\n'+
                          '\tdocument.getElementById("'+target+'").'+output+' = '+source+'.'+input+';\n'+
                          '});\n\r';
        break;

        // 'inputTitle','value','alert','','alertButton'
        case 'alert':
        this.allvariables += 'var '+toggle+' = document.getElementById("'+toggle+'");\n\r';
        this.globalvariables += this.allvariables;
        this.allscript += this.ieListOpen(toggle)+
                          '\talert('+source+'.'+input+');\n'+
                          this.ieListClose();
        break;

        // 'inputTitle','value','alert','','alertButton'
        case 'log':
        this.allvariables += 'var '+toggle+' = document.getElementById("'+toggle+'");\n\r';
        this.globalvariables += this.allvariables;
        this.allscript += this.ieListOpen(toggle)+
                          '\tconsole.log('+source+');\n'+
                          this.ieListClose();
        break;
      default:
    }
    this.globalscript += this.allscript;
    return '';
  }

  list(toggle, array) {
    this.allvariables = ""; this.allscript = "";
    for (var i = 0; i < array.length; i++) {
      this.get('provaInput','innerHTML','innerHTML','altraProvaInput','myButton');
    }
    this.globalscript += this.allscript;
    return '';
  }

  ieListOpen(toggle,ev) {
    return toggle + ".addEventListener('"+ev+"', e => {";
  }

  ieListClose() {
    return '});';
  }

  variables() {
    return this.globalvariables + '\n\r';
  }

  script() {
    return this.globalscript + '\n';
  }
  
  generateTable(tableid,arr, obj2) {
			document.getElementById(tableid).innerHTML = ''+
			'<div class="spinner-border text-primary" role="status">'+'\n'+
			  '<span class="sr-only">Loading...</span>'+'\n'+
			'</div>';
			var titles = ''; var items = ''; var item = '';
			for (var i = 0; i<arr.length; i++) {
				if (arr[i] == undefined) {item = ''} else {item = arr[i];}
				titles += '<th scope="col">'+'\n'+
					item+'\n'+
				 '</th>';
			}
			items = '';
			for (var j = 0; j<obj2.length; j++) {
				for (var i = 0; i<Object.keys(obj2[j]).length; i++) {
					if (i == 0) {item = obj2[j].idLuogo;}
					if (i == 1) {item = obj2[j].placename;}
					if (i == 2) {item = obj2[j].nation;}
					if (i == 3) {item = obj2[j].idwhere;}
					if (i == 4) {item = obj2[j].placedescription;}
					if (item == null) {item = '-';}
						items += '<td scope="col">'+'\n'+
							item+'\n'+
						 '</td>';
				}
				items+=
				 '<td>'+'\n'+
						'<div class="d-flex">'+'\n'+
						  '<button class=" btn btn-warning mr-1" data-toggle="modal" data-target="#editluogomodal" '+
							'data-editluogoinput1="'+obj2[j].idLuogo+'" data-editluogoinput2="'+obj2[j].placename+'" data-editluogoinput3="'+obj2[j].nation+'" data-editluogoinput4="'+obj2[j].idwhere+'" data-editluogoinput5="'+obj2[j].placedescription+'">'+'\n'+
							'Edit'+'\n'+
						  '</button>'+'\n'+
						  '<button onclick="performItemSelection('+obj2[j].idLuogo+')" class=" btn btn-danger mr-1" data-toggle="modal" data-target="#deleteluogomodal">'+'\n'+
						   'Delete'+'\n'+
						  '</button>'+'\n'+
						'</div>'+'\n'+
					  '</td>'+'\n'+
					'</tr>'+'\n';
				}
			console.log(	items);
			document.getElementById(tableid).innerHTML = ''+
				build.standardTable("","","table-striped table-responsive","",{
								textalign: "text-center",
								items:[
									["Aaaa","Bbbb","Cccc","Aaaa","Bbbb","Cccc","Aaaa","Bbbb","Cccc","Aaaa","Bbbb","Cccc"],
									["1","2","3","1","2","3"],
									["1","2","3","1","2","3"],
									["1","2","3","1","2","3"],
									["1","2","3","1","2",
										build.div("","","d-flex text-center","",[
											p.get("","a","m-0 p-2",""),
											button.get("","Click","btn btn-primary","")
										])
									],
								]
							})
							/*
				build.table("","","table table-striped table-responsive","",[
					build.thead("","","","",[
					'<tr class="text-center">'+'\n'+
					  titles+'\n'+
					'</tr>'+'\n'
					])+
					build.tbody("","","","",[
					'<tr class= align-middle">'+'\n'+
						items+'\n'+
					'</tr>'+'\n'+
					'<tr class=" align-middle">'+'\n'+
					  '<td class=" " colspan="6">'+'\n'+
						'<div class=" d-flex">'+'\n'+
						  '<button class=" btn btn-outline-warning btn-block mr-1" data-toggle="modal" data-target="#addluogomodal">'+'\n'+
							'Add'+'\n'+
						  '</button>'+'\n'+
						'</div>'+'\n'+
					  '</td>'+'\n'+
					  '</tr>'+'\n'
					])
				  ])*/;
	
}
}

myscript = new MyScript();