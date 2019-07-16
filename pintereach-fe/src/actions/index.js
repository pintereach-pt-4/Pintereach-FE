import api from "../api";

export const LOGIN = `LOGIN`;
export const LOGIN_FAIL = `LOGIN_FAIL`;
export const login = credentials => dispatch => {
  api
    .post("login", credentials)
    .then(res => {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user_id", res.data.user.id);
      dispatch({ type: LOGIN, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: LOGIN_FAIL, payload: err });
    });
};

export const REGISTER = `REGISTER`;
export const REGISTER_FAIL = `REGISTER_FAIL`;
export const register = credentials => dispatch => {
  api
    .post("register", credentials)
    .then(res => {
      dispatch({ type: REGISTER, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: REGISTER_FAIL, payload: err });
    });
};

export const GET_BOARDS = `GET_BOARDS`;
export const GET_BOARDS_FAIL = `GET_BOARDS_FAIL`;
export const getBoards = () => dispatch => {
  api
    .get("boards")
    .then(res => {
        console.log(res)
      dispatch({ type: GET_BOARDS, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: GET_BOARDS_FAIL, payload: err });
    });
};

export const ADD_BOARD = `ADD_BOARD`;
export const ADD_BOARD_FAIL = `ADD_BOARD_FAIL`;
export const addBoard = board => dispatch => {
  api
    .post("boards", board)
    .then(res => {
      dispatch({ type: ADD_BOARD, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ADD_BOARD_FAIL, payload: err });
    });
};

export const DELETE_BOARD = `DELETE_BOARD`;
export const DELETE_BOARD_FAIL = `DELETE_BOARD_FAIL`;
export const deleteBoard = id => dispatch => {
  api
    .delete(`boards/${id}`)
    .then(res => {
      dispatch({ type: DELETE_BOARD, payload: id });
    })
    .catch(err => {
      dispatch({ type: DELETE_BOARD_FAIL, payload: err });
    });
};

export const EDIT_BOARD = `EDIT_BOARD`;
export const EDIT_BOARD_FAIL = `EDIT_BOARD_FAIL`;
export const editBoard = (id, changes) => dispatch => {
  api
    .put(`boards/${id}`, changes)
    .then(res => {
      dispatch({ type: EDIT_BOARD, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: EDIT_BOARD_FAIL, payload: err });
    });
};
