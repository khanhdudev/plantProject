import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/product' element={<ProductPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </>
  );
}

export default App;
