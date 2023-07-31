import React, { useEffect } from 'react'
import { gettimelineposts } from '../../actions/PostAction.js';
import { useDispatch, useSelector } from 'react-redux'
import Post from '../Post/Post.jsx';
import loadingImage from '../../assets/loading.gif';


// stylesheet
import classes from './Posts.module.css';

const Posts = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.authReducer.authData);
  const loading = useSelector((state) => state.postReducer.loading);
  const postsData = useSelector((state) => state.postReducer.postsData);

  useEffect(() => {
    dispatch(gettimelineposts(user._id));
  }, [])

  if (loading) {
    return (
      <div className={classes.loadingContainer}>
        <img src={loadingImage} alt="loading" />
      </div>
    )
  }

  return (
    <div className={classes.posts}>
      <div>
        {postsData?.map((data, index) => (
          <div key={index}>
            <Post user={user} data={data} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Posts