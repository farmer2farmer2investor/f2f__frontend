import * as AuthApi from '../api/AuthRequests';

export const register = (formData, navigate) => async (dispatch) => {
    dispatch({ type: "AUTH_START" });

    try {
        const { data } = await AuthApi.register(formData);
        dispatch({ type: "AUTH_SUCCESS", data: data });
        navigate("../home", { replace: true });
    } catch (error) {
        console.log(error);
        dispatch({ type: "AUTH_FAIL"});
    }
};