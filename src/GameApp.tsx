import React, {useEffect} from 'react'
import {BrowserRouter as Router} from "react-router-dom"

import Routes from './components/Routes'


import {useGlobalDispatch} from "./store/GlobalStore"
import {connectSocket} from "./services/socket.services" 

const GameApp = () => {
    const dispatch = useGlobalDispatch()

    useEffect(() => {
        const setSockets = () => {
            const socket = connectSocket()
            
            dispatch({type: "CONNECT_SOCKET", payload: socket})
        }
        setSockets()
    },[dispatch]);

    return (
        <Router>    
            <Routes />
        </Router>
    )
}

export default GameApp
