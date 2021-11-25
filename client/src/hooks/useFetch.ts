import { useEffect, useState } from 'react';

import { API } from '../constants';
import axios from 'axios';

function useGetFetch(path: string | null, body: any = null) {
  const [data, setData] = useState<any | null>(null);
  const [error, setError] = useState<any | null>(null);
  const [forceFetch, setForceFetch] = useState<boolean>(false);

  const start = async () => {
    setData(null);
    setError(null);
    const url = `${API.URL}${path}`;

    try {
      const response = await axios.get(url, { params: { ...body } });
      const { data: responseData } = response;
      responseData && setData(responseData);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setForceFetch(false);
    }
  };

  useEffect(() => {
    start();
  }, []);

  useEffect(() => {
    start();
  }, [forceFetch]);

  return { data, error, setForceFetch };
}
export default useGetFetch;
