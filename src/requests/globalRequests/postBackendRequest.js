import axios from "axios";

const postBackendRequest = async (api_url, ...params) => {

    let response;

    try {
      const postResponse = await axios.post(api_url, ...params);

      // TODO: Verify if this is the correct way to check a successfull response
      // TODO: or better to check if response status is between 200 & 300?
      // TODO: or both?
      if (postResponse.statusText === 'OK') {
        response = { success: true, response: postResponse };
        return response
      }

      response = { success: false, response: postResponse };
      return response

    } catch (error) {
      console.log("error", error)
      response = { success: false, response: error };
      return (response)
    }
};

export default postBackendRequest;