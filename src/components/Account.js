import React from 'react';

function Account() {
    return<>
        <section className="flex">
            <div className="block line-h" style={{width:'100%',paddingTop:'50px',marginLeft:'73px'}}>
                <h1>Create your account</h1>
               
                <form className="block line-h">
                    <div className="accnt-h1 font-weight line-h">
                        <p>Username</p>
                        <input type="text" className="input-txt"></input>
                    </div>
                    <div className="accnt-h1 font-weight line-h">
                        <p>Email</p>
                        <input type="text" className="input-txt"></input>
                    </div>
                    <div className="accnt-h1 font-weight line-h">
                        <p>Password</p>
                        <input type="text" className="input-txt"></input>
                    </div>
                    <div className="accnt-h1 font-weight line-h">
                        <p>Confirm Password</p>
                        <input type="text" className="input-txt"></input>
                    </div>
                    <br></br>
                    <div className="line-h"className="check-box">
                        <img src="../Images/robot-img.png" style={{ width: '300px', objectFit: 'cover' }}></img>
                        <input type="checkbox"></input>
                    </div>

                    <div>
                    <input type="checkbox"></input>  I agree to the Terms of Use and Privacy Policy
                    </div>
                    <br></br>
                    <div className="border-red-btn">
                        <button className="red-bg white bb-red">SIGN UP</button>
                    </div>
                    <br></br>
                    <div>
                     Have an account? <a href="#">Log In</a> 
                    </div>

                </form>


            </div>
            
            <div className="block music-sec" style={{backgroundColor:'#f5f5f6',paddingTop:'50px',paddingLeft:'30px'}}>
        <h1 className="accnt-se2">Music Counts. <br></br>Track, Find and <br></br>Rediscover Music.</h1>
                    
                  <div style={{paddingTop:'600px'}}>
                     Learn more  <a href="#">about Last.fm</a> 
                    </div>

            </div>
       
        </section>
    
    </>
}
export default Account;