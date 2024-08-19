import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export interface ApiResponseType<T> {
  status: 'success' | 'error' | 'pending'
  data: T | null
  error: string | null;
}

class ApiService {
  private apiClient: AxiosInstance;

  constructor() {
    this.apiClient = axios.create({
      baseURL: process.env.NEXT_PUBLIC_SERVER_URL + '/api',
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }

  public async get<T>(path: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.apiClient.get<T>(path, config);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to GET data: ${error}`);
    }
  }
  
  public async post<T>(path: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.apiClient.post<T>(path, data, config);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to POST data: ${error}`);
    }
  }

  public async put<T>(path: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.apiClient.put<T>(path, data, config);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to PUT data: ${error}`);
    }
  }

  public async patch<T>(path: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.apiClient.patch<T>(path, data, config);
      return response.data;
    } catch (error) {
      throw new Error(`Failed to PATCH data: ${error}`);
    }
  }
}

export default ApiService;
