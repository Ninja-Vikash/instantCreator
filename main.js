const fs = require("fs");

const fileCreator = (projectName) => {
  // -------------------- CODE FOR HTML WRITING
  const boilerplate = `<!DOCTYPE html> 
<html lang="en"> 
<head> 
    <meta charset="UTF-8"> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
    <title>${projectName}</title> 
    <link rel="stylesheet" href="style.css"> 
</head> 
<body> 
	  <!-- Thanks for using instantCreator --> 
	  <h1>Hello World!</h1> 
</body>
</html>
`;
  fs.writeFile("index.html", boilerplate, () => {
    console.log("HTML file created successfully!");
  });
};

// -------------------- CODE FOR CSS WRITING
const cssBoilerplate = `@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500;700;900&display=swap'); 

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

fs.writeFile("style.css", cssBoilerplate, () => {
  console.log("CSS file Created Successfully!");
});

fileCreator("document"); // Pass here the name of your webpage you want to show.