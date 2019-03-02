import { SIGN_IN, SIGN_OUT } from '../actions/types'

// Initialiser that will have isSignedIn property to null.
// True constant object and it should never be changed.
const INITAL_STATE = {
  isSignedIn: null,
  userId: null
};

// (REMINDER) when redux first boots up the application
// it gets called one time to initialize it.
export default ( state = INITAL_STATE, action ) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: true, userId: action.payload }
    case SIGN_OUT:
      return { ...state, isSignedIn: false, userId: null }
    default:
      return state;
  }

};