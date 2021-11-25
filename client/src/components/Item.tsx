import IItem from '../interfaces/IItem';
import IdValue from '../types/IdValue';
import { Link } from 'react-router-dom';

interface IItemProps<T extends IdValue> {
  item: IItem<T>;
}

export function Item<T extends IdValue>(props: IItemProps<T>) {
  const { item } = props;

  return (
    <Link to={item.id.toString()}>
      {item.id} - {item.name}
    </Link>
  );
}
