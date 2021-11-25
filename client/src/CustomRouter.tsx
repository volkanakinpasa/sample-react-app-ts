import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import { CustomErrorBoundary } from './CustomErrorBoundary';
import Listing from './containers/Listing';

const Detail = lazy(() => import('./containers/Detail'));
const Home = lazy(() => import('./containers/Home'));

interface ICustomRouterProps {
  head: JSX.Element;
}

export function CustomRouter(props: ICustomRouterProps) {
  const { head } = props;
  const loadingStyle = {
    margin: 'auto',
    width: '100%',
    height: '100vh',
    backgroundColor: 'gray',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  return (
    <>
      <CustomErrorBoundary>
        <Suspense fallback={<div style={loadingStyle}>Loading...</div>}>
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
        </Suspense>
      </CustomErrorBoundary>
    </>
  );
}
