import './App.css';
import { Routes,BrowserRouter,Route } from 'react-router-dom';
import Home from '../Pages/Homepage';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>

        <Route
        path='/'
        element={<Home/>}
        />

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
