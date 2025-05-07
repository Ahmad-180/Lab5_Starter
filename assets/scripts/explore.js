window.addEventListener('DOMContentLoaded', init);

function init() {
  console.log('✅ explore.js loaded');

  const voiceDropdown = document.getElementById('voice-select');
  const textInput     = document.getElementById('text-to-speak');
  const talkButton    = document.getElementById('talk-button');
  const faceImage     = document.getElementById('face-image');

  console.log({ voiceDropdown, textInput, talkButton, faceImage });

  let voices = [];
  function populateVoices() {
    voices = speechSynthesis.getVoices();
    console.log('voices array:', voices);
    voiceDropdown.innerHTML = '';
    voices.forEach((v,i) => {
      const opt = document.createElement('option');
      opt.value       = i;
      opt.textContent = `${v.name} (${v.lang})`;
      voiceDropdown.appendChild(opt);
    });
  }
  populateVoices();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoices;
  }

  talkButton.addEventListener('click', e => {
    e.preventDefault();
    console.log('🔊 Button clicked:', textInput.value);

    const utter = new SpeechSynthesisUtterance(textInput.value);
    utter.voice = voices[+voiceDropdown.value] || null;

    utter.onstart = () => {
      console.log('…speaking started');
      faceImage.src = 'assets/images/smiling-open.png';
    };
    utter.onend = () => {
      console.log('…speaking ended');
      faceImage.src = 'assets/images/smiling.png';
    };

    speechSynthesis.speak(utter);
  });
}
