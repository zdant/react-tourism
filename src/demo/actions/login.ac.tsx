/**
 * Created by asher on 2016/3/29.
 */
/// <reference path="../../../typings/tsd.d.ts" />
import fetch from 'isomorphic-fetch'
import {push} from 'react-router-redux'

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

function requestPosts(username, password) {
    return {
        type: REQUEST_POSTS,
        username: username,
        password: password
    }
}

function receivePosts(json) {
    return {
        type: RECEIVE_POSTS,
        rsp: json
    }
}

export const fetchPosts = (username, password) => {
    return dispatch => {
        dispatch(requestPosts(username, password));

        if (username == 'admin' && password == '123456') {
            return fetch('./server/loginSuccess.json', {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: "username=" + username + "&" + "password=" + password
            })
                .then(rsp => rsp.json())
                .then(() => {
                    dispatch(push('/manager'))
                })
        } else {
            return fetch('./server/loginFail.json', {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded"
                },
                body: "username=" + username + "&" + "password=" + password
            })
                .then(rsp => rsp.json())
                .then(() => {
                    alert('用户名或密码不正确,请再试试！')
                })
        }
    }
};