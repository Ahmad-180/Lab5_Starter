window.addEventListener('DOMContentLoaded', init);

function init() {
  const hornSelect   = document.getElementById('horn-select');
  const hornImage    = document.querySelector('#expose img');
  const hornAudio    = document.querySelector('#expose audio');
  const volumeSlider = document.getElementById('volume');
  const volumeIcon   = document.querySelector('#volume-controls img');
  const playButton   = document.querySelector('#expose button');

  hornSelect.addEventListener('change', () => {
    const choice = hornSelect.value;
    hornImage.src = `assets/images/${choice}.svg`;
    hornAudio.src =  `assets/audio/${choice}.mp3`;
  });

  volumeSlider.addEventListener('input', () => {
    const vol = +volumeSlider.value;      
    hornAudio.volume = vol / 100;
    if (vol === 0)        volumeIcon.src = 'assets/icons/volume-level-0.svg';
    else if (vol < 33)    volumeIcon.src = 'assets/icons/volume-level-1.svg';
    else if (vol < 67)    volumeIcon.src = 'assets/icons/volume-level-2.svg';
    else                  volumeIcon.src = 'assets/icons/volume-level-3.svg';
  });

  playButton.addEventListener('click', e => {
    e.preventDefault();
    hornAudio.play();
    if (hornSelect.value === 'party-horn') {
      new JSConfetti().addConfetti();
    }
  });
}
