import React, {useState} from 'react'

function CheckTwo(props) {
    
    let [Bg, setBg] = useState(false);
  
    let colorChange = () => {
       
        if (!Bg) {
            // alert('green')
        //   {props.greenBg}
        } else {
            // alert('blue')
        //    {props.blueBg}
        }
        setBg(!Bg)
        console.log(!Bg)
}



    return (
        <>
        <div className={Bg} onClick={() => colorChange()}>
                <div>
                    <img src="{image1}"></img>
            </div>
            <p style={{ fontSize: '30px', border: '1px solid black', cursor: 'pointer' }}>ClickME</p>
        </div>
    </>
    );
}
export default CheckTwo;