# InstantCreator

Instant Creator simplifies your frontend development journey by providing a comprehensive set of files to kickstart your project.

**Key Features:**
- Quickly generates files with their initial code.
- Automates the creation of `index.html` and `style.css` files, complete with boilerplate HTML and CSS resetting code.

Get started effortlessly with InstantCreator for a seamless and efficient front-end development experience! 🚀✨

### How to use it

1. Create a folder for your project.
2. Create `main.js`.
3. Initialize npm in your directory using:
   ```
   npm init -y
   ```
   
   > Use `npm init -y` to skip configuration prompts during initialization.

4. Paste the following code into your `main.js` file:

    ```
    const fs = require("fs");
    const fileCreator = (projectName) => {
    // HTML file Initializer & Creator
        fs.writeFile(
        `index.html`,
        `<!DOCTYPE html> \n<html lang="en"> \n<head> \n\t<meta charset="UTF-8"> \n\t<meta name="viewport" content="width=device-width, initial-scale=1.0"> \n\t<title>${projectName}</title> \n\t<link rel="stylesheet" href="style.css"> \n</head> \n<body> \n\t<!-- Thanks for using instantCreator --> \n\t<h1>Hello World!</h1> \n</body>\n</html>`,
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
    > Code for InstantCreator. Customize the webpage title by passing the desired name to `fileCreator("mywebpage")`.

5. To run the code, execute the following command in your terminal:
    ```
    node main.js
    ```
    
## Benefits

- HTML file with Basic Skeleton
- CSS file with reset style
- CSS file linked with HTML

### Prerequisites

Ensure you have Node.js installed on your PC, as npm won't work without it.

### InstantCreator

InstantCreator handles all the essential tasks for front-end developers.
