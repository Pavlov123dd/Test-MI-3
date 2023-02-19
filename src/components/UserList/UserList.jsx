import React, {Fragment, useEffect} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {fetchUsersThunk, behaviorModalThunk, vehiclesActionThunk} from "../../store/list/actions";
import UserVehicleModal from "./UserVehicleModal/UserVehicleModal"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';


function UserList() {

    const {userList, modalWindowActive} = useSelector(state => state.list);
    const dispatch = useDispatch();

    useEffect(() => {
        (() => {
            dispatch(fetchUsersThunk());
        })()
    }, []);

    const openModalWindow = async ({vehicles}) => {

        await vehicles.forEach(item => dispatch(vehiclesActionThunk(item)))
        dispatch(behaviorModalThunk(!modalWindowActive));
    };


    return (
        <Fragment>
            <TableContainer component={Paper}>


                <Table sx={{minWidth: 650}} aria-label="caption table">
                    <TableHead sx={{background: "rgb(10%, 46%, 82%, 0.1)"}}>
                        <TableRow>
                            <TableCell sx={{fontWeight: '700'}} align="left">Name:</TableCell>
                            <TableCell sx={{fontWeight: '700'}} align="left">Height:</TableCell>
                            <TableCell sx={{fontWeight: '700'}} align="left">Mass:</TableCell>
                            <TableCell sx={{fontWeight: '700'}} align="left">Gender:</TableCell>
                            <TableCell sx={{fontWeight: '700'}} align="left">Edited:</TableCell>
                            <TableCell sx={{fontWeight: '700'}} align="left">Button</TableCell>
                        </TableRow>
                    </TableHead>
                    {userList.length > 0 ?
                        (<TableBody>
                            {userList.map((user, i) => <TableRow key={i}>
                                <TableCell align="left">{user.name}</TableCell>
                                <TableCell align="left">{user.height}</TableCell>
                                <TableCell align="left">{user.mass}</TableCell>
                                <TableCell align="left">{user.gender}</TableCell>
                                <TableCell align="left">{user.edited}</TableCell>
                                <TableCell align="left">
                                    {user.vehicles.length > 0 ? (
                                            <Button variant="contained" endIcon={<DirectionsCarIcon/>}
                                                    onClick={() => openModalWindow(user)}
                                                    disabled={modalWindowActive ? true : false}
                                            >
                                                Show vehicles
                                            </Button>) :
                                        <Typography variant="button" display="block" gutterBottom>No
                                            vehicles </Typography>}
                                </TableCell>
                            </TableRow>)}
                        </TableBody>) : null}
                </Table>
            </TableContainer>
            <UserVehicleModal/>
        </Fragment>
    );
}

export default UserList;