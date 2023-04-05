import { useState } from 'react'
import Page from './pages/page';
import { Route, Routes } from 'react-router-dom'
import SinglePage from './pages/singlePage';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Page />} />
        <Route exact path='/pages/:id/:lang' element={<SinglePage />} />
      </Routes>
    </div>
  )
}



export default App
