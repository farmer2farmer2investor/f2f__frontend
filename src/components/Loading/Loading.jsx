import React from 'react';
import loadingImage from '../../assets/loading.gif';

// stylesheet
import classes from './Loading.module.css';
const Loading = () => {
  return (
    <div className={classes.loadingContainer}>
        <img src={loadingImage} alt="loading" />
    </div>
  )
}

export default Loading