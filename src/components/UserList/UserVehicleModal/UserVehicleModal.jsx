import React from 'react';
import './style.sass'
import {useDispatch, useSelector} from "react-redux";
import {behaviorModalThunk, vehiclesClearThunk} from "../../../store/list/actions";
import Typography from '@mui/material/Typography';

export default function UserVehicleModal() {

    const {modalWindowActive, userCar} = useSelector(state => state.list);
    const dispatch = useDispatch();


    const closeModalWindow = () => {
        dispatch(behaviorModalThunk(!modalWindowActive));
        dispatch(vehiclesClearThunk([]));
    };

    return (
        <div className={modalWindowActive ? 'modal active' : 'modal'} onClick={closeModalWindow}>
            <div className={modalWindowActive ? 'modal__content active' : 'modal__content'}
                 onClick={e => e.stopPropagation()}>
                {userCar.map((item, i) => (
                        <div key={i}>
                            <Typography variant="h5" gutterBottom sx={{color: '#1976d2'}}>Name: {item.name}   </Typography>
                            <p>Model: {item.model}</p>
                            <p>Manufacturer: {item.manufacturer}</p>
                            <p>Vehicle_class: {item.vehicle_class}</p>
                        </div>
                    )
                )}

            </div>
        </div>
    );
}

