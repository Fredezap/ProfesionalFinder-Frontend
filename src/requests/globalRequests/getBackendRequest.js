import axios from "axios";

const getBackendRequest = async (api_url) => {

    let response;

    try {
      const getResponse = await axios.get(api_url);

      // TODO: Verify if this is the correct way to check a successfull response
      // TODO: or better to check if response status is between 200 & 300?
      // TODO: or both?
      if (getResponse.statusText === 'OK') {
        response = { success: true, response: getResponse };
        return response
      }

      response = { success: false, response: getResponse };
      return response

    } catch (error) {
      response = { success: false, response: error };
      return (response)
    }
};

export default getBackendRequest;