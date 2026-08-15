"use client";

import { useEffect, useRef, useState } from "react";
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

  // On a refresh the mp3 headers are usually cached, so `loadedmetadata` can
  // fire before React hydrates and attaches the handler above — the event is
  // then missed and the duration never appears. readyState >= 1 (HAVE_METADATA)
  // means it already arrived, so read the duration directly instead of waiting.
  useEffect(() => {
    const audio = audioRef.current;
    if (audio && audio.readyState >= 1) {
      setDuration(audio.duration);
    }
  }, []);

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
      {duration !== null && Number.isFinite(duration)
        ? formatDuration(duration)
        : "--:--"}
    </div>
  );
}

export default AudioDuration;
