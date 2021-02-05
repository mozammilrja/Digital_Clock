import React, { useState } from 'react';

const Time = () =>{
    let newTime = new Date().toLocaleTimeString();
    const [ctime, setCtime] = useState(newTime);


    const UpdateTime = () => {
        newTime = new Date().toLocaleTimeString();
        setCtime(newTime);
        
    }
    setInterval(UpdateTime,1000);
    return(
        <div>
        <h1>Digital Clock</h1>
            <h1> {ctime} </h1>
        </div>
    )
}

export default Time