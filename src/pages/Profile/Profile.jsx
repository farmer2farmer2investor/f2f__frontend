import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import About from '../../components/About/About';

// stylesheet
import classes from './Profile.module.css';
import PostsUser from '../../components/PostsUser/PostsUser';

const Profile = () => {
  const { id } = useParams();

  return (
    <div className={classes.profile}>
      <Navbar />
      <div className={classes.infoContainer}>
        <About />
        <PostsUser />
      </div>
    </div>
  )
}

export default Profile