import { useEffect, useState } from 'react';

import { postItem } from '../adaptors';

function usePostFetch(body: any = null) {
  const [postData, setPostData] = useState<any | null>(null);
  // const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<any | null>(null);

  const start = async () => {
    // setLoading(true);
    setPostData(null);
    setError(null);

    try {
      // setLoading(true);

      const { error, data: responseData } = await postItem(body);
      setPostData(responseData);
    } catch (error: any) {
      setError(error.message);
    } finally {
      // setLoading(false);
    }
  };

  useEffect(() => {
    if (!body) return;
    start();
  }, [body]);

  return { postData, error };
}
export default usePostFetch;
