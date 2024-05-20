import postBackendRequest from "../../globalRequests/postBackendRequest";

const createUser = async (api_url) => {

    let message;
    let data;

    const result = await postBackendRequest(api_url)

    if (result.success) {
        message = { type: "success-message", content: "User created successfully"}
        data = result.response.data
        return ({ message, data })
    }

    const error = result.response.data.message ? result.response.data.message : '';
    const content = "An error occurred while creating user. " + error; 
    message = { type: "error-message", content: content }
    return ({ message, data })
};

export default createUser;