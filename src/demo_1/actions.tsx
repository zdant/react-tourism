/**
 * Created by Daniel on 16/3/28
 * */

import fetch from 'isomorphic-fetch'
import Dispatch = Redux.Dispatch;

export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const SELECT_SUB = 'SELECT_SUB';
export const INVALIDATE_SUB= 'INVALIDATE_SUB ';

export function selectSub(sub) {
    return {
        type: SELECT_SUB,
        sub
    }
}

export function invalidateSub(sub) {
    return {
        type:INVALIDATE_SUB,
        sub
    }
}

function requestPosts(sub) {
    return {
        type: REQUEST_POSTS,
        sub
    }
}

function receivePosts(sub, json) {
    return  {
        type:RECEIVE_POSTS,
        sub,
        posts:json.data.children.map(child => child.data)
    }
}