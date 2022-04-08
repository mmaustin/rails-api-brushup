const getBands = () => {
    fetch('http://localhost:3000/bands')
    .then(resp=>resp.json())
    .then(bands => console.log(bands.data[0].id))
}
getBands()