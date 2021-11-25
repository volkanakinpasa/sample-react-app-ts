import { postItem } from '../adaptors';
import { useState } from 'react';

interface Props {
  onFormSubmit: (data: any) => void;
}

export default function FormItem({ onFormSubmit }: Props) {
  const [inputItem, setInputItem] = useState<{ [key: string]: string }>({});

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.name);

    setInputItem((current) => ({
      ...current,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onFormSubmit(inputItem);
  };

  return (
    <div>
      {JSON.stringify(inputItem, null, 2)}
      <form onSubmit={onSubmit}>
        <div>
          <div>
            Name:
            <input
              name="name"
              id="name"
              type="input"
              placeholder="enter a name"
              onChange={onInputChange}
              required
            />
          </div>

          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
