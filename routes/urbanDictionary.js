// In the project, we use ESM (JS modules, type="module"),
that's why we import modules via import() and not via require() (like in CommonJS). */
import express from "express"; // it's a web app framework that is used to design and build web apps.
export const router = express.Router();
import needle from "needle"; // it's an HTTP client that is used on the server.
import * as dotenv from "dotenv"; // allows us to have environment variables.
dotenv.config();

// Environment variables
const API_KEY_VALUE = process.env.API_KEY_VALUE;

/* router.get, where .get refers to GET requests, creates a router.
We make the function async/await because it returns a Promise.
req is an object where info about the HTTP request that called the event is contained.
res is an object that is used to send back the HTTP response.
*/ 
router.get("/", async (req, res) => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": API_KEY_VALUE,
      "X-RapidAPI-Host": "urban-dictionary7.p.rapidapi.com",
    },
  };
  const response = await fetch(
    "https://urban-dictionary7.p.rapidapi.com/v0/random",
    options
  );
  console.log(response);

  // If the response is successful, response.json() returns a JSON object.
  if (response.ok) {
    const data = await response.json();
    res.send(data);
  } else { // if the response isn't succesful, the user sees "Ooops" on the page.
    res.send("Ooops");
  }
});

export default router;
