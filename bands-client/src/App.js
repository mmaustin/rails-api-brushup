import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Admins } from './features/admin/Admins'
import { BandsList } from './features/bands/BandsList'
import { AddBandForm } from './features/bands/AddBandForm'
import { AddPlayerForm } from './features/players/AddPlayerForm'
import { SingleBandPage } from './features/bands/SingleBandPage'
import { EditBand } from './features/bands/EditBand'
import { CheckingState } from './features/bands/CheckState'
import { Navbar } from './app/Navbar'

const App = () => {
    return(
        <Router>
            <Navbar/>
                <Routes>
                    <Route exact path='/admin' element={<Admins/>} />
                    <Route exact path='/band-list' element={<> {/*<AddBandForm/>*/} <BandsList/> </>}/>
                    <Route exact path='/add-band' element={<AddBandForm/>}/>
                    <Route exact path='/add-player' element={<AddPlayerForm/>}/>
                    <Route exact path='/get-band/:bandId' element={<SingleBandPage/>}/>
                    <Route exact path='/update-band/:bandId' element={<EditBand/>}/>
                    <Route exact path='/checking' element={<CheckingState/>}/>
                </Routes>
        </Router>
    )
}

export default App