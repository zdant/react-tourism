/**
 * Created by Gene on 16/3/17.
 */

/// <reference path="../../../typings/tsd.d.ts" />


import objectAssign = require("object-assign");

import { REQUEST_POSTS, RECEIVE_POSTS} from '../actions/login.ac';

export default (state = {isFetching: false,rsp:{}}, action) => {

    switch (action.type) {
        case REQUEST_POSTS:
            return objectAssign({}, state, {isFetching:true});
        case RECEIVE_POSTS:
            return objectAssign({}, state, {isFetching:false,rsp:action.rsp});
        default:
            return state;
    }
};