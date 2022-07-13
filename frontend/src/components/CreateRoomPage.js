import React, { useState } from 'react'
import { 
    Button, 
    Grid, 
    Typography, 
    TextField, 
    FormHelperText,
    FormControl,
    Radio,
    RadioGroup,
    FormControlLabel 
}from '@mui/material';
import { Link } from "react-router-dom"

function CreateRoomPage() {
    let defaultVotes = 2

    const [guestCanPause,setGuestCanPause] = useState(true)
    const [votesToSkip, setVotesToSkip] = useState(defaultVotes)
    

    function handleVotesChange(e){
        setVotesToSkip(e.target.value)
    }

    function handleGuestCanPauseChange(e){
        setGuestCanPause(e.target.value === 'true' ? true : false)
    }

    function handleRoomButtonClick(){
        console.log(guestCanPause,votesToSkip)
    }

    return ( 
    
    <Grid container spacing={1}>
        <Grid item xs={12} align="center"> 
            <Typography component='h4' variant='h4'> 
                Create A Room
            </Typography>
        </Grid>
        <Grid item xs={12} align="center"> 
            <FormControl component="fieldset">
                <FormHelperText>
                        Guest Control of Playback State
                </FormHelperText>
                <RadioGroup row defaultValue="true" onChange={handleGuestCanPauseChange}>
                    <FormControlLabel 
                        value="true" 
                        control={<Radio color="primary"/>}
                        label="Play/Pause"
                        labelPlacement="bottom"/>
                    <FormControlLabel 
                        value="false" 
                        control={<Radio color="secondary"/>}
                        label="No Control"
                        labelPlacement="bottom"/>    
                </RadioGroup>
            </FormControl>
        </Grid>
        <Grid item xs={12} align="center"> 
            <FormControl>
                <TextField 
                required={true} 
                type="number" 
                onChange={handleVotesChange}
                defaultValue={defaultVotes}
                inputProps={{min: 1, style:{textAlign:"center"}}}/>
                <FormHelperText>
                    Votes Required to Skip Song
                </FormHelperText>
            </FormControl>
        </Grid>
        <Grid item xs={12} align="center"> 
            <Button 
                color='primary' 
                variant='contained'
                onClick={handleRoomButtonClick}>
                Create A Room
            </Button>
        </Grid>  
        <Grid item xs={12} align="center"> 
            <Button color='secondary' variant='contained' to="/" component={Link}>
                Back
            </Button>
        </Grid>  

    </Grid>
    );
}

export default CreateRoomPage;