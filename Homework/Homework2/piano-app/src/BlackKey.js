import React from 'react';
import './BlackKey.css';

const BlackKey = ({ note }) => {
  const playNote = () => {
    const noteAudio = document.getElementById(note);
    noteAudio.currentTime = 0;
    noteAudio.play();
  };

  return <div className="key black" onClick={playNote}></div>;
};

export default BlackKey;