import React from 'react'
import "../Popup/popup.css"
const Popup = (props) => {
    return (props.trigger) ? (
        <div className='popup'>
            <div className="popup-inner">
                <button className='close-btn' onClick={() => props.setTrigger(false)}>close</button>
            </div>
        </div>
    ) : ""
}

export default Popup