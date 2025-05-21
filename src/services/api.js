import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api-qtxx.onrender.com'
})

export default api
