class Database {
	constructor () {}
	
	help() {console.log("a");return "";}
	
	initialize(name)  {
		var initialization="";
		switch (name) {
			case "foglidicarta":
				initialization = 'firebaseConfig = {'+'\n'+
				'\t'+'apiKey: "AIzaSyBXTikd9cHlOQrAbK-F-lObaTgfZxe0fM0",'+'\n'+
				'\t'+'authDomain: "foglidicarta-faccf.firebaseapp.com",'+'\n'+
				'\t'+'databaseURL: "https://foglidicarta-faccf.firebaseio.com",'+'\n'+
				'\t'+'projectId: "foglidicarta-faccf",'+'\n'+
				'\t'+'storageBucket: "foglidicarta-faccf.appspot.com",'+'\n'+
				'\t'+'messagingSenderId: "211559477338",'+'\n'+
				'\t'+'appId: "1:211559477338:web:3a3262a4cdaf433cd0e863"'+'\n'+
			  '};'+'\n'+
			  '// Initialize Firebase'+'\n'+
			  'firebase.initializeApp(firebaseConfig);'+'\n';
			break;
			default:
				initialization = 'firebaseConfig = {'+'\n'+
				'apiKey: "AIzaSyAyPpwYB1X-e5VnUkUgJ2orPcDr9ybDHEU",'+'\n'+
				'authDomain: "draggable-9f92b.firebaseapp.com",'+'\n'+
				'databaseURL: "https://draggable-9f92b.firebaseio.com",'+'\n'+
				'projectId: "draggable-9f92b",'+'\n'+
				'storageBucket: "draggable-9f92b.appspot.com",'+'\n'+
				'messagingSenderId: "1010593277055",'+'\n'+
				'appId: "1:1010593277055:web:1b729dc7368b8f6f"'+'\n'+
			  '};'+'\n'+
			  '// Initialize Firebase'+'\n'+
			  'firebase.initializeApp(firebaseConfig);'+'\n';
		}
		return initialization + "console.log(\"firebase loaded\");"+'\n';
	}
	
	tuple(elements,output,values) {
		return build.build([
		'var '+elements+' = Object.keys(snapshot.val());'+'\n',
		'console.log('+elements+'.length);'+'\n',
		'var '+output+' = {}; var '+output+'s = [];'+'\n',
			'for (var i = 0; i< '+elements+'.length; i++) {'+'\n',
				output+'.'+values[0]+' = snapshot.child('+elements+'[i]).val().'+values[0]+';'+'\n',
				output+'.'+values[1]+' = snapshot.child('+elements+'[i]).val().'+values[1]+';'+'\n',
				output+'s.push('+output+');'+'\n',
				'console.log('+output+');'+'\n',
				output+' = {};'+'\n',
			'}'+'\n',
		'console.log('+output+'s);'
		]);
	}
	
	fill(id,items) {
		return build.build([
			'',
			'document.getElementById("'+id+'").innerHTML = '+items[0]+';'
			]);
	}
	
	delete(path) {
		return "firebase.database().ref('"+path+"').remove();";
	}
	
	read(path,arr,actions) {
		return "var "+arr+" = [];"+
		"firebase.database().ref('"+path+"').once('value').then(function(snapshot) {"+
		"try {"+
			"var xkeys = Object.keys(snapshot.val());"+
			"for (i = 0; i< xkeys.length; i++) {"+
				arr+".push(xkeys[i]);"+
			"}"+
			build.build(actions)+
		"} catch(err) {"+
		"}"+
		'});';
	}
	
	write(path,items) {
		var allitems = [];
		for (var i=0; i<items.length;i++) {
			allitems.push(items[i]+",");
		}
		return "firebase.database().ref('"+path+"').set({" +
			build.build(allitems)+
		'});';
	}
	
	snapshot(folder,arr1,arr2) {
		return build.build([ 'var ref = firebase.database().ref("'+folder+'");'+'\n',
		'ref.once("value").then(function(snapshot) {'+'\n',
		  'try {'+'\n',
		  build.build(arr1)+'\n',
			'\t\t'+'} catch(err) {'+'\n',
			'\t\t'+'console.log(err);'+'\n',
			'\t\t'+build.build(arr2)+'\n',
			'\t'+'}'+'\n',
		  '});'
		]);
	}
}

db = new Database();