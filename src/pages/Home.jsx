import React from 'react'
import Navbar from '../components/Navbar/Navbar'

// stylesheet
import classes from './Home.module.css';

const Home = () => {
  return (
    <div className={classes.home}>
      <Navbar />
    </div>
  )
}

export default Home