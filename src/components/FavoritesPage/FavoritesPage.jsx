import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//import MUI components
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid2 from '@mui/material/Unstable_Grid2';
import { FavoriteBorder, FavoriteBorderOutlined, Edit, Check, Note } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { setContext } from 'redux-saga/effects';



function FavoritesPage() {
  const dispatch = useDispatch();
  const currentUser = useSelector(store => store.user);
  const favorites = useSelector(store => store.favorites);
 
  
 
  useEffect(() => {
    dispatch({
      type: 'FETCH_FAVORITES',
      payload: currentUser
    })
    dispatch({
      type: 'GET_FAVORITES',
    })
  }, [])

  // Modal state and styles
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  // Edit note state
  const [ note, setNote ] = useState('');
  // handle on submit of note edit
  function updateNote() {
    handleClose();
    dispatch({
      type:'EDIT_NOTE',
      payload: {
        note: note
      }
    })
  }

  if (favorites) {
    return (
      <>
        <div className="container">
          <h1>my favorites</h1>
        </div>
        <Grid2 container spacing={2} m={2}
          alignItems="center"
          justifyContent="center" >
          {favorites.map(destination => {
            return (
              <Grid2
                key={destination.id}>
                <Card sx={{ width: 500, height: 400, m: 2, boxShadow: 3 }}>
                  <CardMedia
                    component="img"
                    height="120"
                    image="https://images.pexels.com/photos/1850619/pexels-photo-1850619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" //TODO get photos from DB
                    alt="image description" //TODO get alt_text from DB
                  />
                  <h4>{destination.name}</h4>
                  <p>{destination.description}</p>
                  <h4>my notes</h4>
                  <p>{destination.notes}</p> 
                  <IconButton onClick={(event) => handleOpen(destination.id)} > 
                    <Edit
                    />
                  </IconButton>
                  <Modal
                    open={open}
                    onClose={handleClose}>
                    <Box sx={style}>
                      <TextField
                        onChange={(event) => setNote(event.target.value)} 
                        variant="outlined"
                        multiline
                        rows={4}
                        placeholder="write a note..."
                         />
                      <IconButton onClick={updateNote}>
                        <Check />
                      </IconButton>
                    </Box>
                  </Modal>
                  <IconButton onClick={(event) => deleteFavorite(destination.id)} > 
                    <FavoriteBorderOutlined
                    />
                  </IconButton>

                </Card>
              </Grid2>
            )
          })}


        </Grid2>

      </>
    );
  }
  else if (!favorites) {
    return (
      <h1> loading favorites... </h1>
    )
  }

}

export default FavoritesPage;
