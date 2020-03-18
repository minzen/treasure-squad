import React, { useState } from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogContentText,
  Button
} from '@material-ui/core'
import {makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    button: {
        marginTop: 10
    }
})

interface TreasureDialogProps {
  dialogOpen: boolean
  setDialogOpen: Function
  lat: number
  lng: number
}

const TreasureDialog = (props: TreasureDialogProps) => {
  const [description, setDescription] = useState('')
  const classes = useStyles()

  const handleClose = () => {
    props.setDialogOpen(!props.dialogOpen)
  }

  const handleTyping = (event: React.FormEvent) => {
    const keyEvent: any = event
    console.log('handle typing', keyEvent.target.value)
    setDescription(keyEvent.target.value)
  }

  const handleSubmit = () => {
    console.log('handleSubmit, save description:', description)
  }

  return (
    <Dialog
      open={props.dialogOpen}
      onClose={handleClose}
      onSubmit={handleSubmit}
    >
      <DialogTitle>
        Edit Treasure at ({props.lat},{props.lng}){' '}
      </DialogTitle>
      <DialogContent>
        <DialogContentText>
          Type in a description for the treasure and select a category
        </DialogContentText>
        <TextField
          id='description'
          label='Description'
          type='text'
          fullWidth
          value={description}
          onChange={event => {
            handleTyping(event)
          }}
        />
        <Button variant="contained" color="primary" className={classes.button} onClick={handleSubmit}>Save</Button>
      </DialogContent>
    </Dialog>
  )
}
export default TreasureDialog
