import React from 'react'

const Button = ({onClick}) => {
  return (
    <div>

        <button onClick={onClick} className='mt-4 ml-2 text-white border rounded-md w-24'>ADD TASK</button>


      
    </div>
  )
}

export default Button
