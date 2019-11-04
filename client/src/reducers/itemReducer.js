import uuid from 'uuid';
import {GET_ITEMS, ADD_ITEM, DELETE_ITEM} from '../actions/types';

const initialState = {
    items: [
        {id: uuid(), name: 'Beat the boss'},
        {id: uuid(), name: 'Wreck the house'},
        {id: uuid(), name: 'Burn the car'},
        {id: uuid(), name: 'Go fishing'}
    ]
}

export default function(state = initialState, action) {
    switch(action.type) {
        case GET_ITEMS:
            return {
                ...state
            }
        default:
            return state;
    }
}