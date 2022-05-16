import { useState } from 'react'
import MultipleCustomHook from '../03-examples/MultipleCustomHooks'
import './FocusScreen'
function RealExampleRef () {

    const [show, setShow] = useState(false)

    return(
        <div>
            <h1>RealExampleRef</h1>
            <hr />

           {show && <MultipleCustomHook/>} 


           <button className='btn btn-primary mt-5' onClick={() => { setShow(!show)}}>Show/Hide</button>

        </div>
    )
}

export default RealExampleRef