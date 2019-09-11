import axios from './AxiosHeader'

export const postingDataAPI = async (values,data) => {
	  return await axios().post(values,data).then(response => {
	    return {response : response.status,
	    		data : response.data}
	  }).catch((err) => {
    	return err
    });
}

export const fetchingDataAPI = (values) => {
	  return axios().get(values).then(response => {
	    return response.data
	  })
}

export const putDataAPI = async (values,data) => {
	  return await axios().put(values,data).then(response => {
	    return {response : response.status}
	  }).catch((err) => {
    	return err
    });
}
