# InstantCreator

Here is our latest edition <a href="https://github.com/Ninja-Vikash/instantCreatorPlus">instantCreator+</a>

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
