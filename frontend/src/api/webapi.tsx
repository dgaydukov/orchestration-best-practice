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
        const response = await axios.get(`${config.baseURL}/note`);
        dispatch(ac.getAllNotes(response.data));
    }
}

export const createNote = async (body) => {
    return axios.post(`${config.baseURL}/note`, body);
}

export const getNote = (id: string) => {
    return async (dispatch) => {
        const response = await axios.get(`${config.baseURL}/note/${id}`);
        dispatch(ac.getOneNote(response.data));
    }
}

export const updateNote = async (id: string, body) => {
    return axios.put(`${config.baseURL}/note/${id}`, body);
}

export const deleteNote = async (id: string) => {
    return axios.delete(`${config.baseURL}/note/${id}`);
}