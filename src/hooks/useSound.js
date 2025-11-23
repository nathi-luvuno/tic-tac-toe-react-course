import { useEffect, useRef } from "react";

const useSound = (url, options) => {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio(url);
    audio.volume = options?.volume ?? 1;
    audioRef.current = audio;
  }, [url, options?.volume]);

  const playSound = () => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.currentTime = 0;

    audio.play().catch((err) => {
      console.warn("Audio blocked until user gesture:", err);
    });

    if (options?.timeout) {
      setTimeout(() => {
        audio.pause();
        audio.currentTime = 0;
      }, options.timeout);
    }
  };

  return playSound;
};

export default useSound;
