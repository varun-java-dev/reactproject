import React from 'react'

function Header(props) {
  return (
    <div>
        <img src={props.image} alt='Hiii' height={"200px"}></img>

        <span>Heading</span>
        <span>login</span>
    </div>
  )
}

export default Header