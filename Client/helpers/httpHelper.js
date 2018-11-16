import { get, post } from 'jquery-ajax';

const doPostRequest = (url, data) => {
  
};

const doGetRequest = (url, data) => {
  return get(url);
  // return Promise((res, rej) => {
  //   get(url).then();
  // });
};

export {
  doPostRequest,
  doGetRequest
};
