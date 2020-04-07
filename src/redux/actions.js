import {ACTION_NAP, ACTION_EAT, ACTION_PLAY, ACTION_SET_NAME,ACTION_SET_ACTIVITY} from './actionTypes';


export const nap = () => {
    return {
        type: ACTION_NAP


    }
}


export const eat = () => {

    return {
        type: ACTION_EAT
    }
}


export const play = () => {
    return {
        type: ACTION_PLAY
    }
}

export const setName = content => ({
    type: ACTION_SET_NAME,
    payload: {
      name: content
      
    }
  });


  export const setActivity = content => ({
    type: ACTION_SET_ACTIVITY,
    payload: {
      name: content
    }
  });