
class Fonts {
		constructor() {}
		
		select(font) {
			var selectedfont;
			switch (font) {
				case "courier prime" :
					selectedfont = {
						url:"https://fonts.googleapis.com/css?family=Courier+Prime&display=swap",
						fontfamily: "'Courier Prime', monospace",
					};
				break;
				default:selectedfont = {
						url:"https://fonts.googleapis.com/css?family=Montserrat&display=swap",
						fontfamily: "'Montserrat', sans-serif"
					};
			}
		return selectedfont;			
		}
}

fonts = new Fonts();