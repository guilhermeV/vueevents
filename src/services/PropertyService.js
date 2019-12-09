import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:9000/api/moov',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getAllProperties() {
    return apiClient.post('/property/all')
  },
  getFilteredProperties(references) {
    return apiClient.post('/property/filter', references)
  }
}
