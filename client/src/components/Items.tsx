import IItem from '../interfaces/IItem';
import { Item } from './Item';

interface IItemsProps {
  items: IItem[];
}

export function Items(props: IItemsProps) {
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
