import { formatDuration } from "@/app/utils";
import styles from "./ProgressBar.module.css";

type ProgressBarProps = {
  currentTime: number;
  duration: number;
  onSeek: (time: number) => void;
};

function ProgressBar({ currentTime, duration, onSeek }: ProgressBarProps) {
  // duration is 0 until the mp3's metadata arrives, so guard the divide.
  const percent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className={styles.audio__progress_wrapper}>
      <div className={styles.audio__time}>{formatDuration(currentTime)}</div>
      {/* A range input gives drag, click-to-seek and keyboard support for free.
          The gradient is what paints the played portion — a range track has no
          fill of its own. */}
      <input
        type="range"
        className={styles.audio__progress_bar}
        min={0}
        max={duration || 0}
        step={0.1}
        value={currentTime}
        onChange={(e) => onSeek(Number(e.target.value))}
        style={{
          background: `linear-gradient(to right, #2bd97c ${percent}%, #6f787b ${percent}%)`,
        }}
        aria-label="Seek"
      />
      <div className={styles.audio__time}>{formatDuration(duration)}</div>
    </div>
  );
}

export default ProgressBar;
