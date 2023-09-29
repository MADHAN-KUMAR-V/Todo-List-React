import React from 'react'
import "./additem.scss"
import { FaPlus } from 'react-icons/fa'

const AddItem = ({newItem,setNewItem,handleSubmit}) => {
  return (
    <div className='additem'>
        <form 
        onSubmit={handleSubmit}
        >
            <input 
            type="text"
            required
            placeholder='Add item'
            value={newItem}
            onChange={(e)=>setNewItem(e.target.value)}
            />
            <button>
                <FaPlus />
            </button>
        </form>
    </div>
  )
}

export default AddItem