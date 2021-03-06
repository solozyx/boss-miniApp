import request from '../utils/request.js';

export function addCompany(data) {
  return request('/mini-api/company/add-company', data, 'post')
}

export function addJob(data) {
  return request('/mini-api/job/add-job', data, 'post')
}

export function addSearchHistory(data) {
  return request('/mini-api/user/history-search-add', data, 'post')
}
