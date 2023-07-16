import React, { useRef, useState } from 'react';
import { FiUploadCloud } from 'react-icons/fi';

// stylesheet
import classes from './Upload.module.css';

const Upload = () => {
  const [postDetails, setPostDetails] = useState({
    userId: "",
    image: "",
    category: "",
    description: "",
    location: "",
    createdAt: ""
  });
  const fileInputRef = useRef(null);

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  const handleDivClick = () => {
    handleBrowseClick();
  };



  return (
    <div className={classes.uploadContainer}>
      <div className={classes.contentContainer}>
        <div className={classes.headingContainer}>
          <h1 className={classes.heading}>Upload a Post</h1>
          <p className={classes.subHeading}>Post a picture to your account</p>
        </div>
        {/* <p>hellow</p> */}
        <form className={classes.formContainer} onSubmit={() => { console.log("hellow") }}>
          <div className={classes.leftContainer}>
            <div className={classes.inputFileContainer}>
              <div className={classes.iconContainer}>
                <FiUploadCloud className={classes.icon} />
                <p>Upload Image</p>
              </div>
              <div className={classes.descContainer}>
                <p className={classes.subHeading}>png Or jpeg Or jpg</p>
                <p className={classes.subHeading}>upload time upto 3 minitues</p>
                <p className={classes.subHeading}>upto 1MB</p>
              </div>
              <p onClick={handleDivClick} className={classes.btn}>Select File</p>
              <input
                type="file"
                name='image'
                ref={fileInputRef}
                hidden
              />
            </div>
          </div>
          <div className={classes.rightContainer}>
            <p>right container</p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Upload