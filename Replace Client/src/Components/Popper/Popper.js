
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import './Popper.css';

    
    const useStyles = makeStyles(theme => ({
        typography: {
        padding: theme.spacing(2),
        },
    }));
    
    export default function ButtonPopper() {
        const classes = useStyles();
        const [anchorEl, setAnchorEl] = React.useState(null);
    
        function handleClick(event) {
        setAnchorEl(anchorEl ? null : event.currentTarget);
        }
        
        function logoutNow(event) {
            window.location.reload();
        }
        const open = Boolean(anchorEl);
        const id = open ? 'simple-popper' : undefined;
    
        return (
        <div>
            <Button className="PopperContainer" aria-describedby={id} variant="contained" onClick={handleClick}>
            About.
            </Button>
            <Popper id={id} open={open} anchorEl={anchorEl} transition>
            {({ TransitionProps }) => (
                <Fade {...TransitionProps} timeout={350}>
                <Paper>
                    <Typography classID="PopperContent" className={classes.typography}>Go ahead and log in. Once you're logged in, choose a color and press the button. Once you do, it will be the official best color in the world.</Typography>
                </Paper>
                </Fade>
            )}
            </Popper>
            <Button className="Logout" aria-describedby={id} variant="contained" onClick={logoutNow}>
            Logout
            </Button>
        </div>
        );
    }