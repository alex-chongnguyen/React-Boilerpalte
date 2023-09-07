import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

import { API_URL, ROUTER } from '@/config';
import { STATUS_CODE } from '@/constants';
import { storage } from '@/utils';

export class HttpClient {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({ baseURL });
    this.setupInterceptors();
  }

  public async get<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.axiosInstance.get<T>(url, config);
  }

  public async post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    return this.axiosInstance.post<T>(url, data, config);
  }

  public async put<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig,
  ): Promise<AxiosResponse<T>> {
    return this.axiosInstance.put<T>(url, data, config);
  }

  public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    return this.axiosInstance.delete<T>(url, config);
  }

  private setupInterceptors() {
    this.axiosInstance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
      const token = storage.getToken();
      config.headers = config.headers || {};
      if (token) {
        config.headers['Auth-Token'] = `Bearer ${token}`;
      }
      config.headers.Accept = 'application/json';
      return config;
    });

    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => response,
      (error) => {
        if (error?.response?.status === STATUS_CODE.unauthorized) {
          storage.clearToken();
          window.location.replace(ROUTER.authentication.login);
          return;
        }

        return Promise.reject(error);
      },
    );
  }
}

export const httpClient = Object.freeze(new HttpClient(API_URL));
