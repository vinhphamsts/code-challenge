import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_END_POINT;
axios.defaults.headers.post['content-type'] = 'application/json';

const LANG_URL = '/languages';
const SUBMISSION_URL = '/submissions';
const METHODS = {
	GET: 'get',
	POST: 'post',
};

const createSimpleRequest = method => url => async data => await axios[method](url, data)
		.then(response => response.data)
		.catch(e => e.response.data);

export const getLanguagesApi = createSimpleRequest(METHODS.GET)(LANG_URL);

export const createSubmissionsApi = createSimpleRequest(METHODS.POST)(SUBMISSION_URL)

export const getASubmissionApi = async token => await axios
	.get(`${SUBMISSION_URL}/${token}`)
	.then(response => response.data)
	.catch(error => error.response.data);