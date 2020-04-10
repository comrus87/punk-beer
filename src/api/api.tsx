import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://api.punkapi.com/v2/',
	withCredentials: true
})

export const beersApi = {
	getBeers (page: number, pageSize: number) {
		return instance.get(`beers?page=${page}&per_page=${pageSize}`).then(response => response.data);
	}
};
