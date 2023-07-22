import React, { useState } from 'react';
import { GrConnect } from 'react-icons/gr';
import testImage from '../../assets/test.png';


// stylesheet
import classes from './About.module.css';
import Setting from '../Setting/Setting';

const About = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleOpenPopup = () => {
        setIsPopupOpen(true);
    }

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    }
    return (
        <div className={classes.about}>
            <div className={classes.imageContainer}>
                <img className={classes.image} src={testImage} alt="profile" />
            </div>
            <div className={classes.nameContainer}>
                <p className={classes.name}>Laditya Gogoi</p>
                <p className={classes.farmerType}>dairy farmer</p>
            </div>
            <div className={classes.statContainer}>
                <div className={classes.followersContainer}>
                    <h3>followers</h3>
                    <p>965</p>
                </div>
                <div style={{
                    width: '1.5px',
                    height: '100%',
                    backgroundColor: "#13aa52",
                    borderRadius: "px"
                }}>
                </div>
                <div className={classes.followingContainer}>
                    <h3>following</h3>
                    <p>325</p>
                </div>
                <div style={{
                    width: '1.5px',
                    height: '100%',
                    backgroundColor: "#13aa52",
                    borderRadius: "2px"
                }}></div>
                <div className={classes.creditContainer}>
                    <h3>Credits</h3>
                    <p>8222</p>
                </div>
            </div>
            <div className={classes.infoContainer}>
                <p className={classes.name}>About</p>
                <p>Hey there! 🐄 I'm John, a passionate dairy farmer dedicated to nurturing happy and healthy cows. 🥛 Join me on this farm life journey as we produce the freshest milk and delicious dairy products straight from our farm to your table. #DairyFarmer #FarmLife #MilkTheMoments</p>
                <div className={classes.durationContainer}>
                    <GrConnect className={classes.icon} />
                    <p>joined 6 months ago</p>
                </div>
            </div>
            <button className={classes.settingBtn} onClick={handleOpenPopup}>
                <p>Setting</p>
            </button>
            { isPopupOpen && <Setting onClose={handleClosePopup} /> }
        </div>
    )
}

export default About