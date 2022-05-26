import axios from 'axios'

const apiUrl = process.env.REACT_APP_API_URL

const getProducts = async () => {
	return axios.get(`${apiUrl}/products`)
}

const api = { getProducts }
export default api