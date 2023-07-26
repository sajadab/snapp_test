import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';
import {ApiErrorHandler} from './errorHandler';

const initialization = (config: AxiosRequestConfig): AxiosInstance => {
  let axiosInstance: AxiosInstance;
  axiosInstance = axios.create(config);
  axiosInstance.defaults.params={lat:"35.774",long:"51.418",page_size:20}
  ApiErrorHandler(axiosInstance);
  return axiosInstance;
};

export default initialization;
