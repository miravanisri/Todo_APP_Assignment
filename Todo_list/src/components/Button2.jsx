import React from 'react'

const Button2 = ({name,onClick}) => {
  return (
    <div>


        <button  onClick={onClick} className='border text-white rounded-md w-36 mt-6 ml-6 hover:bg-green-800 '>{name}</button>
      





    </div>
  )
}

export default Button2
