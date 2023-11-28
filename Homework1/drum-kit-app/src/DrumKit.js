import React, { useState, useEffect } from 'react';
import DrumKey from './DrumKey';
import wDrumImage from './images/w-drum.png';
import wSound from './sounds/w_drum.wav';
import aDrumImage from './images/a-drum.png';
import aSound from './sounds/a_drum.wav';
import sDrumImage from './images/s-drum.png';
import sSound from './sounds/s_drum.wav';
import dDrumImage from './images/d-drum.png';
import dSound from './sounds/d_drum.wav';
import jDrumImage from './images/j-drum.png';
import jSound from './sounds/j_drum.wav';
import kDrumImage from './images/k-drum.png';
import kSound from './sounds/k_drum.wav';
import lDrumImage from './images/l-drum.png';
import lSound from './sounds/l_drum.wav';
import Drum from './images/icon-drum.png';

const DrumKit = () => {
    const [keys] = useState([
        { keyCode: 87, src: wSound, imgSrc: wDrumImage },
        { keyCode: 65, src: aSound, imgSrc: aDrumImage },
        { keyCode: 83, src: sSound, imgSrc: sDrumImage },
        { keyCode: 68, src: dSound, imgSrc: dDrumImage },
        { keyCode: 74, src: jSound, imgSrc: jDrumImage },
        { keyCode: 75, src: kSound, imgSrc: kDrumImage },
        { keyCode: 76, src: lSound, imgSrc: lDrumImage }
    ]);

    const playSound = (keyCode) => {
        const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${keyCode}"]`);
        if (!audio) return;
        audio.currentTime = 0;
        audio.play();
        key.classList.add('playing');
    };

    // Keydown event
    const handleKeyDown = (event) => {
        playSound(event.keyCode);
    };

    // Handle Keydown
    document.addEventListener('keydown', handleKeyDown);

    useEffect(() => {
        const handleKeyDown = (event) => {
            playSound(event.keyCode);
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const removeTransition = (e) => {
        if (e.propertyName !== 'transform') return;
        e.target.classList.remove('playing');
    };

    return (
        <div>
            <header>
                <h1>Drum <img src={Drum} className="center-image" alt="Drum Icon" /> Kit</h1>
            </header>
            <div className="keys">
                {keys.map((key) => (
                    <DrumKey
                        key={key.keyCode}
                        keyCode={key.keyCode}
                        src={key.src}
                        imgSrc={key.imgSrc}
                        playSound={playSound}
                        removeTransition={removeTransition}
                    />
                ))}
            </div>
        </div>
    );
};

export default DrumKit;