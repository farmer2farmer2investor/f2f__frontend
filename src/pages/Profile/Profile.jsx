import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import About from '../../components/About/About';
import PostsUser from '../../components/PostsUser/PostsUser';

// stylesheet
import classes from './Profile.module.css';

const Profile = () => {
  const { id } = useParams();

  return (
    <div className={classes.profile}>
      <Navbar />
      <div className={classes.infoContainer}>
        <About id={id} />
        <PostsUser id={id} />
      </div>
    </div>
  )
}

export default Profile