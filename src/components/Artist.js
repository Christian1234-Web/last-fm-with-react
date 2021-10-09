import React from 'react';

function Artist() {
    return <section>
        <div className=" album  smll-margin-left">

        <div className="flex top-width">
                <h1 className="navy-blur">Similar Artist</h1>
                <img src="../Images/play-on.png"style={{width:'35px',height:'35px',marginTop: '8px',marginLeft:'8px'}}></img>
     <p className="light-txt" style={{paddingTop: '10px',marginLeft:'8px'}}>Play all</p>
            </div>
          
            <div className="artist-grid">
                
        <div className="hovar" style={{cursor:'pointer'}}>
                <img src="../Images/artist-img1.webp" style={{ width: '180px',borderRadius:'50%' }}></img>
                <p className="album-txt font-weight"style={{fontSize:'15px'}}>Alicia Keys</p>
                    <p className="light-txt" style={{lineHeight:'1.5'}}>622,766 listeners</p>
            </div>
            <div className="hovar" style={{cursor:'pointer'}}>
                <img src="../Images/artist-img2.webp" style={{ width: '180px',borderRadius:'50%'}}></img>
                <p className="album-txt font-weight"style={{fontSize:'15px'}}>John Legend & The Roots
</p>
                    <p className="light-txt" style={{lineHeight:'1.5'}}>622,766 listeners</p>
            </div>
            <div className="hovar" style={{cursor:'pointer'}}>
                <img src="../Images/artist-img3.webp" style={{ width: '180px',borderRadius:'50%'}}></img>
                <p className="album-txt font-weight"style={{fontSize:'15px'}}>Anthony Hamilton</p>
                    <p className="light-txt" style={{lineHeight:'1.5'}}>622,766 listeners </p>
            </div>
            <div className="hovar" style={{cursor:'pointer'}}>
                <img src="../Images/artist-img4.webp" style={{ width: '180px',borderRadius:'50%' }}></img>
                <p className="album-txt font-weight"style={{fontSize:'15px'}}>Robin Thicke
</p>
                    <p className="light-txt" style={{lineHeight:'1.5'}}>622,766 listeners</p>
            </div>
            <div className="hovar" style={{cursor:'pointer'}}>
                <img src="../Images/artist-img5.webp" style={{width: '180px',borderRadius:'50%' }}></img>
                <p className="album-txt font-weight"style={{fontSize:'15px'}}>Usher</p>
                    <p className="light-txt" style={{lineHeight:'1.5'}}>622,766 listeners</p>
            </div>
            <div className="hovar" style={{cursor:'pointer'}}>
                <img src="../Images/artist-img6.webp" style={{ width: '180px',borderRadius:'50%'}}></img>
                <p className="album-txt font-weight"style={{fontSize:'15px'}}>India.Arie</p>
                <p className="light-txt" style={{ lineHeight: '1.5' }}>622,766 listeners </p>
                <div>
            <a href="#" className="view-1">View all similar artists</a>
            </div>
            </div>
           
            </div>
</div>
    </section>

}
export default Artist;