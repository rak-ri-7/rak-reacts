//Hooks example below//

import React, {useState, useEffect} from 'react'

function About() {
  const [count,county] = useState(0);

  useEffect(()=>{
    document.title=`You clicked ${count} times`;
  })
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={()=>county(count+1)}> Click me</button>
       
    </div>
  )
}


export default About;

