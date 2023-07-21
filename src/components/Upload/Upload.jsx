import React, { useRef, useState } from 'react';
import { FiUploadCloud } from 'react-icons/fi';

// stylesheet
import classes from './Upload.module.css';

const Upload = () => {
  const initialState = {
    userId: "",
    image: "",
    description: "",
    location: "",
  }
  const [postDetails, setPostDetails] = useState(initialState);
  const fileInputRef = useRef(null);

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    console.log(base64);
    setPostDetails({ ...postDetails, image: base64 })
  }

  const handleBrowseClick = () => {
    fileInputRef.current.click();
  };

  const handleDivClick = () => {
    handleBrowseClick();
  };

  const handleChange = (e) => {
    setPostDetails({ ...postDetails, [e.target.name]: e.target.value });
    // console.log(e);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("postDetails", postDetails);
  }



  return (
    <div className={classes.uploadContainer}>
      <div className={classes.contentContainer}>
        <div className={classes.headingContainer}>
          <h1 className={classes.heading}>Upload a Post</h1>
          <p className={classes.subHeading}>Post a picture to your account</p>
        </div>
        {/* <p>hellow</p> */}
        <form className={classes.formContainer} onSubmit={handleSubmit}>
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
                onChange={handleFileUpload}
                autoComplete='on'
                hidden
              />
            </div>
          </div>
          <div className={classes.rightContainer}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '.5rem'
            }}>
              <p className={classes.subHeading}>category</p>
              <select
                name="category"
                value={postDetails.category}
                placeholder='category'
                onChange={handleChange}
                autoComplete='on'
                className={classes.categoryInput}
              >
                <option value="dairy">dairy</option>
                <option value="scheme">scheme</option>
                <option value="corps">corps</option>
              </select>
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '.5rem'
            }}>
              <p className={classes.subHeading}>location</p>
              <input
                required
                name='location'
                type="text"
                value={postDetails.location}
                placeholder='location'
                onChange={handleChange}
                autoComplete='on'
                className={classes.textInput}
              />
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '.5rem'
            }}>
              <p className={classes.subHeading}>Caption</p>
              <input
                required
                name='description'
                type="text"
                placeholder='caption'
                className={classes.textInput}
                value={postDetails.description}
                onChange={handleChange}
                autoComplete='on'
              />
              <div className={classes.btnContainer}>
                <button className={classes.discardBtn}>discard</button>
                <button className={classes.postBtn} type='submit'>post</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Upload;


// function to convert image to 64 bit format
function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result)
    };
    fileReader.onerror = (error) => {
      reject(error)
    }
  })
};