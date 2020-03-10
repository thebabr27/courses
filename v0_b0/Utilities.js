class Utilities {
	constructor() {}
	
	cleanText(text) {
		while (text.search("“") != -1) {
			text = text.replace("“", '&quot');
		}
		while (text.search("”") != -1) {
			text = text.replace("”", '&quot');
		}
		while (text.search("à") != -1) {
			text = text.replace("à", "\u00E0");
		}
		while (text.search("è") != -1) {
			text = text.replace("è", "\u00E8");
		}
		while (text.search("é") != -1) {
			text = text.replace("é", "\u00E9");
		}
		while (text.search("ì") != -1) {
			text = text.replace("ì", "\u00EC");
		}
		while (text.search("ò") != -1) {
			text = text.replace("ò", "\u00F2");
		}
		while (text.search("ù") != -1) {
			text = text.replace("ù", "\u00F9");
		}
		while (text.search("É") != -1) {
			text = text.replace("É", "\u00C9");
		}
		while (text.search("È") != -1) {
			text = text.replace("È", "\u00C8");
		}
		while (text.search("Á") != -1) {
			text = text.replace("Á", "\u00C1");
		}
		while (text.search("À") != -1) {
			text = text.replace("À", "\u00C0");
		}
		while (text.search("’") != -1) {
			text = text.replace("’", '&#146');
		}
		return text;
	}
}

utilities = new Utilities();