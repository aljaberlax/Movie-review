
import { Route, Routes } from 'react-router-dom';

import Banner from './Components/Banner/Banner';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import NotFound from './Components/Notfound/NotFound';


function App() {
  return (
    <div className="App">
     <Header></Header>
    <Routes>
      <Route path='/' element={<Banner></Banner>}></Route>
      <Route path='/home' element={<Banner></Banner>}></Route>
      <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
      
    </Routes>
    </div>
  );
}

export default App;
