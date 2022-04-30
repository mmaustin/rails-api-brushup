import React from 'react'
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import { BandsList } from './features/bands/BandsList'
import { AddBandForm } from './features/bands/AddBandForm'
import { AddPlayerForm } from './features/players/AddPlayerForm'
import { RetrieveBand } from './features/bands/RetrieveBand'
import { UpdateBand } from './features/bands/UpdateBand'

const App = () => {
    return(
        <Router>
            <Routes>
                
                    <Route 
                        exact path='/'
                        element={<>
                                <AddBandForm/>
                                <BandsList/>
                            </>
                        }
                    />
                    {/*<Route path='/add-band' element={<AddBandForm/>}/>*/}
                    <Route path='/add-player' element={<AddPlayerForm/>}/>
                    <Route path='/get-band' element={<RetrieveBand/>}/>
                    <Route path='/update-band' element={<UpdateBand/>}/>
                
            </Routes>
        </Router>
    )
}

export default App