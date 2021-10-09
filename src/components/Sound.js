import React, { Component,useState } from 'react';
import Bag from "../audio/Bag.mp3";

class Sound extends Component  {
    state = {
        Audio: new Audio(Bag),
        isPlaying: false,
    };
    playPause = () => {
        let isPlaying = this.state.isPlaying;
       
        if (isPlaying) {
            this.state.Audio.pause();
        }

        else {
            this.state.Audio.play();
        }
        this.setState({ isPlaying: !isPlaying});
    };

    render() {
        return (
            <div>
              
                <button onClick={this.playPause}>Play|paused</button>

            </div>
        );
    }

}
export default Sound;