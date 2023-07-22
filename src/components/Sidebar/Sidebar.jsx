import React from 'react'
import { FiHome } from 'react-icons/fi';
import { BsNewspaper } from 'react-icons/bs';
import { FcAbout } from 'react-icons/fc';
import { TbMilk } from 'react-icons/tb';
import { PiNotebookThin } from 'react-icons/pi';
import { GiFishCorpse } from 'react-icons/gi';
import { HiOutlineBuildingLibrary } from 'react-icons/hi2';
import { TbPlant } from 'react-icons/tb';
import { BsGlobe2 } from 'react-icons/bs';
import { TbToolsKitchen2Off } from 'react-icons/tb';

// stylesheet
import classes from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={classes.sidebar}>
      <div className={classes.menuContainer}>
        <div>
          <FiHome className={classes.icon} />
          <h4>Home</h4>
        </div>
        <div>
          <BsNewspaper className={classes.icon} />
          <h4>News</h4>
        </div>
        <div>
          <FcAbout className={classes.icon} />
          <h4>About</h4>
        </div>
      </div>
      <div style={{
        width: '100%',
        height: '1.5px',
        backgroundColor: '#13aa52'
      }}>

      </div>
      <p style={{
        margin: "1rem 0"
      }}>Popular topics</p>
      <div className={classes.categoryContainer}>
        <div>
          <TbMilk className={classes.icon} />
          <h5>Dairy</h5>
        </div>
        <div>
          <PiNotebookThin className={classes.icon} />
          <h5>Education</h5>
        </div>
        <div>
          <GiFishCorpse className={classes.icon} />
          <h5>Corps</h5>
        </div>
        <div>
          <HiOutlineBuildingLibrary className={classes.icon} />
          <h5>Scheme</h5>
        </div>
        <div>
          <TbPlant className={classes.icon} />
          <h5>Mixed Farming</h5>
        </div>
        <div>
          <BsGlobe2 className={classes.icon} />
          <h5>Technology</h5>
        </div>
        <div>
          <TbToolsKitchen2Off className={classes.icon} />
          <h5>Tools</h5>
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