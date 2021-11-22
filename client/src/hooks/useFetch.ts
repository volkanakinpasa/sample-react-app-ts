import { useEffect, useState } from 'react';

import axios from 'axios';

const API_URL = 'http://localhost:3001';

function useFetch(path: string, body: any = null, method: string = 'GET') {
  const [data, setData] = useState<any | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any | null>(null);

  const start = async () => {
    setLoading(true);
    setData(null);
    setError(null);
    const url = `${API_URL}${path}`;

    try {
      setLoading(true);
      const response = await axios.get(url, { params: { ...body } });

      const { data: responseData } = response;

      setTimeout(() => {
        responseData && setData(responseData);
      }, 2000);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    start();
  }, []);

  return { data, loading, error };
}
export default useFetch;
