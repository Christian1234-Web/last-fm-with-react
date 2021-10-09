import React from 'react';
import { Link } from "react-router-dom";


function Navbar() {
    return <div>
   
   <section className="nav-container flex space-btw hover ">
            <div className="left-nav">
                <ul>
                    <li>
                        <Link to="#"><img src="../Images/img-1-album.png"></img></Link>
                    </li>
                    <li>
                        <a href="https://paystack.com/pay/show-world-payment">second-img</a>
                    </li>
           </ul>
            </div>
            <div>
                <ul>
                    <li> <Link to="/" id="last">Last.fm</Link>
                    </li>

                </ul>
            </div>
            <div className="right-nav">
            <ul className="flex space-btw">
            <li className="search-img">
                        <Link to="/"><img src="../Images/search-logo2.png"></img></Link>
                    </li>
                    <li>
                        <Link to="#">Live</Link>
                    </li>
                    <li>
                        <Link to="#">Music</Link>
                    </li>
                    <li>
                        <Link to="/Chart">Charts</Link>
                    </li> <li>
                        <Link to="#">Events</Link>
                    </li>
                    <li>
                        <Link to="#">Features</Link>
                    </li> <li>
                        <Link to="3">.</Link>
                    </li>
                    <li>
                        {/* <Link  to="#">Log In</Link> */}
                    </li>
                     <Link to="/sign"> <button className="hover bolder-2" style={{borderRadius:'3px'}}> SIGN UP</button> </Link>
           </ul>
            </div>
</section>



    </div>
}
export default Navbar;