import React, {useState, useEffect} from 'react';
import './style.css';

const UseEffect =() => {
  const [myNum, setMyNum] = useState(0);

  useEffect(() => {
  document.title = `Chats(${myNum})`;
  });

   return (
   	<>
     <hr></hr>
     <p>UseEffect Hook</p>
   	 <div className="center_div">
   	    <p>{myNum}</p>
   	    <div className="button2" onClick={() => setMyNum(myNum+1)}>
   	        <span></span>
   	        <span></span>
   	        <span></span>
   	        <span></span>
   	        INCR
   	    </div>
   	  </div> 
      <hr></hr>
   	</>
   	);
 };

 export default UseEffect;