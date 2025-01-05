let speech = new window.SpeechSynthesisUtterance();

let voices = [];
let selectVoice = document.getElementById("select");

document.getElementById("listenBtn").addEventListener("click", () => {
  speech.text = document.getElementById("enteredText").value;
  window.speechSynthesis.speak(speech);
});

window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();
  voices.forEach(
    (voice, i) => (selectVoice.options[i] = new Option(voice.name, i))
  );
};

selectVoice.addEventListener("change", () => {
  speech.voice = voices[selectVoice.value];
});
