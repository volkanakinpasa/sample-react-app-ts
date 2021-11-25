import { useEffect, useState } from 'react';

import { postItem } from '../adaptors';

function usePostFetch(body: any = null) {
  const [postData, setPostData] = useState<any | null>(null);
  const [error, setError] = useState<any | null>(null);

  const start = async () => {
    setPostData(null);
    setError(null);

    try {
      const { error, data: responseData } = await postItem(body);
      setPostData(responseData);
    } catch (error: any) {
      setError(error.message);
    } finally {
    }
  };

  useEffect(() => {
    if (!body) return;
    start();
  }, [body]);

  return { postData, error };
}
export default usePostFetch;
