import * as PostApi from '../api/PostRequest.js';

// geting a specific post details

export const getpost = (id) => async (dispatch) => {
    dispatch({ type: "RETRIEVE_START"});

    try {
        const { data } = await PostApi.getPost(id);

        dispatch({ type: "RETRIEVE_SUCCESS", data: data });
    } catch (error) {
        console.log(error);
        dispatch({ type: "RETRIEVE_FAIL"});
    }
};

export const gettimelineposts = (id) => async (dispatch) => {
    dispatch({ type: "TIMELINE_START"});

    try {
        const { data } = await PostApi.getTimelinePosts(id);
        dispatch({ type: "TIMELINE_SUCCESS", data: data });
    } catch (error) {
        dispatch({ type: "TIMELINE_FAIL"});
    }
};