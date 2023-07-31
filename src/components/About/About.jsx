import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getUser } from '../../actions/UserAction.js'
import { FiMapPin } from 'react-icons/fi';
import { GrConnect } from 'react-icons/gr';
import testImage from '../../assets/test.png';
import Setting from '../Setting/Setting';


// stylesheet
import classes from './About.module.css';

const About = ({ id }) => {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.userReducer.loading);
    const data = useSelector((state) => state.userReducer.userData);

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [followers, setFollowers] = useState(data?.followers.length);
    const [following, setFollowing] = useState(data?.following.length);

    const handleOpenPopup = () => {
        setIsPopupOpen(true);
    }

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    }

    useEffect(() => {
        dispatch(getUser(id));
    }, []);


    if (loading) {
        return (
            <div className={classes.about}>
                <p>loading</p>
            </div>
        )
    }

    return (
        <div className={classes.about}>
            <div className={classes.imageContainer}>
                <img className={classes.image} src={data?.profilePicture || testImage} alt="profile" />
            </div>
            <div className={classes.nameContainer}>
                <p className={classes.name}>{data?.name}</p>
                <p className={classes.farmerType}>{data?.cultivation} farmer</p>
            </div>
            <div className={classes.statContainer}>
                <div className={classes.followersContainer}>
                    <h3>followers</h3>
                    <p>{followers}</p>
                </div>
                <div style={{
                    width: '1.5px',
                    height: '100%',
                    backgroundColor: "#13aa52",
                    borderRadius: "2px"
                }}>
                </div>
                <div className={classes.followingContainer}>
                    <h3>following</h3>
                    <p>{following}</p>
                </div>
                <div style={{
                    width: '1.5px',
                    height: '100%',
                    backgroundColor: "#13aa52",
                    borderRadius: "2px"
                }}></div>
                <div className={classes.creditContainer} onClick={() => console.log(id)}>
                    <h3>Credits</h3>
                    <p>8222</p>
                </div>
            </div>
            <div className={classes.infoContainer}>
                <p className={classes?.name}>About</p>
                <p>{data?.about}</p>
                <p className={classes.addressContainer}>
                    <FiMapPin className={classes?.icon} />
                    <p>{data?.landmark}, {data?.district}, {data?.state}, {data?.postalCode}</p>
                </p>
                <div className={classes.durationContainer}>
                    <GrConnect className={classes.icon} />
                    <p>joined date {data?.createdAt}</p>
                </div>
            </div>

            <div>
                <button className={classes.settingBtn} onClick={handleOpenPopup}>
                    <p>Setting</p>
                </button>
                {isPopupOpen && <Setting onClose={handleClosePopup} />}
            </div>
        </div>
    )
}

export default About