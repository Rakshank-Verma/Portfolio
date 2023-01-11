import { createReducer } from "@reduxjs/toolkit";

const initialState = {
    theme : "light"
}

export const themeSwitchReducer = createReducer(initialState, {

    changeToDark : (state)=>{
        state.theme = "dark"
    },

    changeToLight : (state)=>{
        state.theme = "light"
    },
});
