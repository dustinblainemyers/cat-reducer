//import my action types

import { ACTION_SET_NAME } from '../actionTypes';

const initialState = {


    
    name: "cat"
}


const nameReducer = (state = initialState, action) => {

    switch(action.type) {
        

        case ACTION_SET_NAME: {
            const {name} = action.payload
            return {
                ...state,
                 name
            }

       
        }

        
        default: 
        return state;
    }
}


export default nameReducer;