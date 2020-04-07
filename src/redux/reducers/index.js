import {combineReducers} from 'redux';

import activityReducer from './Activity';
import nameReducer from './Name';

export default combineReducers(
    
    {activity: activityReducer,
     name: nameReducer
    
    }
    

    );