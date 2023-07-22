import React from 'react';
import { AiOutlineHeart, AiOutlineLike } from "react-icons/ai";
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
                    }}>chabua, dibrugarh</p>
                </div>
            </div>
            <div className={classes.contentContainer}>
                <img className={classes.postimage} src={postImage} alt="post" />
                <div className={classes.contentInfo}>
                    <p className={classes.date}>4 April 2023</p>
                    <p className={classes.heading}>🌾🚜 Greetings from the farm! 🚜🌾</p>
                    <p className={classes.description}>Hey there, everyone! Just wanted to share the fruits of our labor here on the farm. It's that time of the year when all the hard work we've put in starts to pay off, and it's truly a rewarding feeling. 😊</p>
                </div>
                <div className={classes.likeContainer}>
                    <p className={classes.count}>45 likes</p>
                    <button className={classes.btn}>
                        <AiOutlineHeart className={classes.icon} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Post