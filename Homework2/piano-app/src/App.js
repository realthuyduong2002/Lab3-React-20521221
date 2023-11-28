import React, { useEffect } from 'react';
import WhiteKey from './WhiteKey';
import BlackKey from './BlackKey';
import CNote from './notes/C.mp3';
import DbNote from './notes/Db.mp3';
import DNote from './notes/D.mp3';
import EbNote from './notes/Eb.mp3';
import ENote from './notes/E.mp3';
import FNote from './notes/F.mp3';
import GbNote from './notes/Gb.mp3';
import GNote from './notes/G.mp3';
import AbNote from './notes/Ab.mp3';
import ANote from './notes/A.mp3';
import BbNote from './notes/Bb.mp3';
import BNote from './notes/B.mp3';
import './App.css';


const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j'];

const App = () => {
    useEffect(() => {
        const handleKeyPress = (event) => {
            console.log('Key pressed:', event.key);
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    return (
        <div>
            <header>
                <h1>Piano</h1>
            </header>
            {/* Your piano keys */}
            <WhiteKey note="C" />
            <BlackKey note="Db" />
            <WhiteKey note="D" />
            <BlackKey note="Eb" />
            <WhiteKey note="E" />
            <WhiteKey note="F" />
            <BlackKey note="Gb" />
            <WhiteKey note="G" />
            <BlackKey note="Ab" />
            <WhiteKey note="A" />
            <BlackKey note="Bb" />
            <WhiteKey note="B" />

            {/* Audio elements */}
            <audio id="C" src={CNote}></audio>
            <audio id="Db" src={DbNote}></audio>
            <audio id="D" src={DNote}></audio>
            <audio id="Eb" src={EbNote}></audio>
            <audio id="E" src={ENote}></audio>
            <audio id="F" src={FNote}></audio>
            <audio id="Gb" src={GbNote}></audio>
            <audio id="G" src={GNote}></audio>
            <audio id="Ab" src={AbNote}></audio>
            <audio id="A" src={ANote}></audio>
            <audio id="Bb" src={BbNote}></audio>
            <audio id="B" src={BNote}></audio>
        </div>
    );
};

export default App;
