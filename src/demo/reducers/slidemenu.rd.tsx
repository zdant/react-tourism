/**
 * Created by asher on 2016/3/30.
 */
/// <reference path="../../../typings/tsd.d.ts" />

import objectAssign = require('object-assign');
import {OPENMENU,CLOSEMENU} from '../actions/slidemenu.ac';

export default (state = {isOpen:true}, action) => {
  
    switch (action.type) {
        case OPENMENU:
            return objectAssign({},state,{isOpen:true});
        case CLOSEMENU:
            return objectAssign({},state,{isOpen:false});
        default:
            return state;
    }
    
};