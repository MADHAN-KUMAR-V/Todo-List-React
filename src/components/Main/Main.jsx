import React from 'react'
import "./main.scss"
import {FaTrashAlt} from "react-icons/fa"


const Main = ({items,handleCheck,handleDelete}) => {
  return (
    <div className='main'>
        {items.length > 0 ? (
            <ul>
            {items.map((item)=>(
                <li key={item.id}>
                    <input 
                    type="checkbox"
                    checked={item.checked}
                    onChange={()=>handleCheck(item.id)}
                     />
                    <label
                    onDoubleClick={()=>handleCheck(item.id)}
                    style={item.checked ? {textDecoration:"line-through"}:null}
                    >{item.item}</label>
                    <button>
                        <FaTrashAlt 
                        role='button'
                        onClick={()=>handleDelete(item.id)}
                        />    
                    </button> 
                </li>
            ))}
        </ul>
        ):(
            <p>No Items</p>
        )}
        
    </div>
  )
}

export default Main