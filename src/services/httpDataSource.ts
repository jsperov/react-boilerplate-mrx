import axios, { AxiosRequestConfig } from 'axios';

interface IHttpDataSource{
  get(url: string): Promise<any>;
  post(url: string, data: any): Promise<any>;
  put(url: string, data: any): Promise<any>;
  delete(url: string, data?: any): Promise<any>;
}

export class HttpDataSource implements IHttpDataSource {
  get(url: string) {
    return this.makeRequest({ method: 'GET', url });
  }

  post(url: string, data: any) {
    return this.makeRequest({ method: 'POST', url, data })
  }

  put(url: string, data: any) {
    return this.makeRequest({ method: 'PUT', url, data })
  }

  delete(url: string, data?: any) {
    return this.makeRequest({ method: 'DELETE', url, data })
  }

  makeRequest(config: AxiosRequestConfig) {
    return axios.request(config)
      .then(({ data }: any) => data);
  }
}