/**
 * Created by Gene on 16/3/17.
 */

import { combineReducers } from 'redux';

import login from './login.rd';
import manager from './manager.rd';
import slideMenu from './slidemenu.rd';

export default combineReducers({
    login,
    manager,
    slideMenu
});