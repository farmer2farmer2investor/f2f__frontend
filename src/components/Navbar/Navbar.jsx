import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FiPlus } from 'react-icons/fi';
import { AiOutlineLogout } from 'react-icons/ai';
import { CgSearch } from 'react-icons/cg';
import logo from '../../assets/logo.png';
import profile from '../../assets/profile.png';

// stylesheet
import classes from './Navbar.module.css';

const Navbar = () => {
  const profileData = useSelector((state) => state.authReducer.authData);
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  }

  return (
    <div className={classes.navbarContainer}>
      <div className={classes.logoContainer}>
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
        <div className={classes.profileContainer}>
          <img className={classes.profile} src={profileData.profilePicture || profile} alt="profile user" />
        </div>
        <div className={classes.logoutContainer}>
          <AiOutlineLogout className={classes.icon} />
        </div>
      </div>
    </div>
  )
}

export default Navbar