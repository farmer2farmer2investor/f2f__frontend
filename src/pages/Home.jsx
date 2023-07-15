import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar';
import Posts from '../components/Posts/Posts';

// stylesheet
import classes from './Home.module.css';

const Home = () => {
  return (
    <div className={classes.home}>
      <Navbar />
      <div className={classes.contentContainer}>
        <Sidebar />
        <Posts />
      </div>
    </div>
  )
}

export default Home