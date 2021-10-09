import React from 'react';

function Join_other() {
    return <>
        <section className="join_other">
            <div className="flex">
                <div className="flex border-radius">
                    <img src="../Images/user1.png" className="border-radius img-width"></img>
                    <img src="../Images/user2.png" className="border-radius absolute-img"></img>
                    <img src="../Images/user3.png"className="border-radius img-width"></img> 
                </div>
                <div className="join-font">
                    <p className="navy-col">Join others and track this artist</p>
                    <p className="join-text-n">Scrobble, find and rediscover music with a Last.fm account</p>
                </div>
                <div className="flex">
                    <button className="font-weight red-bg red-btn">SIGN UP TO LAST.FM</button>
                  <div>  <p className="navy-col margin-left similar">Similar To</p></div>
                </div>
                <div className="space-btw view">
                    <a href="#">View all artists</a>
                </div>
        </div>
            <div className="flex line-h join-text-n">
                <div>
                <p className="">John Stephens (born December 28, 1978 in Springfield, Ohio), better known as
                     <br></br>John Legend, is a Grammy award winning R&B singer-songwriter, multi-
                    <br></br>instrumentalist, poet and actor signed to Kanye West's G.O.O.D. Music label.
                    <br></br>Prior to the release of his debut album Get Lifted in 2004, Legend's career
                    <br></br>gained momentum through a series of successful collab…<a href="#">read more</a> 
                </p>
                </div>
                
                <div className="smll-margin-left navy-col born">
                    <p>Born <br></br>Born In</p>
                </div>

                <div>
                    <p className="join-txt smll-margin">28 December 1978 (age 42) <br></br>Springfield, Clark County, Ohio,<br></br>United States</p>
                </div>

                <div className="flex smll-margin-left">
                    <div className="smll-margin join-hover">
                    <img src="../Images/join-radius-img1.webp" className="join-radius"></img>
                    <p className="text-align">Alicia Keys</p>
                    </div>
                    <div className="smll-margin join-hover">
                    <img src="../Images/join-radius-img2.webp"className="join-radius"></img>
                    <p className="text-align">John Legend & <br></br>The Roots</p>
                    </div>
                    <div className="smll-margin join-hover">
                    <img src="../Images/join-radius-img3.webp"className="join-radius"></img>
                    <p className="text-align">Anthony<br></br> Hamilton</p>
                    </div>
                </div>
            </div>
            
            <div className="flex ">
                <button className="blur-bd smll-margin">soul</button>
                <button className="blur-bd smll-margin">rnb</button>
                <button className="blur-bd smll-margin">neo-soul</button>
                <button className="blur-bd smll-margin">singer-songwriter</button>
                <button className="blur-bd smll-margin">john legend</button>
                <button className="blur-bd smll-margin hgh-font">+</button>
           <a href="#" className="view-1">View all tags</a>

            </div>
        
        </section>
        <div className="gray-bg"></div>

 </>   
}
export default Join_other;