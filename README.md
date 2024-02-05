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
