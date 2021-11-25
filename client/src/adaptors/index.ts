import axios, { AxiosResponse } from 'axios';

import { API } from '../constants';
import IdValue from '../types/IdValue';

const fetchData = async ({
  url,
  method,
  params,
  body,
}: {
  url: string;
  method: 'GET' | 'POST' | 'DELETE';
  params?: {};
  body?: {};
}) => {
  try {
    let response: AxiosResponse<any, any> | undefined = undefined;
    if (method === 'GET') {
      console.log('method is get', url);

      response = await axios.get(url, { params: { ...params } });
    } else if (method === 'POST') {
      response = await axios.post(url, body);
    } else if (method === 'DELETE') {
      response = await axios.delete(url);
    }
    return { data: response?.data };
  } catch (error: any) {
    return { error: error.message };
  }
};

const postItem = async (body: any) => {
  const url = `${API.URL}/items`;
  // const response = await axios.post(url, body);
  return fetchData({ url, method: 'POST', body });
};

const getItem = async (id: number) => {
  const url = `${API.URL}/items/${id}`;
  // const response = await axios.post(url);
  // return response.data;
  return fetchData({ url, method: 'GET' });
};

const getItems = async (params: { page: number; per_page: number }) => {
  const url = `${API.URL}/items`;
  // const response = await axios.get(API.URL, { params });
  // return { data: response.data };

  return fetchData({ url, method: 'GET', params });
};

const deleteItem = async <T extends IdValue>(id: T) => {
  const url = `${API.URL}/items/${id}`;
  // const response = await axios.get(API.URL, { params });
  // return { data: response.data };

  return fetchData({ url, method: 'DELETE' });
};

export { getItem, getItems, postItem, deleteItem };
