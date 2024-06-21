# InstantCreator
### ⚡Fast Deployment
Latest version ✨: <a href="https://github.com/Ninja-Vikash/instantCreatorPlus">instantCreator+</a>

Instant Creator simplifies your frontend development journey by providing a comprehensive set of files to kickstart your project.

**Key Features 🌟**
- Quickly generates files with some initial code.
- Automates the creation of `index.html` and `style.css` files, complete with boilerplate HTML and CSS resetting code.

Get started effortlessly with InstantCreator for a seamless and efficient front-end development experience! 🚀✨

> [!IMPORTANT]\
> Make sure you have installed Node.js in your machine.\
> Without node js `npm` command won't work\
> You will face errors
> 
> Before moving down go to the official `nodejs.org` and look for download nodejs\
>
> Check the versions using the commands below:
> ```bash
> node --version    # v20.15.0 or higher
> 
> npm --version     # 10.7.0 or higher
> ```
> All set now you can go down.


### Getting Started 🚀

1. Use the command lines for more efficiency!
   ```bash
   mkdir newproject

   cd newproject

   touch main.js

   echo "// Paste the code here" >> main.js

   npm init -y

   code .
   ``` 

2. Magical code 🔮 for `main.js` 
    ```js
    const fs = require("fs");

    /**
     *  Code for creating html document
    */
    const instantCreator = (projectName) => {
      const indexHTML =  `<!DOCTYPE html> 
    <html lang="en"> 
    <head> 
        <meta charset="UTF-8"> 
        <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
        <title>document</title> 
        <link rel="stylesheet" href="style.css"> 
    </head> 
    <body> 
      <!-- Write your code here --> 
      <div id="main">
            <div>🚀</div>
            <h1>Instant Creator</h1>
            <p>KickStart your work!</p>
        </div>

        <script src="script.js"></script>
    </body>
    </html>`

      fs.writeFile("index.html", indexHTML, () => {
        console.log("\u2713 FILE : index.html created!");
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

    #main {
      height: 100%;
      width: 100%;
      background-color: #111;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      color: #fff;
    }
    #main div {
      font-size: 4rem;
    }
    #main h1 {
      font-size: 3rem;
      border-bottom: 1px solid white;
      font-weight: 500;
    }
    #main p {
      margin-top: 10px;
      font-size: 1.5rem;
      font-weight: 300;
      letter-spacing: 0.2rem;
    }`;

    setTimeout(() => {
      fs.writeFile("style.css", styleCSS, () => {
        console.log("\u2713 FILE : style.css created!");
      });
    }, 0);


    /**
     *  Code for creating js document
    */
    const scriptJS = `console.log("Hello World")`;

    setTimeout(() => {
      fs.writeFile("script.js", scriptJS, () => {
        console.log("\u2713 FILE : script.js created!");
      });
    }, 0);

    instantCreator("document"); // Pass here the name of your webpage you want to show.

    /**
     *  Confirmation
    */
    setTimeout(() => {
      console.log("\n\u2713 DONE : You can start writing your code! 🤓\n");
    }, 300);
    ```
   
> [!NOTE]\
> Code for InstantCreator. Customize the webpage title by passing the desired name to `instantCreator("mywebpage")`.

3. To finish the work simply run the command in the integrated terminal
    ```bash
    node main.js
    ```

### Built with ❤️ and JavaScript
#### Happy Coding! 🤝
