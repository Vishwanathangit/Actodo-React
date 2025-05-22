import React, { use } from 'react'
import Header from '../components/Header'
import Card from '../components/Card'
import Todocontainer from '../components/Todocontainer'
import { useLocation } from 'react-router-dom'

const Landing = () => {
    const data = useLocation()
    return (
        <div className='bg-black p-16'>
            <div className='bg-[#EFEFEF] p-10 border rounded-md'>
                <Header name={data.state.user}/>
                <div className='flex justify-between gap-7 my-5 flex-wrap'>
                    <Card bgcolor={"#8272DA"} title={"23°C"} subtitle={"Chennai"} bordercolor={"#8272DA"} />
                    <Card bgcolor={"#FD6663"} title={"May"} subtitle={"14:03:34"} bordercolor={"#FD6663"} />
                    <Card bgcolor={"#FCA021"} title={"Bulit Using"} subtitle={"React"} bordercolor={"#FCA201"} />
                </div>
                <Todocontainer />

            </div>
        </div>
    )
}

export default Landing
