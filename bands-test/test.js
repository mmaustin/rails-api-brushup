const getBands = () => {
    fetch('http://localhost:3000/bands')
    .then(resp=>resp.json())
    .then(bands => {
        const b = bands.included.map(c => c.attributes.band_id)
        console.log(b)
    })
  
}
getBands()