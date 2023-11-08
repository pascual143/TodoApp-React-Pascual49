import React, { useState } from 'react'

const Todos = () => {
    const [input1, setInput1] = useState([])
    const [tasks, setTasks] = useState([])

    function changeValue(e){
        setInput1(e.target.value)
    }


    return (
        <>
            <div>
                <h1>TODOS</h1>
                <input 
                    value={input1} 
                    onChange={(e)=> setInput1(e.target.value)}
                    onKeyUp = {(e) => {
                        if(e.key == 'Enter'){
                        setTasks(tasks.concat([input1]))
                        setInput1()}  
                    }}
                    type='text' 
                    placeholder='Write your task...'
                    />
                <ul>
                    <li>
                        {tasks.map((tasks, index) => (
                            <li key={index}>{tasks}</li>
                        ))}
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Todos