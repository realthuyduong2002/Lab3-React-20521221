import React from 'react';
import './WhiteKey.css'; 

const WhiteKey = ({ note }) => {
  const playNote = () => {
    const noteAudio = document.getElementById(note);
    noteAudio.currentTime = 0;
    noteAudio.play();
  };

  return <div className="key white" onClick={playNote}></div>;
};

export default WhiteKey;