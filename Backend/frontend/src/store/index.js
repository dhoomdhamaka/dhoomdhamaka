import {configureStore, createSlice} from '@reduxjs/toolkit'

const authSlice = createSlice({
    name: 'auth',
    initialState : { isLoggedIn : false },
    reducers: {
        login(state){
            state.isLoggedIn = true
            console.log("called login");
        },
        logout(state){
            state.isLoggedIn = false
            console.log("logout called");
        }
    }
})

export const authActions = authSlice.actions;

export const store = configureStore({
    reducer : authSlice.reducer
})