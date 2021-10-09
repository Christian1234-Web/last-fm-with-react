import React, {Component} from 'react';
import Bag from "../audio/Goodbye.mp3";
import Migos from '../audio/Migos.mp3'


class Top_tracks extends Component {
   
    state = {
        Audio: new Audio(Bag),
        Music: new Audio(Migos),
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
  
    pausePlay = () => {
        let isPlaying = this.state.isPlaying;
       
        if (isPlaying) {
            this.state.Music.pause();
           
        }

        else {
            this.state.Music.play();
        }
        this.setState({ isPlaying: !isPlaying});
    };

    
  render() {
        

    return<>
        <section className="top-tracks smll-margin-left">
            <div className="flex space-btw top-width">
                <h1 className="navy-blur">Top Tracks</h1>
     <p className="light-txt">last 7 days</p>
            </div>

            <div className="flex space-btw play-width" onClick={this.playPause}>
                <div className="flex">
                    <p className="normal-txt smll-margin num-font" >1</p> <img src="../Images/play-on.png"
                        className="play-img" style={{ marginTop: '2px', marginLeft: '8px' }}></img>
                    <img src="../Images/play-img1.webp" style={{ width: '30px', height: '30px', margin: '5px' }}></img>
                    <img src="../Images/img-love.png" className="smaller-mgn" style={{ marginTop: '10px' }}></img>
                    <p className="playTxt smll-margin">Goodbye my lover</p>
            </div>
                <div className="bg-pink">
                    <p className="join-text-n pink-p">8,380 listeners</p>
            </div>

            </div>
            <div className="flex space-btw play-width" onClick={this.pausePlay}>
                <div className="flex">
                    <p className="normal-txt smll-margin num-font" >2</p> <img src="../Images/play-on.png"
                        className="play-img" style={{ marginTop: '2px', marginLeft: '8px' }}>
                    </img><img src="../Images/play-img1.webp" style={{ width: '30px', height: '30px', margin: '5px' }}>
                    </img><img src="../Images/img-love.png" className="smaller-mgn" style={{ marginTop: '10px' }}></img>
                    <p className="playTxt smll-margin">Bad Bouje</p>
            </div>
                <div className="bg-pink">
                    <p className="join-text-n pink-p">1,272 listeners</p>
            </div>

            </div>
            <div className="flex space-btw play-width">
                <div className="flex">
                    <p className="normal-txt smll-margin num-font" >3</p> <img src="../Images/play-on.png"
                        className="play-img" style={{ marginTop: '2px',marginLeft:'8px' }}>
                    </img><img src="../Images/play-img1.webp" style={{ width: '30px', height: '30px', margin: '5px' }}>
                    </img><img src="../Images/img-love.png" className="smaller-mgn" style={{ marginTop: '10px' }}></img>
                    <p className="playTxt smll-margin">Wild (feat. Gary Clark Jr.)</p>
            </div>
                <div className="bg-pink">
                    <p className="join-text-n pink-p">1,380 listeners</p>
            </div>

            </div>
            <div className="flex space-btw play-width">
                <div className="flex">
                    <p className="normal-txt smll-margin num-font" >4</p> <img src="../Images/play-on.png"
                        className="play-img" style={{ marginTop: '2px',marginLeft:'8px' }}>
                    </img><img src="../Images/play-img1.webp" style={{ width: '30px', height: '30px', margin: '5px' }}>
                    </img><img src="../Images/img-love.png" className="smaller-mgn" style={{ marginTop: '10px' }}></img>
                    <p className="playTxt smll-margin">Ordinary People</p>
            </div>
                <div className="bg-pink">
                    <p className="join-text-n pink-p">4,380 listeners</p>
            </div>

            </div> <div className="flex space-btw play-width">
                <div className="flex">
                    <p className="normal-txt smll-margin num-font" >5</p> <img src="../Images/play-on.png"
                        className="play-img" style={{ marginTop: '2px',marginLeft:'8px' }}>
                    </img><img src="../Images/play-img1.webp" style={{ width: '30px', height: '30px', margin: '5px' }}>
                    </img><img src="../Images/img-love.png" className="smaller-mgn" style={{ marginTop: '10px' }}></img>
                    <p className="playTxt smll-margin">Love Me Now</p>
            </div>
                <div className="bg-pink">
                    <p className="join-text-n pink-p">2,380 listeners</p>
            </div>

            </div> <div className="flex space-btw play-width">
                <div className="flex">
                    <p className="normal-txt smll-margin num-font" >6</p> <img src="../Images/play-on.png"
                        className="play-img" style={{ marginTop: '2px',marginLeft:'8px' }}>
                    </img><img src="../Images/play-img1.webp" style={{ width: '30px', height: '30px', margin: '5px' }}>
                    </img><img src="../Images/img-love.png" className="smaller-mgn" style={{ marginTop: '10px' }}></img>
                    <p className="playTxt smll-margin">Start the Fire</p>
            </div>
                <div className="bg-pink">
                    <p className="join-text-n pink-p">1,320 listeners</p>
            </div>

            </div> <div className="flex space-btw play-width">
                <div className="flex">
                    <p className="normal-txt smll-margin num-font" >7</p> <img src="../Images/play-on.png"
                        className="play-img" style={{ marginTop: '2px',marginLeft:'8px' }}>
                    </img><img src="../Images/play-img1.webp" style={{ width: '30px', height: '30px', margin: '5px' }}>
                    </img><img src="../Images/img-love.png" className="smaller-mgn" style={{ marginTop: '10px' }}></img>
                    <p className="playTxt smll-margin">Save Room</p>
            </div>
                <div className="bg-pink">
                    <p className="join-text-n pink-p">5,100 listeners</p>
            </div>

            </div>        
        </section>
        </>
    }
}
export default Top_tracks;