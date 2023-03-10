import { createRequest } from './configurations';
import { URLS, HTTP_METHODS, SUBMISSIONS_TYPE } from '../constants/http.js';

export const getLanguagesApi = createRequest(HTTP_METHODS.GET)(URLS.LANGUAGES);
export const createSubmissionApi = createRequest(HTTP_METHODS.POST)(URLS.SUBMISSIONS);
export const getASubmissionApi = createRequest(HTTP_METHODS.GET)(URLS.SUBMISSIONS, SUBMISSIONS_TYPE.SINGLE);
export const createBatchSubmissionsApi = createRequest(HTTP_METHODS.POST)(URLS.BATCH_SUBMISSIONS);
export const getBatchSubmissionsApi = createRequest(HTTP_METHODS.GET)(URLS.BATCH_SUBMISSIONS, SUBMISSIONS_TYPE.BATCH);
