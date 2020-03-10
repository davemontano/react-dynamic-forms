import React, { useState } from 'react'

import Button from '@material-ui/core/Button'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import {TableContainer} from "@material-ui/core";

import { InputRow } from './InputRow'


export default function InputTable () {

    const [ inputFields, setInputFields ] = useState([<InputRow label="Row 0"/>])

    const addNewField = () => {
        setInputFields(categories => [...categories, <InputRow/>])
    }

    return(
        <React.Fragment>
            <TableContainer>
                <Table>
                    <TableHead>
                        Dynamic Fields
                    </TableHead>
                    <TableBody>
                        {
                            inputFields.map( (field) =>
                                field
                             )
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <Button variant="contained" color="primary" onClick={addNewField}>
                Add new Field
            </Button>
        </React.Fragment>
    )

}
