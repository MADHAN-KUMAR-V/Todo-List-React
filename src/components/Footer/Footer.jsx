import React from 'react'
import "./footer.scss"

const Footer = ({items}) => {


  return (
    <div className='footer'>
        <h3>{items.length} {items.length === 1 ? "Item":"Items"}</h3>
    </div>
  )
}

export default Footer