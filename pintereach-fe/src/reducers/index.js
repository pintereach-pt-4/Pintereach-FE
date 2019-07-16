import { LOGIN, LOGIN_FAIL, REGISTER, REGISTER_FAIL, GET_BOARDS, GET_BOARDS_FAIL } from '../actions';
const INITIAL_STATE ={
    isLoggedIn: false,
    error: null,
    message: "",
    allBoards: [],
    user: {}
}

const reducers =(state=INITIAL_STATE, action)=>{
    switch(action.type){
        case LOGIN:
            return {
              ...state,
              message: action.payload.message,
              user: action.payload.user
            };
          case LOGIN_FAIL:
            return {
              ...state,
              error: action.payload
            };
            case REGISTER:
                return {
                  ...state
                };
              case REGISTER_FAIL:
                return {
                  ...state,
                  error: action.payload
                };
              case GET_BOARDS:
                return {
                  ...state,
                  allBoards: action.payload
                };
              case GET_BOARDS_FAIL:
                return {
                  ...state,
                  error: action.payload
                };
            default:
                return state;
    }
}

export default reducers;