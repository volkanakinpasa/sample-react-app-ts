import { useEffect, useState } from 'react';

import IItem from '../interfaces/IItem';
import { Items } from '../components/Items';
import useFetch from '../hooks/useFetch';

export default function Listing() {
  const [items, setItems] = useState<IItem[]>();
  const { data, loading, error } = useFetch('/search', {
    page: 1,
    per_page: 3,
  });

  useEffect(() => {
    if (data) setItems(data);
  }, [data]);

  return (
    <>
      {loading && <p>Loading</p>}
      {error && <p>{error}</p>}
      {items && <Items items={items} />}
    </>
  );
}
