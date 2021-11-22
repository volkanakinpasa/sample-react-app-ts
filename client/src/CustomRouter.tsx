import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import Detail from './containers/Detail';
import Home from './containers/Home';
import Listing from './containers/Listing';

interface ICustomRouterProps {
  head: JSX.Element;
}

export function CustomRouter(props: ICustomRouterProps) {
  const { head } = props;
  return (
    <>
      <main>
        <Router>
          {head}
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/listing" element={<Listing />}></Route>
            <Route path="/listing/:id" element={<Detail />}></Route>
          </Routes>
        </Router>
      </main>
    </>
  );
}
