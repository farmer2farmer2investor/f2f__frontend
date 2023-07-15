import React from 'react'
import { FiHome } from 'react-icons/fi';
import { BsNewspaper } from 'react-icons/bs';
import { FcAbout } from 'react-icons/fc';

// stylesheet
import classes from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.menuContainer}>
        <div>
          <FiHome className={classes.icon} />
          <h3>Home</h3>
        </div>
        <div>
          <BsNewspaper className={classes.icon} />
          <h3>News</h3>
        </div>
        <div>
          <FcAbout className={classes.icon} />
          <h3>About</h3>
        </div>
      </div>
      <p style={{
        margin: "1rem 0"
      }}>Popular topics</p>
      <div className={classes.categoryContainer}>
        <div>
          <FcAbout className={classes.icon} />
          <h3>Fetilizer</h3>
        </div>
        <div>
          <FcAbout className={classes.icon} />
          <h3>Fetilizer</h3>
        </div>
        <div>
          <FcAbout className={classes.icon} />
          <h3>Fetilizer</h3>
        </div>
        <div>
          <FcAbout className={classes.icon} />
          <h3>Fetilizer</h3>
        </div>
        <div>
          <FcAbout className={classes.icon} />
          <h3>Fetilizer</h3>
        </div>
        <div>
          <FcAbout className={classes.icon} />
          <h3>Fetilizer</h3>
        </div>
        <div>
          <FcAbout className={classes.icon} />
          <h3>Fetilizer</h3>
        </div>
      </div>
      <div className={classes.accountsContainer}>
        <p>lorem</p>
        <p>Lorem, ipsum.</p>
        <p>lorem</p>
        <p>Lorem, ip.</p>
        <p>lorem</p>
        <p>Lum.</p>
        <p>lorem</p>
        <p>Lorem, ipsum.</p>
      </div>
    </div>
  )
}

export default Sidebar