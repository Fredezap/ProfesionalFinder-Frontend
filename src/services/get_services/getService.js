import { apiInstance  } from "../api_instance/apiInstance";

const getService = async (url) => {

  try {
    const response = await apiInstance.get(url);
    if (response.status >= 200 && response.status < 300) {
      const data = response.data ? response.data : null
      return ({ success: true, data: data });
    } else {
      const errors = response?.data?.errors ? response.data.errors : []
      return ({ success: false, errors: errors });
    }
  } catch (error) {
    const errors = error?.response?.data?.errors ? error.response.data.errors : []
        return ({ success: false, errors: errors });
  }
};

export default getService;