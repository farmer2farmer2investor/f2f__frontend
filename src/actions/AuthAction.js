import * as AuthApi from '../api/AuthRequests';

// registering a farmer
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

// log in a farmer
export const logIn = (formData, navigate) => async (dispatch) => {
    dispatch({ type: "AUTH_START" });

    try {
        const { data } = await AuthApi.logIn(formData);
        dispatch({ type: "AUTH_SUCCESS", data: data });
        navigate("../home", { replace: true });
    } catch (error) {
        console.log(error);
        dispatch({ type: "AUTH_FAIL" })
    }
};

// log out the farmer
export const logOut = () => async (dispatch) => {
    dispatch({ type: "LOG_OUT" });
}