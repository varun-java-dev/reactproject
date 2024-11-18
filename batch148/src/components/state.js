import {useState} from 'react'


function State() {

    const [color,setColor] = useState(
        {
            backgroundColor:"red",
            height:"30vh",
            width:"600px",
            border:"3px solid black"
        }
    )
  return (
    <div>
        <div style={color}>
    
        </div>

        <button onClick={()=>{setColor(
            {
                backgroundColor:"black",
                height:"60vh",
                width:"600px",
                border:"30px solid red"
            }
        )}}>Color change</button>

            
<p>
            {color.backgroundColor} <br/>
            {color.border}
        </p>
    </div>

    
  )
}

export default State