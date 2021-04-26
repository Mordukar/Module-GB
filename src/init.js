import { Howl } from "howler";

export default function Sound() {
  let sound = new Howl({
    src: ["./audio/sound.mp3"],
  });

  // Shoot the laser!
  sound.play();
}
