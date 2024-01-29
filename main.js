const fs = require("fs");

const fileCreator = (projectName) => {
// HTML file Initializer & Creator
  fs.writeFile(
    `index.html`,
    `<!DOCTYPE html> \n<html lang="en"> \n<head> \n\t<meta charset="UTF-8"> \n\t<meta name="viewport" content="width=device-width, initial-scale=1.0"> \n\t<title>${projectName}</title> \n\t<link rel="stylesheet" href="style.css"> \n</head> \n<body> \n\n</body>\n</html>`,
    () => {
      console.log("HTML file created successfully!");
    }
  );
};

fileCreator("Document"); // Pass here the name of your webpage you want to show.

// CSS Resetter Initializer & Creator
fs.writeFile(
  "style.css",
  `@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500;700;900&display=swap'); \n\n* { \n\tmargin: 0; \n\tpadding: 0; \n\tbox-sizing: border-box; \n\tfont-family: 'Poppins';\n} \n\nbody, \nhtml { \n\theight: 100%; \n\twidth: 100%;\n}`,
  () => {
    console.log("CSS file Created Successfully!");
  }
);

