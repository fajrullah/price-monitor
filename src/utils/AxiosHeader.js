import axios from 'axios'

export default function withStoredHeaders() {
  return axios.create({
  	baseURL: 'http://localhost:4000/',
  })
}

