import React, { useState, useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components/Index.js'
import { Outlet } from 'react-router-dom'

function App() {
    const [loading, setLoading] = useState(true)
    const dispatch = useDispatch()
    const { status } = useSelector((state) => state.auth);

    useEffect(() => {
        authService.getCurrentUser()
            .then((userData) => {
                if (userData) {
                     dispatch(login({userData}))
                } else {
                    dispatch(logout())
                }
            })
            .finally(() => setLoading(false))
    }, [])


    return !loading ? (
        <div className='min-h-screen flex flex-wrap content-between bg-gray-400'>
            <div className='w-full block'>
                <Header />
                 <main >

                         <Outlet />

                </main>
                <Footer />
            </div>
        </div>
    ) : null
}

export default App