import React from 'react'
import { FaTrash } from 'react-icons/fa'
import Collapsible from 'react-collapsible'
import { FaChevronDown } from 'react-icons/fa'

const Expandable2 = ({title,desc,Showdate,onClick}) => {
  return (
    <div>
         <div className='flex'>

    
<div className=' bg-white rounded-md  w-3/5 mt-3 ml-6'>

<Collapsible trigger={<div className='text-gray-500 flex justify-between pt-2 pl-2'>{title}
<FaChevronDown className='mt-1 mr-1 '></FaChevronDown>

</div>}



>
      <p className='pl-2'>
       {desc}

      </p>
      <p className='text-xs text-gray-400 text-right'>{Showdate}</p>
    
    </Collapsible>
   
</div>

<div className='flex ml-16'>
 
    <FaTrash title='Delete' onClick={onClick} className='mt-8 text-white text-2xl ml-8 cursor-pointer hover:text-red-500'></FaTrash>


    

   </div>


</div>
      
    </div>
  )
}

export default Expandable2
