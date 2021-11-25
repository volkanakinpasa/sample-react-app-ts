import { useEffect, useState } from 'react';

import FormItem from './FormItem';
import IItem from '../interfaces/IItem';
import IdValue from '../types/IdValue';
import { Items } from '../components/Items';
import useGetFetch from '../hooks/useFetch';
import usePostFetch from '../hooks/usePostFetch';

export default function Listing<T extends IdValue>() {
  const [items, setItems] = useState<IItem<T>[]>();
  const [formInputs, setFormInputs] = useState<any>(null);
  const [forceFetch, setForceFetch] = useState<boolean>(false);

  const { data } = useGetFetch(
    '/items',
    {
      page: 1,
      per_page: 100,
    },
    forceFetch
  );

  const { postData } = usePostFetch(formInputs);

  const onFormSubmit = (listItem: any) => {
    setFormInputs(listItem);
  };

  const onDelete = (item: IItem<T>) => {};

  useEffect(() => {
    if (!data) return;
    console.log('data is updated');
    setItems(data);
  }, [data]);

  useEffect(() => {
    if (!postData) return;
    console.log('postdata is updated');
    setForceFetch(true);
  }, [postData]);

  return (
    <>
      <FormItem onFormSubmit={onFormSubmit} />
      {items && <Items items={items} onDelete={onDelete} />}
    </>
  );
}
