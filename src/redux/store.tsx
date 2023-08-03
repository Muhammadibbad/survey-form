"use client"

import { configureStore } from "@reduxjs/toolkit";

import { TypedUseSelectorHook, useSelector } from "react-redux";
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import { combineReducers } from "@reduxjs/toolkit";
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import surveyReducer from './feature/surveySlice'



const persistConfig={
    key:"root",
    version:1,
    storage,
}

const reducer=combineReducers({
    user:surveyReducer,
    
})

const persistedReducer=persistReducer(persistConfig,reducer)


export const store=configureStore({
    reducer: persistedReducer,
    middleware:  (getDefaultMiddleware)=> getDefaultMiddleware({
        
        serializableCheck: false,
      }),
})



export type RootState=ReturnType<typeof store.getState>
export type AppDispatch=typeof store.dispatch
export const useAppSelector:TypedUseSelectorHook<RootState>=useSelector