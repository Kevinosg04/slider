var slider = document.querySelector('.slider');
var isPaused = false;

function pauseResumeSlider(event) {
  if (event.code === 'Space') {
    isPaused = !isPaused;
    if (isPaused) {
      slider.style.animationPlayState = 'paused';
    } else {
      slider.style.animationPlayState = 'running';
    }
  }
}

function moveSlider(event) {
  if (event.code === 'ArrowLeft') {
    slider.style.animationDuration = '20s';
    slider.style.animationDirection = 'reverse';
  } else if (event.code === 'ArrowRight') {
    slider.style.animationDuration = '15s';
    slider.style.animationDirection = 'normal';
  }
}

document.addEventListener('keydown', pauseResumeSlider);
document.addEventListener('keydown', moveSlider);
