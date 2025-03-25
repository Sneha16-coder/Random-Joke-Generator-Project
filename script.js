// Select button and joke paragraph
const jokeBtn = document.getElementById("jokeBtn");
const jokeText = document.getElementById("joke");

// Function to fetch and display a joke
async function getJoke() {
    try {
        const response = await fetch("https://v2.jokeapi.dev/joke/Any");
        const data = await response.json();

        if (data.type === "twopart") {
            // Two-part joke (setup + delivery)
            jokeText.innerHTML = `${data.setup} <br> <b>${data.delivery}</b>`;
        } else {
            // Single joke
            jokeText.innerHTML = data.joke;
        }
    } catch (error) {
        jokeText.innerHTML = "Oops! Failed to fetch a joke. Try again!";
    }
}

// Add event listener to the button
jokeBtn.addEventListener("click", getJoke);
