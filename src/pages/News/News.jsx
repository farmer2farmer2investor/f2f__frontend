import React from 'react';
import Navbar from '../../components/Navbar/Navbar';

// stylesheet
import classes from './News.module.css';
const News = () => {
  return (
    <div className={classes.news}>
      <Navbar />
      <div className={classes.newsContainer}>
        <h1 className={classes.heading}>work is going on</h1>
      </div>
    </div>
  )
}

export default News