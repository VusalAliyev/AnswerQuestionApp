import React, { useState } from "react";
import "../Popup/popup.css";
import HomePage from "../HomePage";
const Popup = (props) => {
  
  console.log(props.question);
  const PopupSubmitHandler = (e) => {
    e.preventDefault();
  };

  return props.trigger ? (
    <form  className="popup">
      <div className="popup-inner">
        <button className="close-btn" onClick={() => props.setTrigger(false)}>
          X
        </button>
        <input
          onChange={(e) =>
            props.setQuestion({ ...props.question, questionContent: e.target.value })
          }
          value={props.question.questionContent}
          type="text"
          placeholder="Write your question..."
          className="inputPopup"
        />
        <button className="submitPopup" onClick={PopupSubmitHandler}>
          Submit
        </button>
      </div>
    </form>
  ) : (
    ""
  );
};

export default Popup;
