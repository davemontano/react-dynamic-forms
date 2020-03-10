import React from 'react'

import TableRow from '@material-ui/core/TableRow'
import TableCell from '@material-ui/core/TableCell'
import TextField from '@material-ui/core/TextField'

export function InputRow (props) {

    return (
        <TableRow>
            <TableCell>
                <TextField variant="outlined" label={props.label}/>
            </TableCell>
            <TableCell>
                <TextField variant="outlined"/>
            </TableCell>
        </TableRow>
    )

}
