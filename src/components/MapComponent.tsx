import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

interface MapComponentProps {
  lat: number
  lng: number
  zoom: number
  setLat: Function
  setLng: Function
  setZoom: Function
}

const MapComponent = (props: MapComponentProps) => {
  const handleClickOnMap = (event: MouseEvent) => {
    // Workaround to access attributes not available in MouseEvent
    const mouseEv: any = event
    console.log('mouseEv', mouseEv.latlng)
    alert('Clicked lat: ' + mouseEv.latlng.lat + ", lng: "  + mouseEv.latlng.lng)
  }

  return (
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
  )
}
export default MapComponent
