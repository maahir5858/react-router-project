import React from 'react'
import { useParams } from 'react-router-dom'

function RouteParameter() {

    const paramObj = useParams();

  return (
    <div className='flex flex-col justify-center items-center my-20 mb-25 text-5xl'>
        <p>User: <span className='underline underline-offset-8 text-orange-600'>{paramObj.userId}</span></p>
    </div>
  )
}

export default RouteParameter