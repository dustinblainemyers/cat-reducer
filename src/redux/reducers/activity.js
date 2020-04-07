//import my action types

import { ACTION_NAP, ACTION_EAT, ACTION_PLAY, ACTION_SET_ACTIVITY } from '../actionTypes';

const initialState = {


    activity: "napping",
  
}


const activityReducer = (state = initialState, action) => {

    switch(action.type) {
        case ACTION_NAP: {
            const activity = "napping";
            return {
                ...state,
                activity
            }
        }

        case ACTION_EAT: {
            const activity = "eating";
            return {
                ...state,
                activity
            }
        }

        case ACTION_PLAY: {
            const activity = "playing";
            return {
                ...state,
                activity
            }

       
        }


        case ACTION_SET_ACTIVITY: {
            const {activity} = action.payload;
            return {
                ...state,
                activity
            }

       
        }

       

        
        default: 
        return state;
    }
}


export default activityReducer;