"use client";

import { useRef, useState } from "react";
import styles from "./ForYouContent.module.css";

// Turns 204.5 (seconds, what the browser reports) into "03:24".
function formatDuration(seconds: number) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function AudioDuration({ audioLink }: { audioLink: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [duration, setDuration] = useState<number | null>(null);

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration);
    }
  };

  return (
    <div className={styles.recommended__book_details_text}>
      {/* preload="metadata" tells the browser to fetch just the audio header,
          not the whole mp3 — that's all we need for the duration. */}
      <audio
        ref={audioRef}
        src={audioLink}
        preload="metadata"
        onLoadedMetadata={handleLoadedMetadata}
      />
      {duration === null ? "--:--" : formatDuration(duration)}
    </div>
  );
}

export default AudioDuration;
