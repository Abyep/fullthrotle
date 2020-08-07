import React, {Component} from "react"

const BackDrop = (props) => {

        return (
            <button onClick={props.drawerClickHandler} className="toggle-button">
            <div className="toggle-button__line" />
            <div className="toggle-button__line" />
            <div className="toggle-button__line" />
          </button>
        )
    }


export default BackDrop