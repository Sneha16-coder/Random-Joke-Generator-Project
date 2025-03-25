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


// Select the speech button
const speakBtn = document.getElementById("speakBtn");

// Function to convert joke text to speech
function speakJoke(jokeText) {
    const speech = new SpeechSynthesisUtterance(jokeText);
    speech.lang = "en-US"; // Set language
    speech.rate = 1; // Adjust speed (1 is normal)
    speech.pitch = 1; // Adjust pitch
    window.speechSynthesis.speak(speech);
}

// Modify the existing getJoke function to include text-to-speech
async function getJoke() {
    try {
        const response = await fetch("https://v2.jokeapi.dev/joke/Any");
        const data = await response.json();
        let joke = "";

        if (data.type === "twopart") {
            joke = `${data.setup} ... ${data.delivery}`;
            jokeText.innerHTML = `${data.setup} <br> <b>${data.delivery}</b>`;
        } else {
            joke = data.joke;
            jokeText.innerHTML = data.joke;
        }

        // Make the joke readable by the speech API
        speakBtn.onclick = () => speakJoke(joke);
    } catch (error) {
        jokeText.innerHTML = "Oops! Failed to fetch a joke. Try again!";
    }
}

// Add event listener to the joke button
jokeBtn.addEventListener("click", getJoke);

