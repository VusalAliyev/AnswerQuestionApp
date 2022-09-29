import React,{useState} from 'react'
import "../HomePage/homePage.css"
import Popup  from './Popup/Popup'

const HomePage = ({Logout,user}) => {
    const[btnPopup,setBtnPopup]=useState(false)
  return (
    <div className="Home">
    <div className="header">
        <button onClick={Logout}>Logout</button>
        <p>Coding is easy</p>
        <button onClick={()=>setBtnPopup(true)}>Ask Question</button>
        <Popup trigger={btnPopup} setTrigger={setBtnPopup}><h3>Popup</h3></Popup>
    </div>
    </div>
  )
}

export default HomePage