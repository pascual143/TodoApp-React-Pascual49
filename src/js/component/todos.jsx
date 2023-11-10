import React, { useState } from 'react'

const Todos = () => {
    const [input1, setInput1] = useState([])
    const [tasks, setTasks] = useState([])

    //const [visible, setVisible] = useState(true);

    function keypress(e){
            if(e.key == 'Enter'){
            setTasks(tasks.concat([input1]))
        }
    }

    const removeElement = (id) => {
        const newTasks = tasks.filter((index) => index.id !== id)
        setTasks(newTasks)
      };

    return (
        <>
            <div>
                <h1>TODOS</h1>
                <input 
                    value={input1} 
                    onChange={(e)=> setInput1(e.target.value)}
                    onKeyUp = {(e)=> keypress(e)}
                    placeholder='Write your task...'
                    />
                <ul>
                    {tasks.map((tasks, index) => (
                        <li key={index}>
                            {tasks}
                            {" "}
                            <button 
                                onClick={() => removeElement(index)}
                                >
                                <i class="bi bi-trash"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
                                    </svg>
                                </i>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Todos