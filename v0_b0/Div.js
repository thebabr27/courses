class Div {
  constructor(kind, mainclass, mainattribute) {
    this.kind = kind;
    this.mainclass = mainclass;
    this.mainattribute = mainattribute;
  }

  get(id, text, classes, attributes, action) {
    this.open(id, text, classes, attributes, action);
    this.close1();
    return this.all;
  }

  sget(id, text, classes, attributes, action) {
    this.sopen(id, text, classes, attributes, action);
    this.sclose1();
    return this.all;
  }

  iget(id, text, classes, attributes, action) {
    this.iopen(id, text, classes, attributes, action);
    this.close1();
    return this.all;
  }

  open(id, text, classes, attributes, action) {
    this.all = "";
    this.id = id;
    this.text = text;
    this.classes = this.mainclass + ' ' + classes;
    this.attributes = this.mainattribute + ' ' + attributes;
    this.open1();
    this.getId();
    this.getClasses();
    this.getAttributes();
    this.open2();
    this.getText();
    return this.all;
  }

  sopen(id, text, classes, attributes, action) {
    this.all = "";
    this.id = id;
    this.text = text;
    this.classes = this.mainclass + ' ' + classes;
    this.attributes = this.mainattribute + ' ' + attributes;
    this.sopen1();
    this.sgetId();
    this.sgetClasses();
    this.getAttributes();
    this.sopen2();
    this.sgetText();
    return this.all;
  }

  iopen(id, text, classes, attributes, action) {
    this.all = "";
    this.id = id;
    this.text = text;
    this.classes = this.mainclass + ' ' + classes;
    this.attributes = this.mainattribute + ' ' + attributes;
    this.open1();
    this.getId();
    this.getClasses();
    this.getAttributes();
    this.open2();
    this.igetText();
    return this.all;
  }

  close() {
    this.all = "";
    this.close1();
    return this.all;
  }

  sclose() {
    this.all = "";
    this.sclose1();
    return this.all;
  }

  open1() {
    this.all += '<'+this.kind;
  }

  sopen1() {
    this.all += '\n"<'+this.kind;
  }

  open2() {
    this.all += '>';
  }

  sopen2() {
    this.all += '>';
  }

  getClasses() {
    if (this.classes!=undefined) {
      if (this.classes!="" && this.classes!=" ") {
        this.all += ' class="';
        this.all += this.classes;
        this.all += '"';
      }
    }
  }

  sgetClasses() {
    if (this.classes!=undefined) {
      if (this.classes!="" && this.classes!=" ") {
        this.all += " class='";
        this.all += this.classes;
        this.all += "'";
      }
    }
  }

  getAttributes() {
    if (this.attributes!=undefined) {
      if (this.attributes!="" && this.attributes!=" ") {
        this.all += " "+this.attributes;
      }
    }
  }

  getText() {
    this.all += this.text+'\r';
  }

  sgetText() {
    this.all += this.text;
  }

  igetText() {
    this.all += this.text;
  }

  close1() {
    this.all += '</'+this.kind+'>';
  }

  sclose1() {
    this.all += '</'+this.kind+'>"+\r';
  }

  getId(){
    if (this.id!=undefined) {
      if (this.id!="") {
        this.all += ' id="' + this.id+'"';
      }
    }
  }

  sgetId(){
    if (this.id!=undefined) {
      if (this.id!="") {
        this.all += " id='" + this.id+"'";
      }
    }
  }
}

a = new Div('a','','');
br = '<br>\n';
ibr = '<br>';
but = new Div('button','','');
button = new Div('button','','');
caard = new Div('div','card','');
cardbody = new Div('div','cardbody','');
carousel = new Div('div','carousel','');
checkbox = new Div('input','','type="checkbox"');
circle = new Div('circle','','');
collapse= new Div('div','collapse','');
col= new Div('div','col','');
col3= new Div('div','col-3','');
col4= new Div('div','col-4','');
col6= new Div('div','col-6','');
col6md4= new Div('div','col-6 col-md-4','');
col12= new Div('div','col-12','');
col12md6= new Div('div','col-12 col-md-6','');
colsm3 = new Div('div','col-sm-3','');
colsm4= new Div('div','col-sm-4','');
colsm6 = new Div('div','col-sm-6','');
colsm12 = new Div('div','col-sm-12','');
colmd3= new Div('div','col-md-3','');
colmd4= new Div('div','col-md-4','');
colmd6= new Div('div','col-md-6','');
colmd12= new Div('div','col-md-12','');
collg4= new Div('div','col-lg-4','');
container = new Div('div','container','');
containerfluid = new Div('div','container-fluid','');
dflex = new Div('div','d-flex','');
display4 = new Div('p','display-4','');
display3 = new Div('p','display-3','');
display2 = new Div('p','display-2','');
display1 = new Div('p','display-1','');
div = new Div('div','','');
div2 = new Div('div','','');
drop = new Div('div','dropdown','');
fa = new Div('i','fa','');
fas = new Div('i','fas','');
fab = new Div('i','fab','');
foot = new Div('footer','','');
foorm = new Div('form','','');
form = new Div('form','','');
header = new Div('header','','');
htm = new Div('html','','');
hea = new Div('head','','');
bod = new Div('body','','');
meta = new Div('meta','','');
table = new Div('table','table','');
thead = new Div('thead','','');
tbody = new Div('tbody','','');
td = new Div('td','','');
tr = new Div('tr','','');
th = new Div('th','','');
tit = new Div('title','','');
hr = new Div('hr','','');
h1 = new Div('h1','','');
h2 = new Div('h2','','');
h3 = new Div('h3','','');
h4 = new Div('h4','','');
h5 = new Div('h5','','');
h6 = new Div('h6','','');
iconbar = new Div('div','','');
img = new Div('img','','');
ii = new Div('i','','');
iframe = new Div('iframe', '','');
input = new Div('input','','');
inpuut = new Div('input','','');
jumbo = new Div('div','jumbotron','');
label = new Div('label','','');
li = new Div('li','','');
main = new Div('main', '','');
nav = new Div('nav','','');
ol = new Div('ol','','');
option = new Div('option','','');
p = new Div('p','','');
path = new Div('path','','');
rect = new Div('rect','','');
row = new Div('div','row','');
script = new Div('script','','type="text/javascript"');
section = new Div('section','','');
select = new Div('select','','');
small = new Div('small','','');
span = new Div('span','','');
svg = new Div('svg','','');
title = new Div('title','','');
text = new Div('div','','');
textarea = new Div('textarea','','');
ul = new Div('ul','','');
