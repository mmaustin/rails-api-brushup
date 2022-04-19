import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createPlayer } from './playersSlice'
import { selectAllBands } from '../bands/bandsSlice'
import { retrieveBands } from '../bands/bandsSlice'

export const AddPlayerForm = () => {

  const dispatch = useDispatch()

  const bands = useSelector(selectAllBands)
  const bandStatus = useSelector(state => state.displayBands.status)

  useEffect(() => {
      if (bandStatus === 'idle'){
      dispatch(retrieveBands())
      }
  }, [bandStatus, dispatch])

  let content

  if (bandStatus === 'succeeded'){
      const newBandsList = bands
      content = newBandsList.map((b) => {
          return <option key={b.id} value={b.id}>
              {b.name}
          </option>
      })
  }

  const [name, setName] = useState('')
  const [instrument, setInstrument] = useState('')
  const [bandId, setBandId] = useState('')
  const [addRequestStatus, setAddRequestStatus] = useState('idle')
  console.log(bandId)

  const onNameChanged = (e) => setName(e.target.value)
  const onInstrumentChanged = (e) => setInstrument(e.target.value)
  const onBandChanged = (e) => setBandId(e.target.value)

  const canSave =
    [name, instrument, bandId].every(Boolean) && addRequestStatus === 'idle'

  const onSavePlayerClicked = async () => {
    if (canSave) {
      try {
        setAddRequestStatus('pending')
        await dispatch(createPlayer({ name, instrument, band_id: bandId })).unwrap()
        setName('')
        setInstrument('')
        setBandId('')
      } catch (err) {
        console.error('Failed to save the post: ', err)
      } finally {
        setAddRequestStatus('idle')
      }
    }
  }

  /*const usersOptions = bands.map((band) => (
    <option key={band.id} value={band.id}>
      {band.name}
    </option>
  ))*/

  return (
    <section>
       {/*} <p>What the What</p>
        <select>
        <option value=""></option>
          {content}
  </select>*/}
      <h2>Add a New Player</h2>
      <form>
        <label htmlFor="playerName">Player Name:</label>
        <input
          type="text"
          id="playerName"
          name="playerName"
          value={name}
          onChange={onNameChanged}
        />
        <label htmlFor="band">Band:</label>
        <select id="band" value={bandId} onChange={onBandChanged}>
          <option value=""></option>
          {content}
        </select>
        <label htmlFor="instrument">Instrument:</label>
        <input
          type="text"
          id="instrument"
          name="instrument"
          value={instrument}
          onChange={onInstrumentChanged}
        />
        <button type="button" onClick={onSavePlayerClicked} disabled={!canSave}>
          Save Post
        </button>
  </form>
    </section>
  )
}