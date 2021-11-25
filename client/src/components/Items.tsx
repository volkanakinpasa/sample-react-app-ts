import IItem from '../interfaces/IItem';
import IdValue from '../types/IdValue';
import { Item } from './Item';

interface IItemsProps<T extends IdValue> {
  items: IItem<T>[];
  onDelete: (item: IItem<T>) => void;
}

export function Items<T extends IdValue>(props: IItemsProps<T>) {
  const { items, onDelete } = props;

  return (
    <>
      <h1>Items</h1>
      <section>
        {items && items.length > 0 && (
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <Item item={item} /> -
                <button onClick={() => onDelete(item)}>Delete</button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
}
