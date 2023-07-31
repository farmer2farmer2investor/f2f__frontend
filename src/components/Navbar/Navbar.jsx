import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../../actions/AuthAction';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FiPlus } from 'react-icons/fi';
import { AiOutlineLogout } from 'react-icons/ai';
import { CgSearch } from 'react-icons/cg';
import logo from '../../assets/logo.png';
import profile from '../../assets/profile.png';

// stylesheet
import classes from './Navbar.module.css';

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.authReducer.authData);
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  }

  const handleLogout = () => {
    dispatch(logOut());
  }

  return (
    <div className={classes.navbarContainer}>
      <div className={classes.logoContainer} onClick={() => navigate('/home')}>
        <img className={classes.logo} src={logo} alt="logo f2f" />
      </div>
      <div className={classes.searchContainer}>
        <form className={classes.form} onSubmit={() => { }}>
          {/* user query */}
          <input
            type="text"
            className={classes.searchQuery}
            name='search'
            placeholder='Search...'
            value={query}
            onChange={handleChange}
            autoComplete='on'
          />
          <div style={{
            width: "2px",
            height: "4vh",
            backgroundColor: "#ccc"
          }}>

          </div>
          {/* submit query */}
          <button className={classes.querySubmit} type='submit'>
            <CgSearch className={classes.iconQuery} />
          </button>
        </form>
      </div>
      <div className={classes.combineContainer}>
        <div className={classes.uploadContainer}>
          <FiPlus className={classes.icon} />
          <Link to="/upload" style={{
            textDecoration: "none",
            color: "#111"
          }}>
            <h5>upload</h5>
          </Link>
        </div>
        <div className={classes.profileContainer}  onClick={() => navigate(`/profile/${user._id}`)}>
          <img className={classes.profile} src={user.profilePicture || profile} alt="profile user" />
        </div>
        <div className={classes.logoutContainer}>
          <AiOutlineLogout className={classes.icon} onClick={handleLogout} />
        </div>
      </div>
    </div>
  )
}

export default Navbar