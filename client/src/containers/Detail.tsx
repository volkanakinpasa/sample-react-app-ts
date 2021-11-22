import { useParams } from 'react-router-dom';

export interface IDetailProps {}

export default function Detail(props: IDetailProps) {
  const { id } = useParams();
  return <section>id:{id}</section>;
}
