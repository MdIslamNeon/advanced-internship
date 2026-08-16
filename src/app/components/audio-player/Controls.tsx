import { BsFillPlayCircleFill, BsFillPauseCircleFill } from "react-icons/bs";
import { MdForward10, MdReplay10 } from "react-icons/md";
import styles from "./Controls.module.css";

type ControlsProps = {
  isPlaying: boolean;
  onPlayPause: () => void;
  onSkip: (seconds: number) => void;
};

function Controls({ isPlaying, onPlayPause, onSkip }: ControlsProps) {
  return (
    <div className={styles.audio__controls_wrapper}>
      <button
        className={styles.audio__controls_btn}
        onClick={() => onSkip(-10)}
        aria-label="Rewind 10 seconds"
      >
        <MdReplay10 />
      </button>
      <button
        className={`${styles.audio__controls_btn} ${styles.audio__controls_btn_play}`}
        onClick={onPlayPause}
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? <BsFillPauseCircleFill /> : <BsFillPlayCircleFill />}
      </button>
      <button
        className={styles.audio__controls_btn}
        onClick={() => onSkip(10)}
        aria-label="Forward 10 seconds"
      >
        <MdForward10 />
      </button>
    </div>
  );
}

export default Controls;
