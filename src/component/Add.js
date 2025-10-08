import { Avatar, Box, Fab, Modal, Typography, TextField, Stack, Button, ButtonGroup } from "@mui/material";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import SendIcon from '@mui/icons-material/Send';

// imgs
import m1 from '../static/img/Free.png'

// icones
import TagFacesIcon from '@mui/icons-material/TagFaces';
import CollectionsIcon from '@mui/icons-material/Collections';
import VideoCameraBackIcon from '@mui/icons-material/VideoCameraBack';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Padding, Send } from "@mui/icons-material";



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: '90%', sm: 400 },
  bgcolor: 'background.paper',
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
  Padding: { xs: '20px', sm: '30px' }
};

export default function Add() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Fab
        color="primary"
        aria-label="add"
        sx={{ position: "fixed", bottom: "2%", left: "2%" }}
        onClick={handleOpen}
      >
        <AddIcon />
      </Fab>

      <Modal
        open={open}
        onClose={handleClose}
        color={'text.primary'} bgcolor={'background.default'}
      >
        <Box sx={style}>
          <Typography variant="h6" color="gray" textAlign='center'>
            Creat a post
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, margin: '10px 0' }} >
            <Avatar alt="Remy Sharp" src={m1} />
            <Typography variant="h6" color={'text.primary'} >
              Your Name
            </Typography>
          </Box>

          <TextField fullWidth placeholder="What's in your maind😊" variant="standard" multiline
            rows={3} />

          <Stack direction='row' spacing={2} m='10px 0' >
            <Button sx={{ m: 0, p: 1, minWidth: '20px' }}>
              <TagFacesIcon color="primary" />
            </Button>
            <Button sx={{ m: 0, p: 1, minWidth: '20px' }}>

              <CollectionsIcon sx={{ color: '#561571' }} />
            </Button>
            <Button sx={{ m: 0, p: 1, minWidth: '20px' }}>
              <VideoCameraBackIcon sx={{ color: '#486f27' }} />
            </Button>
            <Button sx={{ m: 0, p: 1, minWidth: '20px' }}>
              <PersonAddIcon color="error" />
            </Button>
          </Stack>
          <Button variant="contained" fullWidth sx={{ margin: ' 10px 0' }} endIcon={<SendIcon position="end" />}>Post</Button>
        </Box>
      </Modal>
    </>
  );
}
