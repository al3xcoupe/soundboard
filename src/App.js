import React, { useRef } from "react";


const sounds = [
  { name: "Anime Wow", file: "/audiofiles/anime-wow-sound-effect.mp3", color: "green" },
  { name: "Cash Register", file: "/audiofiles/cash-register-sound-fx.mp3", color: "green" },
  { name: "GTA San Andreas", file: "/audiofiles/gta-san-andreas-.mp3", color: "green" },
  { name: "Kaszan Uefa", file: "/audiofiles/uefa_1.mp3", color: "green" },
  { name: "MLG Airhorn", file: "/audiofiles/mlg-airhorn.mp3", color: "green" },
  { name: "Rizz Sound Effect", file: "/audiofiles/rizz-sound-effect.mp3", color: "green" },
  { name: "Suiiii", file: "/audiofiles/sui.mp3", color: "green" },
  { name: "We Are The Champions", file: "/audiofiles/we-are-the-champions-copia.mp3", color: "green" },

  { name: "2 Hours Later", file: "/audiofiles/2-hours-later.mp3", color: "orange" },
  { name: "Bahnhof Jingle", file: "/audiofiles/5_bahnhofjingle_sbb.mp3", color: "orange" },
  { name: "A Few Moments Later", file: "/audiofiles/a-few-moments-later-sponge-bob-sfx-fun.mp3", color: "orange" },
  { name: "Among Us Role Reveal 2", file: "/audiofiles/among-us-role-reveal-sound.mp3", color: "orange" },
  { name: "Netflix Jingle", file: "/audiofiles/nouveau-jingle-netflix.mp3", color: "orange" },
  { name: "Scheming Weasel Faster", file: "/audiofiles/scheming-weasel-faster-1-mp3cutn-mp3cut.mp3", color: "orange" },

  { name: "Among Us Role Reveal 1", file: "/audiofiles/among-us-role-reveal-sound (1).mp3", color: "red" },
  { name: "Baby Laughing Meme", file: "/audiofiles/baby-laughing-meme.mp3", color: "red" },
  { name: "Big Time Rush Theme", file: "/audiofiles/big-time-rush-theme-song-mp3cut.mp3", color: "red" },
  { name: "Buzzer Error", file: "/audiofiles/buzzer-error.mp3", color: "red" },
  { name: "Error CDoxCYm", file: "/audiofiles/error_1.mp3", color: "red" },
  { name: "Fail Sound Effect", file: "/audiofiles/fail-sound-effect.mp3", color: "red" },
  { name: "GTA V Death", file: "/audiofiles/gta-v-death-sound-effect-102.mp3", color: "red" },
  { name: "Windows Shutdown", file: "/audiofiles/preview_4.mp3", color: "red" },
  { name: "Que Miras Bobo Messi", file: "/audiofiles/que-miras-bobo-messi.mp3", color: "red" },
  { name: "Spongebob Fail", file: "/audiofiles/spongebob-fail.mp3", color: "red" },
  { name: "Titanic Flute Fail", file: "/audiofiles/titanic-flute-fail.mp3", color: "red" },
  { name: "Vine Boom", file: "/audiofiles/vine-boom.mp3", color: "red" },
  { name: "Windows 10 Sound", file: "/audiofiles/windows10_sound.mp3", color: "red" },
];

function App() {
  // useRef to keep track of currently playing sounds
  const audioRefs = useRef([]);

  // Function to play a sound and add it to the refs array
  const playSound = (file) => {
    const audio = new Audio(file);
    audio.play();
    audioRefs.current.push(audio);

    // Remove the reference when the sound ends
    audio.onended = () => {
      audioRefs.current = audioRefs.current.filter((a) => a !== audio);
    };
  };

  // Function to stop all currently playing sounds
  const stopAllSounds = () => {
    audioRefs.current.forEach((audio) => {
      audio.pause();
      audio.currentTime = 0; // Reset the audio to the start
    });
    audioRefs.current = []; // Clear the refs array
  };

  return (
    <div style={styles.container}>
      <h1>Mein Soundboard</h1>
      <button onClick={stopAllSounds} style={styles.stopButton}>
        Stop All Sounds
      </button>
      <div style={styles.soundboard}>
        {sounds.map((sound, index) => (
          <button
            key={index}
            onClick={() => playSound(sound.file)}
            style={{ ...styles.button, backgroundColor: sound.color }}
          >
            {sound.name}
          </button>
        ))}
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "50px",
  },
  stopButton: {
    padding: "10px 20px",
    fontSize: "16px",
    marginBottom: "20px",
    backgroundColor: "red",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
  soundboard: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "10px",
  },
  button: {
    padding: "20px",
    fontSize: "14px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
  },
};

export default App;