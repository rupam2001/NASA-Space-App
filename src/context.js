import React, { Component, useState, useEffect } from 'react';
const contextProvider = React.createContext();

const ContextProvider = (props) => {

    return (
        <contextProvider.Provider
            value={{
            }}
        >
            {props.children}
        </contextProvider.Provider>
    )
}


const ContextConsumer = contextProvider.Consumer;
export { ContextProvider, ContextConsumer };