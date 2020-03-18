import React, {useState} from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import TreasureDialog from './TreasureDialog'

interface MapComponentProps {
  lat: number
  lng: number
  zoom: number
  setLat: Function
  setLng: Function
  setZoom: Function
  markerDialogOpen: boolean
  setMarkerDialogOpen: Function
}

const MapComponent = (props: MapComponentProps) => {

    const [lastClickedLat, setLastClickedLat] = useState(0)
    const [lastClickedLng, setLastClickedLng] = useState(0)

  const handleClickOnMap = (event: MouseEvent) => {
    // Workaround to access attributes not available in MouseEvent
    const mouseEv: any = event
    props.setMarkerDialogOpen(true)
    console.log('mouseEv', mouseEv.latlng)
    setLastClickedLat(mouseEv.latlng.lat)
    setLastClickedLng(mouseEv.latlng.lng)
    // alert('Clicked lat: ' + mouseEv.latlng.lat + ", lng: "  + mouseEv.latlng.lng)
  }

  return (
    <>
    <TreasureDialog dialogOpen={props.markerDialogOpen} setDialogOpen={props.setMarkerDialogOpen} lat={lastClickedLat} lng={lastClickedLng} />
    <Map
      center={[props.lat, props.lng]}
      zoom={props.zoom}
      onClick={handleClickOnMap}
    >
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[props.lat, props.lng]}>
        <Popup>a popup</Popup>
      </Marker>
    </Map>
    </>
  )
}
export default MapComponent
