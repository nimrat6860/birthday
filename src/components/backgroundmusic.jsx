import{ useRef, useState } from "react";

const BackgroundMusic = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2 bg-white/70 backdrop-blur-md px-4 py-2 rounded-full shadow-md">
      <button
        onClick={toggleMusic}
        className="text-pink-600 font-semibold hover:text-pink-700 transition cursor-pointer"
      >
        {isPlaying ? "⏸ Pause Music" : "🎵 Play Music"}
      </button>
      <audio ref={audioRef} src="/birthday.mp3" loop muted={false}></audio>
    </div>
  );
};

export default BackgroundMusic;
