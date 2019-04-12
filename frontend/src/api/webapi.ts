'use strict';

/**
 * List of API functions
 * used with thunk https://github.com/reduxjs/redux-thunk
 *
 */

//import axios from "axios";
import * as ac from "@redux/action-creators";
import axios from 'axios';
import config from '@root/site-config';


export const getUser = ()=>{
    return (dispatch, getState) => {
        //load only if user hasn't been loaded
        if(!getState().userState.user.id){
            setTimeout(()=>{
                dispatch(ac.getUserSuccess({id: 1}));
            }, 1000)
        }
    }
}


export const getCatalog = ()=>{
    return (dispatch) => {
        setTimeout(()=>{
            dispatch(ac.getCatalogSuccess([
                {productId: 1, name: "fridge", price: 100},
                {productId: 2, name: "kettle", price: 200},
                {productId: 3, name: "tv", price: 300},
            ]));
        }, 2000)
    }
}


/**
 * Notes management functions
 */

export const getAllNotes = () => {
    return async (dispatch) => {
        const data = await axios.get(`${config.baseURL}/`);
        dispatch(ac.getCatalogSuccess(data));
    }
}

export const createNote = () => {
    
}

export const getNote = (id: string) => {
    
}

export const updateNote = (id: string, body) => {
    
}

export const deleteNote = (id: string) => {
    
}