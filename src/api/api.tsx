import axios from 'axios';

const instance = axios.create({
	baseURL: 'https://api.punkapi.com/v2/'
})

export const beersApi = {
	getBeers (page: number, pageSize: number) {
		return instance.get(`beers?page=${page}&per_page=${pageSize}`).then(response => response.data);
	},

	getBeersSearch (value: string) {
		return instance.get(`beers?beer_name=${value}`).then(response => response.data);
	}
};
