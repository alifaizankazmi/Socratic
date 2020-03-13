import React, { useState } from 'react';

import { Grow, makeStyles, IconButton, Paper, TextField, Typography } from "@material-ui/core";
import AddBox from "@material-ui/icons/Add";
import Send from "@material-ui/icons/Send";

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(2),
        display: 'flex',
        flexDirection: 'column'
    },
    inline: {
        display: 'inline-flex'
    },
    header: {
        padding: theme.spacing(2),
        paddingRight: theme.spacing(1)
    },
    headerButton: {
        height: '48px',
        alignSelf: 'center'
    },
    inputArea: {
        alignSelf: 'center'
    },
    textField: {
        verticalAlign: 'baseline'
    }
}));

export default function Propositions() {
    const classes = useStyles();
    const [isAddClicked, setIsAddClicked] = useState(false);
    const [canAddProposition, setCanAddProposition] = useState(false);

    return (
        <Paper elevation={2} className={classes.root}>
            <div className={classes.inline}>
                <Typography variant="h6" className={classes.header} color="primary">
                    Propositions
                </Typography>
                <IconButton className={classes.headerButton}
                    onClick={() => setIsAddClicked(true)}>
                    <AddBox color="primary" />
                </IconButton>
                <Grow in={isAddClicked}>
                    <div className={classes.inputArea}>
                        <TextField className={classes.textField}
                            placeholder="Enter a proposition name"
                            onChange={event => event.target.value? 
                                setCanAddProposition(true):
                                setCanAddProposition(false)} />
                        <IconButton className={classes.headerButton}
                            onClick={() => setIsAddClicked(false)}
                            disabled={!canAddProposition}
                            color="primary">
                            <Send />
                        </IconButton>
                    </div>
                </Grow>
            </div>
        </Paper>
    )
}