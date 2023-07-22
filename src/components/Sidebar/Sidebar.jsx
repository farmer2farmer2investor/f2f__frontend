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
          <TbMilk className={classes.icon} />
          <p>Dairy</p>
        </div>
        <div>
          <PiNotebookThin className={classes.icon} />
          <p>Education</p>
        </div>
        <div>
          <GiFishCorpse className={classes.icon} />
          <p>Corps</p>
        </div>
        <div>
          <HiOutlineBuildingLibrary className={classes.icon} />
          <p>Scheme</p>
        </div>
        <div>
          <TbPlant className={classes.icon} />
          <p>Mixed Farming</p>
        </div>
        <div>
          <BsGlobe2 className={classes.icon} />
          <p>Technology</p>
        </div>
        <div>
          <TbToolsKitchen2Off className={classes.icon} />
          <p>Tools</p>
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