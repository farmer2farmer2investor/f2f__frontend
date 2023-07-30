import React from 'react';
import { AiOutlineHeart } from "react-icons/ai";
import profile from '../../assets/profile.png';
import postImage from '../../assets/postImage.jpg'

// stylesheet
import classes from './Post.module.css';


const Post = ({ item }) => {
    return (
        <div className={classes.postContainer}>
            <div className={classes.topContainer}>
                <div className={classes.imageContainer}>
                    <img className={classes.profile} src={item.profilePicture || profile} alt="user profile" />
                </div>
                <div className={classes.infoContainer}>
                    <p>{item.name}</p>

                    <p style={{
                        fontSize: ".75rem",
                        color: "#dee2e6"
                    }}>{item.location}</p>
                </div>
            </div>
            <div className={classes.contentContainer}>
                <img className={classes.postimage} src={item.image || postImage} alt="post" />
                <div className={classes.contentInfo}>
                    <p className={classes.date}>{item.createdAt}</p>
                    <p className={classes.heading}>{item.category}</p>
                    <p className={classes.description}>{item.description}</p>
                </div>
                <div className={classes.likeContainer}>
                    <p className={classes.count}>{item.likes.length} likes</p>
                    <button className={classes.btn} onClick={() => console.log(item)}>
                        <AiOutlineHeart className={classes.icon} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Post