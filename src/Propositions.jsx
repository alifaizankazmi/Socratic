import React, { useState } from 'react';

import {
    ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails,
    makeStyles, IconButton, Paper, Tooltip, Typography
} from "@material-ui/core";

import Add from "@material-ui/icons/Add";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';

import AddPropositionPanel from './AddPropositionPanel';

const useStyles = makeStyles(theme => ({
    root: {
        margin: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        '& h6': {
            padding: theme.spacing(1)
        }
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

export default function Propositions() {
    const classes = useStyles();
    const [isAddClicked, setIsAddClicked] = useState(false);
    const [canAddProposition, setCanAddProposition] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [propositions, setPropositions] = useState([]);

    return (
        <>
            <Paper elevation={1} className={classes.root}>
                <ExpansionPanel expanded={isExpanded}
                onChange={() => setIsExpanded(!isExpanded)}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header">
                        <Typography variant="h6" className={classes.header} color="primary">
                            Propositions
                        </Typography>
                        <Tooltip title="Create a proposition">
                            <IconButton className={classes.headerButton}
                                onClick={event => {
                                    event.stopPropagation();
                                    setIsAddClicked(true);
                                }}>
                                <Add color="primary" />
                            </IconButton>
                        </Tooltip>
                        <AddPropositionPanel
                            {...{
                                isAddClicked,
                                canAddProposition,
                                propositions,
                                setIsAddClicked,
                                setCanAddProposition,
                                setPropositions,
                                setIsExpanded
                            }} />
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <div>
                            {propositions.map(proposition =>
                                <div key={proposition}>{proposition}</div>)
                            }
                        </div>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </Paper>
            <Paper elevation={2} className={classes.root}>
                <ExpansionPanel>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="h6" className={classes.header} color="primary">
                            Truth Tables
                        </Typography>
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        Details
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </Paper>
        </>
    );
}