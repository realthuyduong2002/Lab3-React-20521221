import React, { useEffect } from 'react';

const DrumKey = ({ keyCode, src, imgSrc, playSound, removeTransition }) => {
    useEffect(() => {
        const keys = document.querySelectorAll('.key');
        keys.forEach((key) =>
            key.addEventListener('transitionend', removeTransition)
        );
        return () => {
            keys.forEach((key) =>
                key.removeEventListener('transitionend', removeTransition)
            );
        };
    }, [removeTransition]);

    const handleClick = () => {
        const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
        audio.currentTime = 0;
        audio.play();
        const key = document.querySelector(`.key[data-key="${keyCode}"]`);
        key.classList.add('playing');
    };

    return (
        <div
            className="key"
            data-key={keyCode}
            onClick={() => {
                playSound(keyCode);
                handleClick();
            }}
        >
            <img className="key" src={imgSrc} alt="Drum Image" />
            <span className="sound"></span>
            <audio data-key={keyCode} src={src}></audio>
        </div>
    );
};

export default DrumKey;
