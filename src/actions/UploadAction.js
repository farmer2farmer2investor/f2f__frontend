import * as UploadApi from '../api/UploadRequest.js';

export const uploadPost = (formData, navigate) => async (dispatch) => {
    dispatch({ type: "UPLOAD_START" });

    try {
        await UploadApi.createPost(formData);
        dispatch({ type: "UPLOAD_SUCCESS" });
        navigate("../home", { replace: true });
    } catch (error) {
        console.log(error);
        dispatch({ type: "UPLOAD_FAIL" });
    }
};