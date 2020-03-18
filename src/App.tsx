import React, { useState } from 'react'
import './App.css'
import Map from './components/MapComponent'
import Header from './components/Header'
import { Container, Grid } from '@material-ui/core'

const App = () => {
  const [latitude, setLatitude] = useState(53.073635)
  const [longitude, setLongitude] = useState(8.806422)
  const [zoomLevel, setZoomLevel] = useState(13)
  const [markerDialogOpen, setMarkerDialogOpen] = useState(false)

  return (
    <Container maxWidth='xl'>
      <Grid container direction='column' justify='center' alignItems='center'>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <Map
            lat={latitude}
            lng={longitude}
            zoom={zoomLevel}
            setLat={setLatitude}
            setLng={setLongitude}
            setZoom={setZoomLevel}
            markerDialogOpen={markerDialogOpen}
            setMarkerDialogOpen={setMarkerDialogOpen}
          />
        </Grid>
      </Grid>
    </Container>
  )
}

export default App
