# instantCreator
Instant Creator provides you with a complete set of files to start frontend development.
<br>
**It will create files with their initial code.**
<br>
Meanwhile, it will deploy `index.html` & `style.css` with their boilerplate code & CSS resetting code respectively.

### How to use it

1. Create a folder for your project
2. Create `main.js`
3. Initialize npm on your directory using
   ```
   npm init -y
   ```
   > `npm init -y` to skip questions
4. Paste the code in `main.js`
    ```
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
    
    fileCreator("Document"); // Pass here the name of the webpage you want to show.
    
    // CSS Resetter Initializer & Creator
    fs.writeFile(
        "style.css",
        `@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;400;500;700;900&display=swap'); \n\n* { \n\tmargin: 0; \n\tpadding: 0; \n\tbox-sizing: border-box; \n\tfont-family: 'Poppins';\n} \n\nbody, \nhtml { \n\theight: 100%; \n\twidth: 100%;\n}`,
        () => {
        console.log("CSS file Created Successfully!");
        }
    );

    ```
    > Code for instantCreator. | You can change the title of the webpage by passing the name on `fileCreator("mywebpage")`
5. To run the code
    ```
    node main.js
    ```
## Benefits
**• HTML file with Basic Skeleton** <br>
**• CSS file with reset style** <br>
**• CSS file linked with HTML**

### You must have nodejs installed on your PC. Because with nodejs npm won't work.

### instantCreator does all the primary work for the front-end developers.
