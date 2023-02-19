import React from 'react';
import {Provider} from 'react-redux';
import UsersFilter from '../components/UsersFilter/UsersFilter';
import UserList from '../components/UserList/UserList';
import store from '../store/store';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function HomePage() {
    return (
        <Container maxWidth="md" sx={{mb: 5}}>
            <Provider store={store}>
                <Typography variant="h3" gutterBottom>Users info</Typography>
                <UsersFilter/>
                <UserList/>
            </Provider>
        </Container>
    );
}

