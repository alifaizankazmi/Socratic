import React, { useEffect, useRef, useState } from 'react';

import { Zoom, makeStyles, IconButton, TextField, Tooltip } from "@material-ui/core";

import Close from "@material-ui/icons/Close";
import Done from "@material-ui/icons/Done";

import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';

const useStyles = makeStyles(theme => ({
    headerButton: {
        height: '48px',
        alignSelf: 'center'
    },
    doneButton: {
        color: green[500]
    },
    cancelButton: {
        color: red[500]
    },
    inputArea: {
        alignSelf: 'center'
    },
    textField: {
        verticalAlign: 'baseline',
        padding: theme.spacing(1)
    }
}));

export default function AddPropositionPanel({
    isAddClicked, propositions,
    setIsAddClicked, setPropositions, setIsExpanded
}) {
    const classes = useStyles();
    const [canAddProposition, setCanAddProposition] = useState(false);
    const propositionRef = useRef(null);

    const addProposition = event => {
        event.preventDefault();

        setIsAddClicked(false);
        setPropositions(
            [...propositions, propositionRef.current.value]);
        setIsExpanded(true);
        propositionRef.current.value = null;
        setCanAddProposition(false);
    }

    useEffect(() => {
        if (isAddClicked) {
            propositionRef.current.focus();
        }
    }, [isAddClicked]);

    return (
        <Zoom in={isAddClicked}>
            <form className={classes.inputArea}
                onClick={event => {
                    event.stopPropagation();
                }}
                onSubmit={addProposition}>
                <TextField className={classes.textField}
                    placeholder="Enter a proposition"
                    onChange={event => event.target.value ?
                        setCanAddProposition(true) :
                        setCanAddProposition(false)}
                    inputRef={propositionRef}
                    onFocus={event => event.stopPropagation()} />
                <Tooltip title="Submit">
                    <span>
                        <IconButton
                            className={`${classes.headerButton} ${classes.doneButton}`}
                            disabled={!canAddProposition}
                            onClick={addProposition}>
                            <Done />
                        </IconButton>
                    </span>
                </Tooltip>
                <Tooltip title="Cancel">
                    <IconButton
                        className={`${classes.headerButton} ${classes.cancelButton}`}
                        onClick={() => {
                            setIsAddClicked(false);
                            propositionRef.current.value = null;
                            setCanAddProposition(false);
                        }}>
                        <Close />
                    </IconButton>
                </Tooltip>
            </form>
        </Zoom>
    );
}