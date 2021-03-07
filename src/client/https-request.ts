import axios, {AxiosPromise} from 'axios';

export const $app__api = () => ({
  get(url: string, headers?: any): AxiosPromise<any> {
    return axios({method: 'get', url, headers});
  },

  post(url: string, data: any, headers?: any): AxiosPromise<any> {
    return axios({method: 'post', url, data, headers});
  },

  delete(url: string, id: string, headers?: any): AxiosPromise<any> {
    return axios({method: 'delete', url: `${url}${id}`, headers});
  },
});
