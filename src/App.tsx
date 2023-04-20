import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Components/Home';
import Employeepage from './Components/Employeepage';
import QEmployee from './Components/QEmployee';
import Navlink from './Components/NavLink';



const queryClient = new QueryClient()

function App() {
  return (
    <>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <Navlink/>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Employeepage' element={<Employeepage/>}/>
      <Route path='/QEmployee' element={<QEmployee/>}/>

    </Routes>
    </BrowserRouter>
    <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  
  </>
  );
}

export default App;
