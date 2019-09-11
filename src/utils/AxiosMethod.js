import axios from './AxiosHeader'

export const postingDataAPI = async (values,data) => {
	  return await axios().post(values,data).then(response => {
	    return {response : response.status,
	    		data : response.data}
	  }).catch((err) => {
    	return err
    });
}
