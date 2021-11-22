import './App.css';

import { CustomRouter } from './CustomRouter';
import { Head } from './components/Head';

function App() {
  return <CustomRouter head={<Head />} />;
}

export default App;
