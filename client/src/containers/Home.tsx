import style from '../home.module.css';
import { useState } from 'react';

export default function Home() {
  const [summed, setSummed] = useState<number>();
  const sum = () => {
    import('./sum').then((math) => {
      setSummed(math.sum(16, 26));
    });
  };
  return (
    <div>
      <h1 className={style.homeH1}>Home page</h1>
      <div>
        <section>
          <div>MATH SECTION</div>
          <p>Code splitting - Dynamic Import once the button gets clicked </p>
          <div>
            <dl>
              <dt>
                <button onClick={sum}>Import - sum</button>
              </dt>
              <dd>{summed}</dd>
            </dl>
          </div>
        </section>
      </div>
    </div>
  );
}
