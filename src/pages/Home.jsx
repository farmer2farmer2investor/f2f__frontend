import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar';
import Posts from '../components/Posts/Posts';
import News from '../components/News/News';

// stylesheet
import classes from './Home.module.css';

const Home = () => {
  const [isToggle, setIsToggle] = useState(true);
  const handleToggle = () => {
    if (isToggle) {
      setIsToggle(false);
    } else {
      setIsToggle(true);
    }
  }
  return (
    <div className={classes.home}>
      <Navbar />
      <div className={classes.contentContainer}>
        <Sidebar handleToggle={handleToggle} isToggle={isToggle} />
        {isToggle ? <Posts /> : <News />}
      </div>
    </div>
  )
}

export default Home