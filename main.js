const fs = require("fs");

/**
 *  Code for creating html document
 */
const instantCreator = (projectName) => {
  const indexHTML = `<!DOCTYPE html> 
<html lang="en"> 
<head> 
    <meta charset="UTF-8"> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
    <title>${projectName}</title> 
    <link rel="stylesheet" href="style.css"> 
</head> 
<body> 
	  <!-- Write your code here --> 
	  <h1>Hello World!</h1>
    <script src="script.js"></script>
</body>
</html>
`;
  fs.writeFile("index.html", indexHTML, () => {
    console.log("\u2713 FILE : HTML file has been created!");
  });
};

/**
 *  Code for creating css document
 */
const styleCSS = `@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500;700;900&display=swap'); 

* { 
	margin: 0; 
	padding: 0; 
	box-sizing: border-box; 
	font-family: 'Poppins';
} 

body, 
html { 
	height: 100%; 
	width: 100%;
}
`;

setTimeout(() => {
  fs.writeFile("style.css", styleCSS, () => {
    console.log("\u2713 FILE : CSS file has been created!");
  });
}, 0);


/**
 *  Code for creating js document
*/
const scriptJS = `console.log("Hello World")`;

setTimeout(() => {
  fs.writeFile("script.js", scriptJS, () => {
    console.log("\u2713 FILE : Javascript file has been created!");
  });
}, 0);

instantCreator("document"); // Pass here the name of your webpage you want to show.

/**
 *  Confirmation
 */
setTimeout(() => {
  console.log("\u2713 DONE : instantCreator deployment!");
}, 500);