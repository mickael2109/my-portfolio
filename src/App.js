import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PublicRouter from '@/route/PublicRouter';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/*' element={<PublicRouter/>}/>


      </Routes>
        
    </BrowserRouter>

      
 
  );
};

export default App;