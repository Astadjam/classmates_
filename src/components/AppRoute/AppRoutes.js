import React from 'react';
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';
import { Home } from '../../pages/home';
import { Details } from '../../pages/details';

export class AppRoute extends React.Component {
    render(){
        return <BrowserRouter>
          <header>
              <h1>M2 DFS Students</h1>
              <button><Link to="/">Back to Home</Link></button>
          </header>
          <Routes>
            <Route index element={<Home />} />
            <Route path='/details' element={<Details />} />
          </Routes>
      </BrowserRouter>
    }
}