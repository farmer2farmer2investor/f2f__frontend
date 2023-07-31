import React, { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { likePost } from '../../api/PostRequest';
import profile from '../../assets/profile.png';
import postImage from '../../assets/postImage.jpg';

// stylesheet
import classes from './Post.module.css';

const Post = ({ user, data }) => {
    const [liked, setLiked] = useState(data.likes.includes(user._id));
    const [likes, setLikes] = useState(data.likes.length);

    const handleLike = () => {
        likePost(data._id, user._id);
        setLiked((prev) => !prev);
        liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1)
    }
    return (
        <div className={classes.postContainer}>
            <div className={classes.topContainer}>
                <div className={classes.imageContainer}>
                    <img className={classes.profile} src={data.profilePicture || profile} alt="user profile" />
                </div>
                <div className={classes.infoContainer}>
                    <p>{data.name}</p>

                    <p style={{
                        fontSize: ".75rem",
                        color: "#dee2e6"
                    }}>{data.location}</p>
                </div>
            </div>
            <div className={classes.contentContainer}>
                <img className={classes.postimage} src={data.image || postImage} alt="post" />
                <div className={classes.contentInfo}>
                    <p className={classes.date}>{data.createdAt}</p>
                    <p className={classes.heading}>{data.category}</p>
                    <p className={classes.description}>{data.description}</p>
                </div>
                <div className={classes.likeContainer}>
                    <p className={classes.count}>{likes} likes</p>
                    <button className={classes.btn} onClick={handleLike}>
                        {liked ?
                            <AiFillHeart className={classes.icon} />
                            :
                            <AiOutlineHeart className={classes.icon} />
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Post