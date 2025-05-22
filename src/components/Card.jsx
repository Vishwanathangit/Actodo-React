import React from 'react'

const Card = (props) => {
    return (

        <div className='px-10 py-5 border rounded-md text-center flex-grow' style={{ backgroundColor: props.bgcolor, borderColor:props.bordercolor }}>
            <h1 className='font-medium text-2xl'>{props.title}</h1>
            <p>{props.subtitle}</p>
        </div>

    )
}

export default Card
