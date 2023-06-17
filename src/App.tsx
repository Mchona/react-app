import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from "./components/Home";
import Chakraui from './components/Chakraui';
import Hooks from './components/Hooks';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/chakraui'} element={<Chakraui />} />
        <Route path={'/hooks'} element={<Hooks />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
