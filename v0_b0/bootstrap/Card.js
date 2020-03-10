class Card {
  constructor() {
  }

  classicCard(title, subtitle, content, pic, buttonlist) {
    return this.openCardComp()+
           this.imageCardComp(pic)+
           this.openCardBodyComp()+
           this.onlyTextTitleCardComp(title, subtitle, content)+
           this.buttonCardComp(buttonlist)+
           div.close()+
           div.close();
  }

  onlyTextCard(content) {this.all = "";
    return this.openCardComp()+
           text.text('div',content,'card-body')+
           div.close();
  }

  onlyTextTitleCard(title, subtitle, content, links) {this.all = "";
    for (var i = 0; i < links.length; i++) {
    this.all += a.get('',links[i],'card-link','href="#"');
    }
    return this.openCardComp()+
           this.openCardBodyComp()+
           text.text('h5',title,'card-title')+
           text.text('h6',subtitle,'card-subtitle mb-3 text-muted')+
           text.text('p',content,'card-text')+
           this.all+
           div.close()+
           div.close();
  }

  onlyTextTitleCardComp(title, subtitle, content) {this.all = "";
    return text.text('h5',title,'card-title')+
           text.text('h6',subtitle,'card-subtitle mb-3 text-muted')+
           text.text('p',content,'card-text');
  }

  linksCardComp(links) {this.all = "";
    for (var i = 0; i < links.length; i++) {
    this.all += a.get('',links[i],'card-link','href="#"');
    }
    return this.all;
  }

  buttonListCardComp(buttonlist) {this.all = "";
    for (var i = 0; i < buttonlist.length; i++) {
    this.all += button.button('a',buttonlist[i][0],buttonlist[i][1],buttonlist[i][1]);
    }
    return this.all;
  }

  imageCard(pic, array) {this.all = "";
    return this.openCardComp()+
           this.openCardBodyComp()+
           image.image('card-img-top',pic)+
           text.text(array[0],array[1],array[2],array[3],array[4])+
           div.close()+
           div.close();
  }

  imageCardComp(pic, content) {this.all = "";
    return image.image('card-img-top',pic);

  }

  openCardComp() {
    return div.open('','','card','style="width: 18rem;"');
  }

  openCardBodyComp() {
    return div.open('','','card-body','');
  }

  openCardDeckComp() {
    return div.open('','','card mb-4 shadow-sm','');
  }

  listCard(title, list) {this.all = "";
    for (var i = 0; i < list.length; i++) {
    this.all += li.get('',list[i],'list-group-item','');
    }
    if (title != '') {this.title = div.get('',title,'card-header','')}

    return this.openCardComp()+
           this.title+
           ul.open('','','list-group list-group-flush','')+
           this.all+
           ul.close()+
           div.close();
  }

  listCardComp(list) {this.all = "";
    for (var i = 0; i < list.length; i++) {
    this.all += li.get('',list[i],'list-group-item','');
    }
    return ul.open('','','list-group list-group-flush','')+
           this.all+
           ul.close();
  }

  buttonCardComp(buttonlist) {this.all = "";
    for (var i = 0; i < buttonlist.length; i++) {
    this.all += button.button('a',buttonlist[i][0],buttonlist[i][1],buttonlist[i][1]);
    }
    return this.all;
  }

  completeCard1(title, subtitle, content, pic, links) {
    return this.openCardDeckComp()+
           this.imageCardComp(pic)+
           this.openCardBodyComp()+
           this.onlyTextTitleCardComp(title, subtitle, content)+
           div.close() +
           this.openCardBodyComp()+
           this.linksCardComp(links)+
           div.close() + div.close();
  }

  completeCard2(title, subtitle, content, pic, list, links) {
    return this.openCardDeckComp()+
           this.imageCardComp(pic)+
           this.openCardBodyComp()+
           this.onlyTextTitleCardComp(title, subtitle, content)+
           div.close() +
           this.listCardComp(list)+
           this.openCardBodyComp()+
           this.linksCardComp(links)+
           div.close() + div.close();
  }

  completeCard3(title, subtitle, content, pic, list, buttonlist) {
    return this.openCardDeckComp()+
           this.imageCardComp(pic)+
           this.openCardBodyComp()+
           this.onlyTextTitleCardComp(title, subtitle, content)+
           div.close() +
           this.listCardComp(list)+
           this.openCardBodyComp()+
           this.buttonListCardComp(buttonlist)+
           div.close() + div.close();
  }



}


  card = new Card();
