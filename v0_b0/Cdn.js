class Cdn {
  constructor() {
  }
  
  help() {
	console.log("//cdn with short names are for building");
	console.log("//cdn with long names are for publishing");
	console.log('baseCss()');
	console.log('baseJs()');
	console.log('babel()');
	console.log('react()');
	console.log('rJs()');
	console.log('rDomJs()');
	console.log('babJs()');
	console.log('bootstrapCss()');
	console.log('bsCss()');
	console.log('jqJs()');
	console.log('swiCss()');
	console.log('swiJs()');
	console.log('popJs()');
	console.log('bsJs()');
	console.log('bootstrapJs()');
	console.log('firebase()');
	console.log('fbJs()');
	console.log('fbDbJs()');
	console.log('fbAuthJs()');
	console.log('normalize()');
	console.log('fontawesomeCss()');
	console.log('faCss()');
	console.log('myJs()');
	return '';
  }
  baseCss(file) {
    return '<link rel="stylesheet" href="'+file+'">\n';
  }
  baseJs(file,type) {
    return '<script type="'+type+'" src="'+file+'"></script>\n';
 }
  bootstrapCss() {
    return '<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">\n';
  }
  react() {
    return '<script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script>\n'+
    '<script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>\n';
  }
  rJs() {
	var tag = document.createElement("script"); 
	tag.src="https://unpkg.com/react@16/umd/react.development.js";
	tag.crossOrigin = "";
	return tag;
  }
  rDomJs() {
	var tag = document.createElement("script"); 
	tag.src="https://unpkg.com/react-dom@16/umd/react-dom.development.js";
	tag.crossOrigin = "";
	return tag;
  }
  babel() {
    return '<script crossorigin src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>\n';
  }
  babJs() {
	var tag = document.createElement("script"); 
	tag.src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js";
	tag.crossOrigin = "";
	return tag;
  }
  bsCss() {
	var tag = document.createElement("link"); 
	tag.rel = "stylesheet";
	tag.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
	tag.integrity = "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T";
	tag.crossOrigin = "anonymous";
	return tag;
  }
	jqJs() {
		var tag = document.createElement("script"); 
		tag.src="https://code.jquery.com/jquery-3.4.1.slim.min.js";
		tag.integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n";
		tag.crossOrigin = "anonymous";
		return tag;
	}
	swiper() {
		return '<link rel="stylesheet" href="https://unpkg.com/swiper/css/swiper.min.css">\n'+
		'<script src="https://unpkg.com/swiper/js/swiper.min.js"></script>';
	}
	swiCss() {
		var tag = document.createElement("link"); 
		tag.rel = "stylesheet";
		tag.href="https://unpkg.com/swiper/css/swiper.min.css";
		return tag;
	}
	swiJs() {
		var tag = document.createElement("script"); 
		tag.src="https://unpkg.com/swiper/js/swiper.min.js";
		return tag;
	}
	popJs() {
		var tag = document.createElement("script"); 
		tag.src = "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js";
		tag.integrity = "sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1";
		tag.crossOrigin = "anonymous";
		return tag;
	}
	bsJs() {
		var tag = document.createElement("script"); 
		tag.src = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js";
		tag.integrity = "sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM";
		tag.crossOrigin = "anonymous";
		return tag;
	}
	bootstrapJs() {
    return '<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>\n'+
    '<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>\n'+
    '<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>\n';
  }
	firebase() {
    return '<script src="https://www.gstatic.com/firebasejs/6.2.0/firebase-app.js"></script>\n'+
    '<script src="https://www.gstatic.com/firebasejs/6.2.0/firebase-auth.js"></script>\n'+
    '<script src="https://www.gstatic.com/firebasejs/6.2.0/firebase-database.js"></script>\n';
  }
  fbJs() {
		var tag = document.createElement("script"); 
		tag.src = "https://www.gstatic.com/firebasejs/6.2.0/firebase-app.js";
		return tag;
	}
  fbDbJs() {
		var tag = document.createElement("script"); 
		tag.src = "https://www.gstatic.com/firebasejs/6.2.0/firebase-database.js";
		return tag;
	}
  fbAuthJs() {
		var tag = document.createElement("script"); 
		tag.src = "https://www.gstatic.com/firebasejs/6.2.0/firebase-auth.js";
		return tag;
	}
	normalize() {
    return '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" crossorigin="anonymous">\n';
  }
	fontawesomeCss() {
    return '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css">\n';
  }
    faCss() {
	var tag = document.createElement("link"); 
	tag.rel = "stylesheet";
	tag.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.9.0/css/all.min.css";
	return tag;
  }
	myJs() {
    return '<script src="lib/js/MyAllVariables.js"></script>\n'+
    '<script src="lib/js/MyScript.js"></script>\n'+
    '<script src="lib/js/Div.js"></script>\n'+
    '<script src="lib/js/Text.js"></script>\n'+
    '<script src="lib/js/Input.js"></script>\n'+
    '<script src="lib/js/List.js"></script>\n'+
    '<script src="lib/js/Icon.js"></script>\n'+
    '<script src="lib/js/Button.js"></script>\n'+
    '<script src="lib/js/Image.js"></script>\n'+
    '<script src="lib/js/Form.js"></script>\n'+
    '<script src="lib/js/Card.js"></script>\n'+
    '<script src="lib/js/Background.js"></script>\n'+
    '<script src="lib/js/Footer.js"></script>\n'+
    '<script src="lib/js/Iconbar.js"></script>\n'+
    '<script src="lib/js/Dropdown.js"></script>\n'+
    '<script src="lib/js/Marketing.js"></script>\n'+
    '<script src="lib/js/Featurette.js"></script>\n'+
    '<script src="lib/js/Navbar.js"></script>\n'+
    '<script src="lib/js/Carousel.js"></script>\n'+
    '<script src="lib/js/Jumbotron.js"></script>\n'+
    '<script src="lib/js/script.js"></script>\n'+
    "";
  }
}

cdn = new Cdn();