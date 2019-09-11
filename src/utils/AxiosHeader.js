import axios from 'axios'

export default function withStoredHeaders() {
  return axios.create({
  	baseURL: 'https://price-rest.herokuapp.com/',
  })
}

