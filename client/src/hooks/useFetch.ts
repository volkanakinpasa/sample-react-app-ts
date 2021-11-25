import { useEffect, useState } from 'react';

import { API } from '../constants';
import axios from 'axios';

function useGetFetch(
  path: string | null,
  body: any = null,
  forceFetch: boolean = false
) {
  const [data, setData] = useState<any | null>(null);
  // const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any | null>(null);

  const start = async () => {
    // setLoading(true);
    setData(null);
    setError(null);
    const url = `${API.URL}${path}`;

    try {
      // setLoading(true);

      const response = await axios.get(url, { params: { ...body } });

      const { data: responseData } = response;

      responseData && setData(responseData);
    } catch (error: any) {
      setError(error.message);
    } finally {
      // setLoading(false);
    }
  };

  useEffect(() => {
    start();
  }, []);

  useEffect(() => {
    console.log({ forceFetch });

    start();
  }, [forceFetch]);

  return { data, error };
}
export default useGetFetch;
