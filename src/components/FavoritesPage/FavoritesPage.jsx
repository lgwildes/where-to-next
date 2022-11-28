import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

//import MUI components
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid2 from '@mui/material/Unstable_Grid2';
import { FavoriteBorder, Favorite, Edit, Check, DeleteOutline, Note, FavoriteTwoTone } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { setContext } from 'redux-saga/effects';
// import sweetalert for delete confirmation
import swal from 'sweetalert';


function FavoritesPage() {
  const dispatch = useDispatch();
  const currentUser = useSelector(store => store.user);
  const favorites = useSelector(store => store.favorites);
  const activeFavorite = useSelector(store => store.activeFavorite)
    // Modal state and styles
    const [open, setOpen] = useState(false);
    const handleClose = () => setOpen(false);
 
  useEffect(() => {
    dispatch({
      type: 'FETCH_FAVORITES',
      payload: currentUser
    })

    // dispatch({
    //   type: 'GET_FAVORITES',
    // })
  }, [favorites])


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

 
  if (favorites) {
   
    return (
      <div id="favorites-page">
        <div id='favorite-header'>
        <Favorite/> <h1 >my favorites </h1>
         
        </div>
        <Grid2 container spacing={2} m={2}
          alignItems="center"
          justifyContent="center" >
          
          {favorites.map(destination => {
            return (
              <Grid2 
                id="favorite-grid"
                key={destination.favorite_id}>
                <Card sx={{ width: 500, height: 500, m: 2,  boxShadow: 3 }}
                  >
                 
                  <CardMedia
                    component="img"
                    height="200"
                    image={destination.url} //TODO get photos from DB
                    alt={destination.alt_text} //TODO get alt_text from DB
                  />
                   <CardContent>
                  <Typography sx={{p:3}} id="favorites-card">
                  <h3 id="favorite-title">{destination.name}</h3>
                 {/* INSERT DESTINATION ID CHIPS HERE */}
                  <p>{destination.description}</p>
                  <div id="notes-head-icon">
                  <h4 >my notes</h4>
                  <IconButton onClick={(event) => {
                     setOpen(true);
                     dispatch({
                       type: 'SET_ACTIVE_FAVORITE',
                        payload: destination
                     })
                    
                      console.log('❤️‍🔥active favorite is ', destination)
                     
                      }}
                      > 
                    <Edit
                    />
                  </IconButton>
                  <IconButton
                  onClick={() => {
                   swal({
                    title: "Are you sure?",
                    text: "This destination will be removed from your favorites!",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                   })
                   .then((willDelete) => {
                    if(willDelete) {
                      dispatch({
                        type:'DELETE_FAVORITE',
                        payload: destination.favorite_id
                      })
                      dispatch({
                        type: 'FETCH_FAVORITES',
                        payload: currentUser
                      })
                  
                      dispatch({
                        type: 'GET_FAVORITES',
                      })
                      swal("Destination deleted!", {
                        icon: "success",
                      });
                    } 
                   });
                  }}>
                      <DeleteOutline
                       />
                  </IconButton>
                  </div>
                  <p id="notes-body">{destination.notes}</p> 
                  </Typography>
                 {/* edit modal ⬇️ */}
                  <Modal
                    open={open}
                    onClose={handleClose}
                    >
                    <Box sx={style}>
                      <TextField
                        value={activeFavorite.notes}//THIS IS NULL IF NO NOTE AND IS AN ISSUE
                        onChange={(event) => dispatch({
                          type: 'UPDATE_NOTE',
                          payload: {
                            notes: event.target.value,
                          }
                        })} 
                        variant="outlined"
                        multiline
                        rows={4}
                        placeholder="write a note..."
                         />
                         {/* on submit saga  */}
                      <IconButton onClick={() => {
                         handleClose();

                         dispatch({
                           type:'EDIT_NOTE',
                           payload: {
                             note: activeFavorite.notes,
                             favoriteId: activeFavorite.favorite_id
                           }
                         })
                         dispatch({
                          type: 'FETCH_FAVORITES',
                          payload: currentUser
                        })
                    
                        dispatch({
                          type: 'GET_FAVORITES',
                        })
                      }}>
                        <Check />
                      </IconButton>
                    </Box>
                  </Modal>
                  </CardContent>
                </Card>
              </Grid2>
            )
          })}


        </Grid2>

      </div>
    );
  }
  else if (!favorites) {
    return (
      <h1> loading favorites... </h1>
    )
  }

}

export default FavoritesPage;
