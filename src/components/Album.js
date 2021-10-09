import React from 'react';

function Album() {
    return <section className="album  smll-margin-left">
       
       <div className="flex space-btw top-width">
                <h1 className="navy-blur">Album</h1>
     <p className="light-txt">Most Popular</p>
            </div>

        <div className="flex">
            <div className="flex">
                <div className=""style={{margin:'5px',cursor:'pointer'}}>
                    <img src="../Images/album-img1.webp" style={{width:'200px'}}></img>
                    <p className="album-txt font-weight"style={{fontSize:'15px'}}>Get Lifted</p>
                    <p className="light-txt"style={{lineHeight:'1.5'}}>622,766 listeners <br></br>25 Oct 2004 . 14 tracks</p>
                </div>

                <div style={{margin:'5px',cursor:'pointer'}}>
                    <img src="../Images/album-img3.webp" style={{width:'200px'}}></img>
                    <p className="album-txt font-weight"style={{fontSize:'15px'}}>Once Again</p>
                    <p className="light-txt"style={{lineHeight:'1.5'}}>622,766 listeners <br></br>25 Oct 2004 . 14 tracks</p>
                </div>

                <div style={{margin:'5px',cursor:'pointer'}}>
                    <img src="../Images/album-img2.webp" style={{width:'200px'}}></img>
                    <p className="album-txt font-weight"style={{fontSize:'15px'}}>Love in the future</p>
                    <p className="light-txt"style={{lineHeight:'1.5'}}>622,766 listeners <br></br>25 Oct 2004 . 14 tracks</p>
                </div>

                <div style={{margin:'5px',cursor:'pointer'}}>
                    <img src="../Images/album-img4.webp" style={{width:'200px'}}></img>
                    <p className="album-txt font-weight"style={{fontSize:'15px'}}>Evolver</p>
                    <p className="light-txt" style={{lineHeight:'1.5'}}>622,766 listeners <br></br>25 Oct 2004 . 14 tracks</p>
                </div>
            </div>


        <div className="grid" style={{paddingLeft:'30px'}}>
            <div>
            <img src="../Images/album-sec2-img1.webp" style={{width:'90px'}}></img>
            </div>
            <div>
            <img src="../Images/album-sec2-img2.webp"style={{width:'90px'}}></img>
            </div>
            <div>
            <img src="../Images/album-sec2-img3.webp"style={{width:'90px'}}></img>
            </div>
            <div>
            <img src="../Images/album-sec2-img4.webp"style={{width:'90px'}}></img>
            </div>
            <div>
            <img src="../Images/album-sec2-img5.webp"style={{width:'90px'}}></img>
            </div>
            <div>
            <img src="../Images/album-sec2-img6.webp"style={{width:'90px'}}></img>
            </div>
            <div>
            <img src="../Images/album-sec2-img7.webp"style={{width:'90px'}}></img>
            </div>
            <div>
            <img src="../Images/album-sec2-img8.webp"style={{width:'90px'}}></img>
            </div>
           
            <div>
            <a href="#" className="view-1">+  Add image</a>
            </div>
            <div>  <a href="#" className="view-1">9 more photos</a></div>
          
            </div>
          
        
        </div>
    </section>
}
export default Album;