'use client'

import React from 'react'
import { HashLoader } from 'react-spinners'

const loading = () => {
  return (
    <div className='fixed w-screen h-screen bg-white flex justify-center items-center'>
      <HashLoader color='#4d4d4d' loading size={50} />
    </div>
  )
}

export default loading
