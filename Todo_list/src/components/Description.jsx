import React from 'react'

const Description = ({onChange}) => {
  return (
    <div>
            {/* <input type='text ' className='border mt-4 rounded-md  pl-2 ml-2 w-96  ' placeholder='ADD DESCRIPTION'></input> */}


            <textarea name="Description" id="desc " rows={"1"}  placeholder='ADD DESCRIPTION' className='mt-4  ml-2 pl-2 w-128 border rounded-md resize-none' onChange={onChange}></textarea>



      
    </div>
  )
}

export default Description
