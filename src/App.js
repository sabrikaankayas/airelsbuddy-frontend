import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Time from './components/Time';

export const URL = process.env.REACT_APP_SERVER_URL


function App() {
  return (
    <div className="app">
          <Time/>
      <ToastContainer />
    </div>
  );
}

export default App;
