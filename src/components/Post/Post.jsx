import React from 'react';
import { AiOutlineHeart } from "react-icons/ai";
import profile from '../../assets/profile.png';
import postImage from '../../assets/postImage.jpg'

// stylesheet
import classes from './Post.module.css';


const Post = () => {
  return (
    <div className={classes.postContainer}>
        <div className={classes.topContainer}>
            <div className={classes.imageContainer}>
                <img className={classes.profile} src={profile} alt="user profile" />
            </div>
            <div className={classes.infoContainer}>
                <p>Laditya Gogoi</p>

                <p style={{
                    fontSize: ".75rem",
                    color: "#dee2e6"
                }}>29 oct, chabua, dibrugarh</p>
            </div>
        </div>
        <p className={classes.descContainer}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores unde temporibus quasi obcaecati exercitationem delectus.
        </p>
        <div className={classes.bottomContainer}>
            <img className={classes.postImage} src={postImage} alt="post" />
        </div>
        <div className={classes.likeContainer}>
            <AiOutlineHeart className={classes.icon} />
        </div>
    </div>
  )
}

export default Post