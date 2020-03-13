import React from 'react';
import {Table} from 'reactstrap';
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    table: {
        marginTop: 64
    }
}))

export default function PlayersList(props){
    const classes = useStyles();
    return (
        <div className={classes.table}>
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Country</th>
                    <th>Searches</th>
                </tr>
            </thead>
            <tbody>
                {props.players.map(player => {
                    return (
                        <tr key={player.id}>
                            <th scope="row">{player.id + 1}</th>
                            <th>{player.name}</th>
                            <th>{player.country}</th>
                            <th>{player.searches}</th>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
        </div>
    )
}