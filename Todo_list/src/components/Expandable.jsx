import React, { useState } from 'react';
import Collapsible from 'react-collapsible';
import { FaCheck, FaChevronDown, FaEdit, FaTrash } from 'react-icons/fa';

/**
 * Expandable component for displaying and editing todo items.
 * @param {Object} props - Component properties
 * @param {string} props.title - Initial title of the todo item
 * @param {string} props.desc - Initial description of the todo item
 * @param {Function} props.onClick - Function to handle delete action
 * @param {Function} props.onClick2 - Function to handle complete action
 * @param {Function} props.onSave - Function to handle save action
 * @param {number} props.index - Index of the todo item in the list
 * @returns {JSX.Element} The rendered component
 */
export default function Expandable({ title: initialTitle, desc: initialDesc, onClick, onClick2, onSave, index }) {
  const [isEditing, setIsEditing] = useState(false); // State to track if the component is in edit mode
  const [title, setTitle] = useState(initialTitle); // State to manage the title input
  const [desc, setDesc] = useState(initialDesc); // State to manage the description input

  /**
   * Handler for enabling edit mode
   */
  const handleEditClick = () => {
    setIsEditing(true);
  };

  /**
   * Handler for saving changes and disabling edit mode
   */
  const handleSaveClick = () => {
    setIsEditing(false);
    onSave(index, title, desc); // Call the onSave function passed via props
  };

  // Generate current date and time for display
  const date = new Date();
  const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} at ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

  return (
    <div className='flex'>
      <div className='bg-white rounded-md w-3/5 mt-3 ml-6'>
        <Collapsible trigger={
          <div className='text-gray-500 flex justify-between pt-2 pl-2'>
            {isEditing ? (
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className='border p-1'
              />
            ) : (
              <span>{title}</span>
            )}
            <FaChevronDown className='mt-1 mr-1' />
          </div>
        }>
          <p className='pl-2'>
            {isEditing ? (
              <textarea
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                className='border p-1 w-full resize-none'
              />
            ) : (
              <span>{desc}</span>
            )}
          </p>
          <p className='text-xs text-gray-400 text-right'>{formattedDate}</p>
        </Collapsible>
      </div>
      <div className='flex ml-16'>
        {isEditing ? (
          <FaCheck 
            onClick={handleSaveClick} 
            title='Save' 
            className='mt-8 ml-10 text-2xl text-white cursor-pointer' 
          />
        ) : (
          <FaEdit 
            onClick={handleEditClick} 
            title='Edit' 
            className='mt-8 ml-10 text-2xl text-white cursor-pointer' 
          />
        )}
        <FaCheck 
          onClick={onClick2} 
          title='Mark as Completed' 
          className='mt-8 text-white text-2xl ml-8 cursor-pointer hover:text-green-500' 
        />
        <FaTrash 
          onClick={onClick} 
          title='Delete' 
          className='mt-8 text-white text-2xl ml-8 cursor-pointer hover:text-red-500' 
        />
      </div>
    </div>
  );
}
