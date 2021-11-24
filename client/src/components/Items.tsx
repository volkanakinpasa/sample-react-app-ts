import IItem from '../interfaces/IItem';
import IdValue from '../types/IdValue';
import { Item } from './Item';

interface IItemsProps<T extends IdValue> {
  items: IItem<T>[];
}

export function Items<T extends IdValue>(props: IItemsProps<T>) {
  const { items } = props;

  return (
    <>
      <h1>Items</h1>
      <section>
        {items && items.length > 0 && (
          <ul>
            {items.map((item) => (
              <Item key={item.id} item={item} />
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
