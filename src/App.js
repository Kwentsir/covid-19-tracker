import { Route, Routes } from 'react-router-dom';
import Nav from './Components/Navbar';
import Home from './Components/Home';
import DetailPage from './Components/DetailPage';

const App = () => (
  <>
    <Nav />
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/country/:name" element={<DetailPage />} />
    </Routes>
  </>
);

export default App;
