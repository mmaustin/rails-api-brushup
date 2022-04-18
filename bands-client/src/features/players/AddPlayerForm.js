import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createPlayer } from './playersSlice'

export const AddPlayerForm = () => {
  const [name, setName] = useState('')
  const [instrument, setInstrument] = useState('')
  const [bandId, setBandId] = useState('')
  const [addRequestStatus, setAddRequestStatus] = useState('idle')

  const dispatch = useDispatch()
  const bands = useSelector((state) => state.bands)
    console.log(bands)

  const onNameChanged = (e) => setName(e.target.value)
  const onInstrumentChanged = (e) => setInstrument(e.target.value)
  const onBandChanged = (e) => setBandId(e.target.value)

  const canSave =
    [name, instrument, bandId].every(Boolean) && addRequestStatus === 'idle'

  const onSavePlayerClicked = async () => {
    if (canSave) {
      try {
        setAddRequestStatus('pending')
        await dispatch(createPlayer({ name, instrument, band: bandId })).unwrap()
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

  const usersOptions = bands.map((band) => (
    <option key={band.id} value={band.id}>
      {band.name}
    </option>
  ))

  return (
    <section>
        <p>What the What</p>
      {/*<h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          placeholder="What's on your mind?"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postAuthor">Author:</label>
        <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
          <option value=""></option>
          {usersOptions}
        </select>
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
          Save Post
        </button>
  </form>*/}
    </section>
  )
}