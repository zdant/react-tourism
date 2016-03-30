/**
 * Created by asher on 2016/3/30.
 */
import fetch from 'isomorphic-fetch'
import {push} from 'react-router-redux'

export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';
export const MODIFY_USER = 'MODIFY_USER';

export const REQUEST_GET = 'REQUEST_GET';
export const RECEIVE_GET = 'RECEIVE_GET';

export const deleteUser = () => {
    return {
        type: DELETE_USER
    }
};

export const modifyUser = (username, age, seq) => {
    return {
        type: MODIFY_USER,
        username,
        age,
        seq
    }
};

const requestGet = () => {
    return {
        type: REQUEST_GET
    }
};

const receiveGet = (user) => {
    return {
        type: RECEIVE_GET,
        user
    }
};

const fetchGet = () => {
    return dispatch => {
        dispatch(requestGet());

        return fetch('./server')
            .then(rsp => rsp.json())
            .then(json => dispatch(receiveGet(json)))
    }
};

const addUser = (username, age) => {
    return {
        type: ADD_USER,
        user: {
            username,
            age
        }
    }
};

export function fetchGetIfNeeded() {
    return (dispatch,getState) => {
        if(!getState().reducer.manager.users.length) {
            dispatch(fetchGet());
        }
    }
}

export const addUserAction = (username,age) => {
  return dispatch => {
      dispatch(addUser(username,age));
      dispatch(push('/manager'));
  }  
};

export const modifyUserProperty = (index, checked) => {
  return {
      type:MODIFY_USER,
      index,
      checked
  }  
};

export const modifyUserPropertyAction = (username,age,seq) => {
  
    return dispatch => {
        dispatch(modifyUser(username,age, seq));
        dispatch(push('/manager'));
    }
    
};