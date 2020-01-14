const fs = require('fs');
const path = require('path');

// ************ Function to Read an HTML File ************
function readHTML (fileName) {
	let filePath = path.join(__dirname, `/../views/${fileName}.html`);
	let htmlFile = fs.readFileSync(filePath, 'utf-8');
	return htmlFile;
}

const controller = {
	root: (req, res) => {
		let html = readHTML('index');
		res.send(html);
	},
	contact: (req, res) => {
		res.send('Contact');
	},
	faq: (req, res) => {
		res.send('FAQ');
	},
	admin: (req, res) => {
		res.send('Hola administrador!');
	},
};

module.exports = controller
