import React from 'react'

// stylesheet
import classes from './Setting.module.css';
 
const Setting = ({ onClose }) => {
  return (
    <div className={classes.settingContainer}>
        <h1 style={{
          color: "white"
        }}>Work is going on...</h1>
        <button className={classes.btn} onClick={onClose}>close</button>
    </div>
  )
}

export default Setting