let API_KEY;
window.onload = function () {
    API_KEY = prompt("Please enter your API key:");
};

function submitText() {
    const input = document.getElementById("inputText").value;
    document.getElementById("submittedText").textContent = input;

    synthesiseSpeech(input);

}


let synthesisURL = "https://api.elevenlabs.io/v1/text-to-speech/XrExE9yKIg1WjnnlVkGX?output_format=mp3_44100_128"

function synthesiseSpeech(input) {
    const url = synthesisURL;

    const data = {
        text: input,
        model_id: "eleven_multilingual_v2",
    };

    fetch(url, {
        method: "POST",
        headers: {
            "xi-api-key": API_KEY,
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.blob(); // Convert response to audio Blob 
        })
        .then((blob) => {
            const audioUrl = URL.createObjectURL(blob);

            // Create a new audio element for each API call
            const newAudio = document.createElement("audio");
            newAudio.controls = true;
            newAudio.src = audioUrl;
            newAudio.autoplay = true;

            // Append the new audio to the audio container
            document.getElementById("audioContainer").appendChild(newAudio);
        })
        .catch((error) => console.error("Error:", error));
}
