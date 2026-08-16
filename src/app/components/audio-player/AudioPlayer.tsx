"use client";

import TrackInfo from "./TrackInfo";
import Controls from "./Controls";
import ProgressBar from "./ProgressBar";
import VolumeControl from "./VolumeControl";
import styles from "./AudioPlayer.module.css";
import { Book } from "@/app/types";
import { useRef, useState, useEffect } from "react";

type AudioPlayerProps = {
  book: Book;
};

export const AudioPlayer = ({ book }: AudioPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio && audio.readyState >= 1) setDuration(audio.duration);
  }, []);

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

  // Setting currentTime makes the element fire `timeupdate`, which updates the
  // state — so there's no setCurrentTime call to make here.
  function handleSeek(time: number) {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = time;
  }

  return (
    <div className={styles.audio__wrapper}>
      <audio
        ref={audioRef}
        src={book.audioLink}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
      />
      <div className={styles.audio__track}>
        <TrackInfo book={book} />
      </div>
      <div className={styles.audio__controls}>
        <Controls
          isPlaying={isPlaying}
          onPlayPause={handlePlayPause}
          onSkip={handleSkip}
        />
      </div>
      <div className={styles.audio__progress}>
        <ProgressBar
          currentTime={currentTime}
          duration={duration}
          onSeek={handleSeek}
        />
      </div>
    </div>
  );
};
