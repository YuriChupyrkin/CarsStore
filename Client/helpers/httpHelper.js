import { get, ajax, post } from 'jquery-ajax';

const doPostRequest = (url, data) => {
  
};

const doPutRequset = (url, data) => {
  return ajax(url, {
    method: 'PUT',
    data: data,
  });
}

const doGetRequest = (url, data) => {
  return get(url);
};

export {
  doPostRequest,
  doPutRequset,
  doGetRequest
};
