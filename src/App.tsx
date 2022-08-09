/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react'
import React, { useCallback, useEffect, useState } from 'react'
import { StandAlonePage } from './components/StandAlonePage'
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import { HAPage } from './components/HAPage';


export const App = () => {

  return (
    <Router>
    <Routes>
        <Route path='/' element={<StandAlonePage />} />
        <Route path='/ha' element={<HAPage/>} />
    </Routes>
    </Router>
  )
}