import React, {useState, useRef} from 'react';
import './style.sass';
import {useDispatch} from "react-redux";
import {fetchFilterUsersThunk, fetchFilterResetThunk} from "../../store/list/actions";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

export default function UsersFilter() {
    const dispatch = useDispatch();
    const [filterName, setFilterName] = useState('');
    const inputEl = useRef(null);
    const handelTitle = e => setFilterName(e.target.value);

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(fetchFilterUsersThunk(filterName));

    };

    const resetFilter = () => {
        dispatch(fetchFilterResetThunk(''));
        inputEl.current.value = '';
    };

    return (

        <Box
            component="form"
            sx={{mb: 3}}
            autoComplete="off"
            onSubmit={handleSubmit}
            className={'form-filter'}
        >

            <label className={'label-filter'}>
                Filter: <input type='text' onChange={handelTitle} ref={inputEl} className={'input-filter'}/>
            </label>
            <Button variant="contained" type='submit' sx={{mr: 1, mt: 4}}>Filter</Button>
            <Button variant="contained" onClick={resetFilter} sx={{mt: 4}}>Reset filter</Button>
        </Box>

    );
}

