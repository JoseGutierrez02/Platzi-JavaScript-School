import MediaPlayer from '@josearmandog02/platzi-media-player';
import AutoPlay from '@josearmandog02/platzi-media-player/lib/plugins/AutoPlay';
import AutoPause from '@josearmandog02/platzi-media-player/lib/plugins/AutoPause';
import Ads from '@josearmandog02/platzi-media-player/lib/plugins/Ads';

const video = document.querySelector('video');
const playButton: HTMLElement = document.querySelector('#playButton');
const muteButton: HTMLElement = document.querySelector('#muteButton');

const player = new MediaPlayer({ el: video, plugins: [
  new AutoPlay(),
  new AutoPause(),
  new Ads(),
]});

playButton.onclick = () => player.togglePlay();
muteButton.onclick = () => player.toggleMute();

if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(error => {
    console.log(error.message);
  });
}
