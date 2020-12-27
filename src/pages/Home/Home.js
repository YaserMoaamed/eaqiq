import React from 'react'
import InfoSection from '../../Components/HomePageInfo/HomePageInfo'
import { HomeObj } from './Data'
const Home = () => {
    return (
        <>
            <InfoSection {...HomeObj}/>
        </>
    ) 
}

export default Home
