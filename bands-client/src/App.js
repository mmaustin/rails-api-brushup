import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { BandsList } from './features/bands/BandsList'
import { AddBandForm } from './features/bands/AddBandForm'
import { AddPlayerForm } from './features/players/AddPlayerForm'


const App = () => {
    return(
        <Router>
            <Routes>
                <Route exact path='/' element={<BandsList/>}/>
                <Route path='/add-band' element={<AddBandForm/>}/>
                <Route path='/add-player' element={<AddPlayerForm/>}/>
            </Routes>
        </Router>
    )
}

export default App