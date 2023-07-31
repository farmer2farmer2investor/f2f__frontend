import * as UserApi from '../api/UserRequest.js';

// get information about an user
export const getUser = (userId) =>  async (dispatch) => {
    dispatch({ type: "USER_RETRIEVE_START" });

    try {
        const { data } = await UserApi.getuser(userId);
        dispatch({ type: "USER_RETRIEVE_SUCCESS", data: data });
    } catch (error) {
        console.log(error);
        dispatch({ type: "USER_RETRIEVE_FAIL" })
    }
}