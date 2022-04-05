
import { Route, Routes } from 'react-router-dom';
import About from './Components/About/About';

import Banner from './Components/Banner/Banner';
import Blogs from './Components/Blogs/Blogs';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import NoFound from './Components/notFound/NoFound';
import Reviews from './Components/Reviews/Reviews';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Banner></Banner>}></Route>
        <Route path='/home' element={<Banner></Banner>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NoFound></NoFound>}> </Route>
      </Routes>
    </div>
  );
}

export default App;
