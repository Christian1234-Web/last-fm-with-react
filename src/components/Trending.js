import React from 'react';

function Trending() {
    return <section className="album trend-bg">

        
            <div className="flex top-width">
            <h1 className="navy white font-weight">Trending Tracks</h1>
            </div>

            <div className="artist-grid">
                
            <div className="hovar" style={{cursor: 'pointer' }}>
                <p className="white font-weight">1</p>
                        <img src="../Images/trend-img.webp" style={{ width: '180px' }}></img>
                <p className="album-txt white font-weight" style={{ fontSize: '15px' }}>Butter</p>
                <p className="white">BTS</p>
                            <p className="light-txt" style={{lineHeight:'1.5'}}>622,766 listeners</p>
                    </div>
                   
            <div className="hovar" style={{ cursor: 'pointer' }}>
            <p className="white font-weight">2</p>
                        <img src="../Images/dyna-img1.webp" style={{ width: '180px'}}></img>
                        <p className="album-txt white font-weight"style={{fontSize:'15px'}}>Dynamite
        </p>
        <p className="white">BTS</p>

                            <p className="light-txt" style={{lineHeight:'1.5'}}>622,766 listeners</p>
            </div>
            
            <div className="hovar" style={{ cursor: 'pointer' }}>
            <p className="white font-weight">3</p>
                        <img src="../Images/trend-img.webp" style={{ width: '180px'}}></img>
                <p className="album-txt white font-weight" style={{ fontSize: '15px' }}>Butter (Instrumental)</p>
                <p className="white">BTS</p>

                            <p className="light-txt" style={{lineHeight:'1.5'}}>622,766 listeners </p>
                    </div>
                 
            <div className="hovar" style={{ cursor: 'pointer' }}>
            <p className="white font-weight">4</p>
                        <img src="../Images/trend-img.webp" style={{ width: '180px'}}></img>
                        <p className="album-txt white font-weight"style={{fontSize:'15px'}}>LUMBERJACK
        </p>
        <p className="white">BTS</p>

                            <p className="light-txt" style={{lineHeight:'1.5'}}>622,766 listeners</p>
                    </div>
                   
            <div className="hovar" style={{ cursor: 'pointer' }}>
            <p className="white font-weight">5</p>
                        <img src="../Images/trend-img.webp" style={{width: '180px' }}></img>
                <p className="album-txt white font-weight" style={{ fontSize: '15px' }}>Butter (Hotter Remix)</p>
                <p className="white">BTS</p>

                            <p className="light-txt" style={{lineHeight:'1.5'}}>622,766 listeners</p>
                    </div>
                  
            <div className="hovar" style={{ cursor: 'pointer' }}>
            <p className="white font-weight">6</p>
                        <img src="../Images/trend-img-last.webp" style={{ width: '180px'}}></img>
                <p className="album-txt white font-weight" style={{ fontSize: '15px' }}>Life Goes On</p>
                <p className="white">BTS</p>

                        <p className="light-txt" style={{ lineHeight: '1.5' }}>622,766 listeners </p>
                        <div>
                    <a href="#" className="view-1 white" style={{color:'white'}}>View all trending tracks </a>
                    </div>
            </div>
            </div>


    </section>

}
export default Trending;