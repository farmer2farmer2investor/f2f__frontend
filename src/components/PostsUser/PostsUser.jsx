import React from 'react'
import Post from '../Post/Post';

// stylesheet
import classes from './PostsUser.module.css';

const PostsUser = () => {
  return (
    <div className={classes.postsuser}>
        <p className={classes.heading}>Your Recent Posts</p>
        <div>
        </div>
    </div>
  )
}

export default PostsUser