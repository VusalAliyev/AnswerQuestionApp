import React,{useState} from 'react'
import "../HomePage/homePage.css"
import Popup  from './Popup/Popup'

const HomePage = ({Logout,user}) => {
    const[btnPopup,setBtnPopup]=useState(false) 
    const [question, setQuestion] = useState({
      questionId: "",
      questionContent: "",
    });
  return (
    <div className="Home">
    <div className="header">
        <button onClick={Logout} className="logout">Logout</button>
        <p>Coding is easy</p>
        <button onClick={()=>setBtnPopup(true)} className="askHome">Ask Question</button>
        <Popup question={question} setQuestion={setQuestion} trigger={btnPopup} setTrigger={setBtnPopup}><h3>Popup</h3></Popup>
    </div>
    <div className="questionBox">
      <div className="questionBox-inner">
        <div className="questionBoxTop">
            <p>{question.questionContent}</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default HomePage