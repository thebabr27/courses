class Text {
  constructor() {
  }

  h1(id, content, classes, attributes) {
    return h1.get(id,content,classes,attributes);
  }

  h2(id, content, classes, attributes) {
    return h2.get(id,content,classes,attributes);
  }

  h3(id, content, classes, attributes) {
    return h3.get(id,content,classes,attributes);
  }

  h4(id, content, classes, attributes) {
    return h4.get(id,content,classes,attributes);
  }

  h5(id, content, classes, attributes) {
    return h5.get(id,content,classes,attributes);
  }

  h6(id, content, classes, attributes) {
    return h6.get(id,content,classes,attributes);
  }

  a(id, content, classes, attributes) {
    return a.get(id,content,classes,attributes);
  }

  display1(id, content, classes, attributes) {
    return display1.get(id,content,classes,attributes);
  }

  display2(id, content, classes, attributes) {
    return display2.get(id,content,classes,attributes);
  }

  display3(id, content, classes, attributes) {
    return display3.get(id,content,classes,attributes);
  }

  display4(id, content, classes, attributes) {
    return display4.get(id,content,classes,attributes);
  }

  text(kind, id, content, classes, attributes) {
      this.all = "";
      switch (kind) {
        case 'a':
          this.all = a.get(id,content,classes,attributes)
          break;
        case 'h1':
          this.all = h1.get(id,content,classes,attributes)
          break;
        case 'h2':
          this.all = h2.get(id,content,classes,attributes)
          break;
        case 'h3':
          this.all = h3.get(id,content,classes,attributes)
          break;
        case 'h4':
          this.all = h4.get(id,content,classes,attributes)
          break;
        case 'h5':
          this.all = h5.get(id,content,classes,attributes)
          break;
        case 'h6':
          this.all = h6.get(id,content,classes,attributes)
          break;
        case 'display-4':
          this.all = display4.get(id,content,classes,attributes)
          break;
        case 'display-3':
          this.all = display3.get(id,content,classes,attributes)
          break;
        case 'display-2':
          this.all = display2.get(id,content,classes,attributes)
          break;
        case 'display-1':
          this.all = display1.get(id,content,classes,attributes)
          break;
        case 'p':
          this.all = p.get(id,content,classes,attributes)
          break;
        case 'div':
          this.all = div.get(id,content,classes,attributes)
          break;
          default:

      }
      return this.all;
  }

  open(kind, id, content, classes, attributes) {
    this.all = "";
      switch (kind) {
        case 'a':
          this.all = a.open(id,content,classes,attributes)
          break;
        case 'h1':
          this.all = h1.open(id,content,classes,attributes)
          break;
        case 'h2':
          this.all = h2.open(id,content,classes,attributes)
          break;
        case 'h3':
          this.all = h3.open(id,content,classes,attributes)
          break;
        case 'h4':
          this.all = h4.open(id,content,classes,attributes)
          break;
        case 'h5':
          this.all = h5.open(id,content,classes,attributes)
          break;
        case 'h6':
          this.all = h6.open(id,content,classes,attributes)
          break;
        case 'display-4':
          this.all = display4.open(id,content,classes,attributes)
          break;
        case 'display-3':
          this.all = display3.open(id,content,classes,attributes)
          break;
        case 'display-2':
          this.all = display2.open(id,content,classes,attributes)
          break;
        case 'display-1':
          this.all = display1.open(id,content,classes,attributes)
          break;
        case 'p':
          this.all = p.open(id,content,classes,attributes)
          break;
        case 'div':
          this.all = div.open(id,content,classes,attributes)
          break;
          default:

      }
      return this.all;
  }

  close() {
  }
}

text = new Text();
