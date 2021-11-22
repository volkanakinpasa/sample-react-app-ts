import { IItemProps } from '../interfaces/IItemProps';
import { Link } from 'react-router-dom';

export function Item(props: IItemProps) {
  const { item } = props;

  return (
    <li>
      <Link to={item.id.toString()}>{item.name}</Link>
    </li>
  );
}
