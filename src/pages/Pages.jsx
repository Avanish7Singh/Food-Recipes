import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine';
import { Route, Routes } from 'react-router-dom';
import Searched from './Searched';
import Recipe from './Recipe';

export default function Pages() {
  return (
    <div>
      <Routes>
            <Route path='/' element={ <Home/> } />
            <Route path='/cuisine/:type' element={ <Cuisine/> } />
            <Route path='/Searched/:Search' element= { <Searched /> } />
            <Route path='/Recipe/:id' element={ <Recipe /> } />
      </Routes>
    </div>
  )
}
