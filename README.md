# project-java-web-dev
My project for the course: Project Java and Web Development (DLBCSPJWD01)

Installation and run instructions:

Urban Dictionary’s Random Word (UDRW) is a web application that is intended for people who would like to learn English slang words and phrases in a casual and relaxed manner. UDRW provides a user with a random slang word or phrase, its definition and usage examples.

To install and run Urban Dictionary’s Random Word, you need to follow the instructions steps below:
1.	Download Visual Studio Code (VS Code) and Node.js if you don’t already have them.
2.	Download all the files except package.json and package-lock.json from this repository (the repository: https://github.com/ekaterina-e/project-java-web-dev).
3.	Create an account on Rapid API (https://rapidapi.com/). Subscribe to the Urban Dictionary API by Archer G-S (https://rapidapi.com/archergardinersheridan/api/urban-dictionary7). Choose Random Word endpoint. In Code Snippets, choose Java Script > fetch. In headers, you’ll find your secret key (see 'X-RapidAPI-Key') to the Urban Dictionary’s API.
4.	Launch VS Code and open the terminal. Run npm init -y, which will create package.json file. Run npm i express dotenv cors needle to install the necessary dependencies. Run npm i -D nodemon to install this dev dependency.
5.	In package.json, delete "test" under "scripts" and paste the following:
"start": "node index",
"dev": "nodemon index"
6.	Create .env file in the root folder and type API_KEY_VALUE='copy here your 'X-RapidAPI-Key' (see Step 3)' there.
7.	Download Live Server extension by Ritwick Dey. Open index.html in VS Code and click "Go Live". Urban Dictionary’s Random Word will be run successfully.
