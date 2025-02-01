import axios, { AxiosResponse } from "axios";
import { BaseURL } from "pokenode-ts";

export default class API {
  static instance = axios.create({ baseURL: BaseURL.REST });

  static get<T = any, R = AxiosResponse<T>>(path: string): Promise<R> {
    return this.instance.get(path);
  }
}
