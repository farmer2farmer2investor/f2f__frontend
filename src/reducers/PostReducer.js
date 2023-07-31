// post

const postReducer = (state = { postData: null, postsData: null, userPosts: null, loading: false, error: false, uploading: false }, action) => {
    switch (action.type) {
        case "UPLOAD_START":
            return { ...state, error: false, uploading: true };
        case "UPLOAD_SUCCESS":
            return { ...state, uploading: false, error: false };
        case "UPLOAD_FAIL":
            return { ...state, uploading: false, error: true };
        case "RETRIEVE_START":
            return { ...state, error: false, loading: true };
        case "RETRIEVE_SUCCESS":
            return { ...state, postData: action.data, loading: false, error: false }
        case "RETRIEVE_FAIL":
            return { ...state, loading: false, error: true };
        case "TIMELINE_START":
            return { ...state, loading: true, error: false };
        case "TIMELINE_SUCCESS":
            return { ...state, postsData: action.data, loading: false, error: false };
        case "TIMELINE_FAIL":
            return { ...state, loading: false, error: false };
        case "POSTS_START":
            return { ...state, loading: true, error: false };
        case "POSTS_SUCCESS":
            return { ...state, userPosts: action.data, loading: false, error: false };
        case "POSTS_FAIL":
            return { ...state, loading: false, error: false };
        default:
            return state;
    }
}

export default postReducer;