"use client";

import { useState } from 'react';
import { RiMenuAddLine } from 'react-icons/ri';
import TrackInfo from './TrackInfo';
import  Controls  from './Controls';
import  ProgressBar  from './ProgressBar';
import  VolumeControl  from './VolumeControl';
import  PlayList  from './PlayList';
import styles from './AudioPlayer.module.css';

export const AudioPlayer= () =>{
  const [openDrawer,setOpenDrawer] = useState(false);
  return (
    <div>
      <div className={styles.audio__wrapper}>
        <TrackInfo />
        <div className={styles.audio__controls}>
          <Controls />
          <ProgressBar />
        </div>
        <div className={styles.audio__actions}>
          <VolumeControl />
          <button onClick={() => setOpenDrawer((prev) => !prev)}>
            <RiMenuAddLine />
          </button>
        </div>
      </div>
      <div
        className={`${styles.audio__drawer} ${
          openDrawer ? styles.audio__drawer_open : ''
        }`}
      >
        <div className={styles.audio__playlist}>
          <PlayList />
        </div>
      </div>
    </div>
  );
};