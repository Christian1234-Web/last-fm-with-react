import React from 'react';


function Bg_content(){
    return <div>
        <section className=" Bg_content flex">
            <div className="content-sec-1" >
                <div className="margin">
           
            <div className="first-sec white font-weight">
              <h1>John Legend</h1>  
            </div>
            <div className="flex second-sec">
                <div className="play-artist"><img src="../Images/playlist.png"></img></div>
                <div className="play_"><img src="../Images/img__.png"></img></div>
                <div className="listener">
                    <p className="light-txt">listener</p>
                    <p className="white font-weight">2M</p>
                </div>

                <div className="scrobs">
                    <p  className="light-txt">Scrobbles</p>
                    <p className="white font-weight">35.6M</p>
                </div>
            </div>
            
            <div className="third-sec flex space-btw">
                <div className="first-phase flex">
                    <img src="../Images/white-album.png"></img>
                    <div>
                        <p className="light-txt">LATEST RELEASE </p>
                        <p className="font-weight white">Minefields (Live Acoustic)  </p>
                        <p className="normal-txt white">25 February 2021 </p>
                            </div>
                            
                </div>

                <div className="second-phase flex">
                <img src="../Images/bg-img2.jpg"></img>
                    <div className="absolute">
                        <p className="light-txt">POPULAR THIS WEEK </p>
                        <p className="font-weight white">All of Me  </p>
                        <p className="normal-txt white"> 8,380 listeners</p>
                </div> 
            </div>
            </div>
                </div>
            </div>
           
            <div className="content-sec-2">
                <div className="sec2-img">
                    {/* <img src="../Images/bg-img1.webp"></img> */}
                </div>
            </div>
            
</section>




    </div>
}
export default Bg_content;