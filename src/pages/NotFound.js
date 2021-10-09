import React from 'react';
import Navbar from '../components/Navbar';
import Sound from '../components/Sound';
import SoundTwo from '../components/SoundTwo';
import CheckTwo from '../components/CheckTwo';


function NotFound() {
    return <div>
        <Navbar></Navbar>
        <h1 className="flex line-h" style={{justifyContent:'center',alignItems:'center',backgroundColor:'black',height:'90vh',color:'white',fontSize:'40px'}}>
        THE PAGE YOU ARE LOOKING FOR IS NOT AVAILABLE <br></br> THANK YOU
        </h1>
        <div className="flex space-btw">
            
      
            <Sound />
            <CheckTwo
                greenBg='green'
                blueBg='blue'
                image1 = { 'src={../Images/artist-img1.webp}'}
            />
            <SoundTwo />
            </div>
    </div>
}
export default NotFound;
