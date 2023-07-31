import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { userposts } from '../../actions/PostAction.js';
import loadingImage from '../../assets/loading.gif';
import Post from '../Post/Post';

// stylesheet
import classes from './PostsUser.module.css';

const PostsUser = ({ id }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.authData);
  const loading = useSelector((state) => state.postReducer.loading);
  const posts = useSelector((state) => state.postReducer.userPosts);

  useEffect(() => {
    dispatch(userposts(id));
  }, []);


  if (loading) {
    return (
      <div className={classes.postsuser}>
        <p className={classes.heading}>Your Recent Posts</p>
        <div>
          <img style={{
            width: "50px"
          }} src={loadingImage} alt="loading" />
        </div>
      </div>
    )
  }
  return (
    <div className={classes.postsuser}>
      <p className={classes.heading} onClick={() => console.log(posts)}>Your Recent Posts</p>
      <div>
        {posts?.map((data, index) => (
          <div key={index}>
            <Post user={user} data={data} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default PostsUser