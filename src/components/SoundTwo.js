import React, { useState } from 'react';
import Bag from "../audio/Bag.mp3";
import Goodbye from '../audio/Goodbye.mp3'

  let audio1 = new Audio(Bag)
  let audio = new Audio(Goodbye)
function PlaySong() {
    let [play,setPlay] = useState(false)
    let [mode,setMode] = useState("pause")
  

    let start = () => {
        if (!play) {
            audio.play()
            setMode('play')
        } else {
            setMode('pause')
           audio.pause();
        }
         console.log(!play)
        setPlay(!play)
        console.log(!play)

        
    }
    return (
        <div>
            <button onClick={()=>start()}>{ mode}</button>
        </div>
    );
}
export default PlaySong;