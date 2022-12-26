import axios from 'axios';
import { SUBMISSIONS_TYPE } from '../constants/http.js';

const instanceAxios = axios.create({
	baseURL: import.meta.env.VITE_END_POINT,
	timeout: 1000,
	headers: {
		'Content-Type': 'application/json',
	},
});

export const createRequest = method => (url, type) => async data => {
	let reqUrl;
	switch (type) {
		case SUBMISSIONS_TYPE.SINGLE:
			reqUrl = `${url}/${data}`;
			break;
		case SUBMISSIONS_TYPE.BATCH:
			reqUrl = `${url}/?tokens=${data}`
			break;
		default:
			reqUrl = url;
	}

	return await instanceAxios[method](reqUrl, data)
		.then(response => response.data)
		.catch(e => e.response.data);
}

export default instanceAxios;
