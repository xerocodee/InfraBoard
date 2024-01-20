import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

axios.defaults.headers.common.Accept = 'application/json';
axios.defaults.timeout = 12000;

interface HttpHeadersConfig extends AxiosRequestConfig {
  headers?: {
    Authorization?: string;
  };
}

const getHttpHeaders = (isAuthenticated = false): HttpHeadersConfig => {
  if (isAuthenticated) {
    return {
      headers: {
        Authorization: 'Bearer YOUR_TOKEN',
      },
    };
  }

  return {};
};

const get = (path: string): Promise<AxiosResponse> =>
  axios.get(path, getHttpHeaders());

const del = (path: string): Promise<AxiosResponse> =>
  axios.delete(path, getHttpHeaders());

const post = <T>(path: string, data: T): Promise<AxiosResponse> =>
  axios.post(path, data, getHttpHeaders(true));

const put = <T>(path: string, data: T): Promise<AxiosResponse> =>
  axios.put(path, data, getHttpHeaders(true));

const patch = <T>(path: string, data: T): Promise<AxiosResponse> =>
  axios.patch(path, data, getHttpHeaders(true));

const RestClient = {
  get,
  del,
  post,
  put,
  patch,
};

export default RestClient;
