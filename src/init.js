import {Howl, Howler} from 'howler/dist/howler.min';

export default function Sound() {
  let sound = new Howl({
    src: ["./src/audio/sound.mp3"],
  });

  // Shoot the laser!
  sound.play();
}
