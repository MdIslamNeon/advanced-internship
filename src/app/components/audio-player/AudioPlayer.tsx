"use client";

import TrackInfo from "./TrackInfo";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";
import VolumeControl from "./VolumeControl";
import styles from "./AudioPlayer.module.css";
import { Book } from "@/app/types";
import { useRef, useState } from "react";

type AudioPlayerProps = {
  book: Book;
};

export const AudioPlayer = ({ book }: AudioPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // The element's own play/pause events set `isPlaying`, so this handler only
  // issues the command — setting the state here too would double up.
  function handlePlayPause() {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      // play() rejects when the browser blocks playback or the src fails.
      audio.play().catch((error) => console.error(error));
    }
  }

  function handleSkip(seconds: number) {
    const audio = audioRef.current;
    if (!audio) return;

    // duration is NaN until metadata loads, so only clamp once it's a number.
    const next = audio.currentTime + seconds;
    const max = Number.isFinite(audio.duration) ? audio.duration : next;
    audio.currentTime = Math.min(Math.max(next, 0), max);
  }

  return (
    <div className={styles.audio__wrapper}>
      <audio
        ref={audioRef}
        src={book.audioLink}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      <TrackInfo book={book} />
      <div className={styles.audio__controls}>
        <Controls
          isPlaying={isPlaying}
          onPlayPause={handlePlayPause}
          onSkip={handleSkip}
        />
        <ProgressBar />
      </div>
    </div>
  );
};
