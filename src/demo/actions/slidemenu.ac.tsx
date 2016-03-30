/**
 * Created by asher on 2016/3/30.
 */
/// <reference path="../../../typings/tsd.d.ts" />
    
export const OPENMENU = 'OPENMENU';
export const CLOSEMENU = 'CLOSEMENU';

function openMenu(){
    return {
        type:OPENMENU
    }
}

function closeMenu() {
    return {
        type:CLOSEMENU
    }
}

export const toggleMenu = (menuState) => {
  
    return dispatch => {
        switch (menuState) {
            case true:
                dispatch(openMenu());
                break;
            default:
                dispatch(closeMenu());
        }       
    }
    
};