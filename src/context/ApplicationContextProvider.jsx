import React, { useReducer, useState } from 'react';
import { createContext } from "react";
import { ApplicationReducer } from './ApplicationReducer';

export const ApplicationContext = createContext({});

function ApplicationContextProvider({ children }) {
    const [state, dispatch] = useReducer(ApplicationReducer, { tasks: [], users: [], basket: [] });

    const updateTasks = (data) => {
        dispatch({ type: "SET_TASKS", data }); // data = data:data
    }
    const addUser = (user) => {
        dispatch({ type: "ADD_USER", data: user });
    }
    const addToBasket = (item) => {
        dispatch({ type: "ADD_TO_BASKET", data: item });
    }
    return (
        <ApplicationContext.Provider value={{ state, updateTasks, addUser, addToBasket }}>
            {children}
        </ApplicationContext.Provider>
    )
}

export default ApplicationContextProvider