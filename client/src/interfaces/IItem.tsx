import IdValue from '../types/IdValue';

export default interface IItem<T extends IdValue> {
  id: T;
  name: string;
}
