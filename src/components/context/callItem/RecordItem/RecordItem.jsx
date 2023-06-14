import React, { useMemo, useState, useEffect, useRef } from 'react';
import useSound from 'use-sound';
import { useSelector } from 'react-redux';

import { selectors } from '../../../../slices/recordsSlice';
import PlayRecordIcon from '../../../../icons/PlayRecordIcon';
import StopRecordIcon from '../../../../icons/StopRecordIcon';
import DownloadRecordIcon from '../../../../icons/DownloadRecordIcon';
import CloseRecordIcon from '../../../../icons/CloseRecordIcon';
import './RecordItem.css';


const RecordItem = ({ recordId, duration: callDuration }) => {
  const record = useSelector((state) => selectors.selectById(state, recordId));
  const [isPlaying, setIsPlaying] = useState(false);
  const [currTime, setCurrTime] = useState({
    min: "",
    sec: "",
  });
  const [seconds, setSeconds] = useState();
  
  const [play, { pause, duration, sound }] = useSound(record?.record);


  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([]));
        const min = Math.floor(sound.seek([]) / 60);
        const sec = Math.floor(sound.seek([]) % 60) >= 10 ? 
          Math.floor(sound.seek([]) % 60) : `0${Math.floor(sound.seek([]) % 60)}`;
        setCurrTime({
          min,
          sec,
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound]);

  const playRecordHandler = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  }

  const recordButton = useMemo(() => {
    return isPlaying ? <StopRecordIcon /> : <PlayRecordIcon />;
  }, [isPlaying]);
  
  return (
    <div className="recordItem">
      <div className="recordItemDuration recordItemText">{callDuration}</div>
      <button className="playButton" onClick={playRecordHandler}>
        <div className="roundButton">
          {recordButton}
        </div>
      </button>
      {isPlaying && <div className="recordItemPlaybackTimeText">
        {'00'}:{'00'}
      </div>}
      <div className="timeline">
        <progress
          value={seconds}
          max={duration / 1000}
        />
      </div>
      <button className="downloadButton">
        <DownloadRecordIcon />
      </button>
      <button className="closeRecordButton">
        <CloseRecordIcon />
      </button>
    </div>
  );
};

export default RecordItem;
