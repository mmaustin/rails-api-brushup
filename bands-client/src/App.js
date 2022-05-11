import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { BandsList } from './features/bands/BandsList'
import { AddBandForm } from './features/bands/AddBandForm'
import { AddPlayerForm } from './features/players/AddPlayerForm'
import { SingleBandPage } from './features/bands/SingleBandPage'
import { EditBand } from './features/bands/EditBand'

const App = () => {
    return(
        <Router>
            <Routes>
                
                    <Route 
                        exact path='/'
                        element={<>
                                {/*<AddBandForm/>*/}
                                <BandsList/>
                            </>
                        }
                    />
                    <Route path='/add-band' element={<AddBandForm/>}/>
                    <Route exact path='/add-player' element={<AddPlayerForm/>}/>
                    <Route exact path='/get-band/:bandId' element={<SingleBandPage/>}/>
                    <Route exact path='/update-band/:bandId' element={<EditBand/>}/>
                
            </Routes>
        </Router>
    )
}

export default App